import internetImage from "@/assets/internet service.png";
import wirelessImage from "@/assets/wireless service.png";
import cloudImage from "@/assets/cloud computing.png";
import networkImage from "@/assets/network desing and implementation.png";
import voipImage from "@/assets/voice over internet.png";
import softwareImage from "@/assets/software development.png";
import cyberImage from "@/assets/cyber security (2).png";
import cctvImage from "@/assets/camera.png";
import solarImage from "@/assets/solar-installation.jpg";
import consultancyImage from "@/assets/consultation.png";

export const serviceImages: Record<
  string,
  { src: string; alt: string }
> = {
  "internet-services": {
    src: internetImage,
    alt: "Internet services — fiber optic, microwave and VSAT connectivity infrastructure",
  },
  "wireless-services": {
    src: wirelessImage,
    alt: "Wireless services — Wi-Fi, long-distance links and mesh network infrastructure",
  },
  "cloud-computing": {
    src: cloudImage,
    alt: "Cloud computing — enterprise cloud and data infrastructure",
  },
  "network-design": {
    src: networkImage,
    alt: "Network design and implementation — server and network rack infrastructure",
  },
  "voip-telecom": {
    src: voipImage,
    alt: "VoIP and telecom solutions — professional telecommunications infrastructure",
  },
  "software-development": {
    src: softwareImage,
    alt: "Software development — professional software development environment",
  },
  cybersecurity: {
    src: cyberImage,
    alt: "Cybersecurity — enterprise security and network monitoring",
  },
  "cctv-surveillance": {
    src: cctvImage,
    alt: "CCTV surveillance — professional CCTV installation",
  },
  "renewable-energy": {
    src: solarImage,
    alt: "Renewable energy — solar, inverter and battery storage infrastructure",
  },
  "it-consultancy": {
    src: consultancyImage,
    alt: "IT consultancy — professional technology consulting environment",
  },
};
