"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function AnimatedCursor() {
  const [isPointerFine, setIsPointerFine] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  const springConfig = { stiffness: 350, damping: 30, mass: 0.4 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);
  const trailX = useSpring(0, { stiffness: 200, damping: 25, mass: 0.6 });
  const trailY = useSpring(0, { stiffness: 200, damping: 25, mass: 0.6 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const update = () => setIsPointerFine(media.matches);
    update();
    media.addEventListener?.("change", update);
    return () => media.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    if (!isPointerFine) return;
    const handleMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
    };
    const down = () => setIsPressed(true);
    const up = () => setIsPressed(false);
    const onOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (!target) return;
      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor="hover"]'
      );
      setIsHoveringInteractive(Boolean(interactive));
    };
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("mouseover", onOver);
    };
  }, [isPointerFine, cursorX, cursorY, trailX, trailY]);

  if (!isPointerFine) return null;

  return (
    <>
      {/* Core dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
          width: isPressed ? 4 : 6,
          height: isPressed ? 4 : 6,
          boxShadow:
            "0 0 18px rgba(139,92,246,0.8), 0 0 36px rgba(99,102,241,0.6)",
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(139,92,246,0.9) 60%, rgba(99,102,241,0.9))",
        }}
      />
      {/* Outer ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[99] -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-sm mix-blend-screen"
        style={{
          x: trailX,
          y: trailY,
          width: isHoveringInteractive ? 60 : 40,
          height: isHoveringInteractive ? 60 : 40,
          border: "1px solid rgba(255,255,255,0.25)",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.18), rgba(99,102,241,0.12) 60%, rgba(139,92,246,0.08))",
          boxShadow:
            isHoveringInteractive
              ? "0 0 35px rgba(139,92,246,0.55), 0 0 70px rgba(99,102,241,0.35)"
              : "0 0 24px rgba(139,92,246,0.35)",
          transition: "width 120ms ease, height 120ms ease, box-shadow 150ms ease",
        }}
      />
    </>
  );
}

export default AnimatedCursor;


