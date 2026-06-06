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
        className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          width: isPressed ? 4 : 8,
          height: isPressed ? 4 : 8,
          background: "hsl(var(--primary))",
          boxShadow: "0 0 10px hsl(var(--primary))",
        }}
      />
      {/* Outer ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[99] -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-sm"
        style={{
          x: trailX,
          y: trailY,
          width: isHoveringInteractive ? 50 : 36,
          height: isHoveringInteractive ? 50 : 36,
          border: "1.5px solid hsl(var(--primary) / 0.5)",
          background: isHoveringInteractive ? "hsl(var(--primary) / 0.1)" : "transparent",
          transition: "width 150ms ease, height 150ms ease, background-color 150ms ease",
        }}
      />
    </>
  );
}

export default AnimatedCursor;


