const zlib = require("zlib");
const fs = require("fs");

const SIZE = 64;
const R = 12;
const BG = [18, 55, 42]; // #12372A forest green
const GOLD = [184, 155, 94]; // #B89B5E
const FG = [247, 247, 242]; // #F7F7F2

// 5x7 pixel font - T, O, S, S
const FONT = {
  T: [
    "11111",
    "00100",
    "00100",
    "00100",
    "00100",
    "00100",
    "00100",
  ],
  O: [
    "01110",
    "10001",
    "10001",
    "10001",
    "10001",
    "10001",
    "01110",
  ],
  S: [
    "01111",
    "10000",
    "10000",
    "01110",
    "00001",
    "00001",
    "11110",
  ],
};

function inRoundedRect(x, y, w, h, r) {
  const cx = Math.min(Math.max(x, r), w - r);
  const cy = Math.min(Math.max(y, r), h - r);
  const dx = x - cx;
  const dy = y - cy;
  return dx * dx + dy * dy <= r * r;
}

// Draw text centered
const letters = ["T", "O", "S", "S"];
const glyphW = 5;
const space = 1;
const textW = letters.length * glyphW + (letters.length - 1) * space;
const startX = Math.floor((SIZE - textW) / 2);
const startY = 29;

function drawText(px) {
  let x = startX;
  for (const ch of letters) {
    const glyph = FONT[ch];
    for (let gy = 0; gy < 7; gy++) {
      for (let gx = 0; gx < 5; gx++) {
        if (glyph[gy][gx] === "1") {
          const gpx = x + gx;
          const gpy = startY + gy;
          for (let dy = -1; dy <= 0; dy++) {
            for (let dx = -1; dx <= 0; dx++) {
              const ix = gpx * 2 + dx;
              const iy = gpy * 2 + dy;
              if (ix >= 0 && ix < SIZE && iy >= 0 && iy < SIZE) {
                const i = (iy * SIZE + ix) * 4;
                px[i] = FG[0];
                px[i + 1] = FG[1];
                px[i + 2] = FG[2];
                px[i + 3] = 255;
              }
            }
          }
        }
      }
    }
    x += glyphW + space;
  }
}

function render() {
  const px = new Uint8Array(SIZE * SIZE * 4);
  const border = 2;
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      const i = (y * SIZE + x) * 4;
      const inOuter = inRoundedRect(x, y, SIZE - 1, SIZE - 1, R);
      const inInner = inRoundedRect(x - border, y - border, SIZE - 1 - border * 2, SIZE - 1 - border * 2, R - border);
      if (inOuter) {
        if (!inInner) {
          px[i] = GOLD[0];
          px[i + 1] = GOLD[1];
          px[i + 2] = GOLD[2];
        } else {
          px[i] = BG[0];
          px[i + 1] = BG[1];
          px[i + 2] = BG[2];
        }
        px[i + 3] = 255;
      }
    }
  }
  drawText(px);
  return px;
}

function crc32(buf) {
  let table = crc32.table;
  if (!table) {
    table = crc32.table = new Int32Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      table[n] = c;
    }
  }
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = table[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, "ascii");
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

function encodePNG(px, size) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // color type RGBA
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  const raw = Buffer.alloc(size * (size * 4 + 1));
  for (let y = 0; y < size; y++) {
    raw[y * (size * 4 + 1)] = 0; // filter none
    for (let x = 0; x < size * 4; x++) {
      raw[y * (size * 4 + 1) + 1 + x] = px[y * size * 4 + x];
    }
  }
  const idat = zlib.deflateSync(raw);
  return Buffer.concat([
    sig,
    chunk("IHDR", ihdr),
    chunk("IDAT", idat),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

const px = render();
const png = encodePNG(px, SIZE);
fs.writeFileSync("public/favicon.png", png);
console.log("favicon.png written", png.length, "bytes");
