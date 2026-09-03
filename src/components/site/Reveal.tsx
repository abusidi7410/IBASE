import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Reveal — wraps content and fades/slides it into view when it enters the
 * viewport. Uses an IntersectionObserver (one element, unobserve after reveal)
 * so scrolling stays cheap. Respects prefers-reduced-motion via CSS.
 *
 * - `as`        — element/component to render (default "div")
 * - `className` — extra classes
 * - `stagger`   — when true, applies the staggered group reveal to children
 * - `delay`     — optional transition delay in ms
 */
export function Reveal({
  children,
  className = "",
  as: Tag = "div",
  stagger = false,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  stagger?: boolean;
  delay?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = [
    stagger ? "reveal-stagger" : "reveal-item",
    visible ? "is-visible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={classes}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
