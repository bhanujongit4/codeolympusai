"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";

type GradientDotsProps = {
  duration?: number;
  dotSize?: number;
  spacing?: number;
  colorCycleDuration?: number;
  backgroundColor?: string;
  opacity?: number;
  className?: string;
  style?: CSSProperties;
};

export function GradientDots({
  duration = 20,
  dotSize = 6,
  spacing = 12,
  colorCycleDuration = 8,
  backgroundColor = "var(--background)",
  opacity = 0.7,
  className,
  style,
}: GradientDotsProps) {
  return (
    <div
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        opacity,
        ...style,
      }}
      aria-hidden="true"
    >
      <motion.div
        style={{ position: "absolute", inset: 0 }}
        animate={{ filter: ["hue-rotate(0deg)", "hue-rotate(360deg)"] }}
        transition={{ duration: colorCycleDuration, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor,
            backgroundImage:
              `radial-gradient(circle at center, rgba(34,197,94,0.2) 0, rgba(34,197,94,0.12) ${dotSize / 2}px, rgba(34,197,94,0.04) ${dotSize * 0.8}px, transparent ${dotSize}px)`,
            backgroundSize: `${spacing}px ${spacing}px`,
            filter: "blur(0.2px)",
          }}
          animate={{ backgroundPosition: ["0px 0px", `${spacing}px ${spacing}px`] }}
          transition={{ duration, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </div>
  );
}
