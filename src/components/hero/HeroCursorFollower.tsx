"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
}

export default function HeroCursorFollower({
  heroRef,
}: {
  heroRef: React.RefObject<HTMLElement | null>;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1024) {
      return;
    }

    const hero = heroRef.current;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ring = ringRef.current;
    const spotlight = spotlightRef.current;

    if (!hero || !canvas || !container || !ring || !spotlight) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas to match hero section exactly
    const handleResize = () => {
      const rect = hero.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    handleResize();

    let mouseX = -1000;
    let mouseY = -1000;
    let targetX = -1000;
    let targetY = -1000;
    let ringX = -1000;
    let ringY = -1000;

    let isInside = false;
    let isHoveringInteractive = false;

    const particles: Particle[] = [];
    const colors = ["#735ae5", "#9069fc", "#7ecdf5", "#a78bfa", "#06b6d4", "#ebff39"];

    const onMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      targetX = x;
      targetY = y;

      if (!isInside) {
        isInside = true;
        container.style.opacity = "1";
      }

      // Check if hovering buttons/links for magnetic expansion
      const target = e.target as HTMLElement;
      const isInteractive = Boolean(
        target.closest("button") ||
          target.closest("a") ||
          target.closest('[role="button"]') ||
          target.tagName === "BUTTON" ||
          target.tagName === "A"
      );

      if (isInteractive !== isHoveringInteractive) {
        isHoveringInteractive = isInteractive;
        if (isInteractive) {
          ring.classList.add("cursor-interactive");
        } else {
          ring.classList.remove("cursor-interactive");
        }
      }

      // Spawn soft ethereal stardust particles on movement
      const speed = Math.hypot(x - mouseX, y - mouseY);
      if (speed > 3) {
        const count = Math.min(2, Math.floor(speed / 8) + 1);
        for (let i = 0; i < count; i++) {
          const angle = Math.random() * Math.PI * 2;
          const velocity = Math.random() * 0.75 + 0.2;
          particles.push({
            x: x + (Math.random() - 0.5) * 8,
            y: y + (Math.random() - 0.5) * 8,
            vx: Math.cos(angle) * velocity,
            vy: Math.sin(angle) * velocity,
            size: Math.random() * 3 + 1.5,
            color: colors[Math.floor(Math.random() * colors.length)],
            alpha: 0.85,
            decay: Math.random() * 0.02 + 0.015,
          });
        }
      }

      mouseX = x;
      mouseY = y;
    };

    const onMouseEnter = () => {
      isInside = true;
      container.style.opacity = "1";
    };

    const onMouseLeave = () => {
      isInside = false;
      container.style.opacity = "0";
      isHoveringInteractive = false;
      ring.classList.remove("cursor-interactive");
    };

    hero.addEventListener("mousemove", onMouseMove, { passive: true });
    hero.addEventListener("mouseenter", onMouseEnter);
    hero.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", handleResize);

    // 60-120 FPS hardware-accelerated animation loop
    let animId: number;
    const animate = () => {
      // Smooth spring lerping for ring and spotlight
      ringX += (targetX - ringX) * 0.16;
      ringY += (targetY - ringY) * 0.16;

      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      spotlight.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;

      // Render Canvas Particles
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      hero.removeEventListener("mousemove", onMouseMove);
      hero.removeEventListener("mouseenter", onMouseEnter);
      hero.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, [heroRef]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden z-20 transition-opacity duration-300 opacity-0 select-none"
    >
      {/* 1. Hardware-Accelerated 2D Stardust Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* 2. Fluid Luminous Radial Spotlight Aura */}
      <div
        ref={spotlightRef}
        className="absolute -top-[180px] -left-[180px] w-[360px] h-[360px] rounded-full bg-[radial-gradient(circle_at_center,rgba(115,90,229,0.18)_0%,rgba(126,205,245,0.09)_38%,transparent_70%)] blur-2xl pointer-events-none will-change-transform"
      />

      {/* 3. Magnetic Dual-Concentric Elastic Follower Ring */}
      <div
        ref={ringRef}
        className="hero-cursor-ring absolute -top-4 -left-4 w-8 h-8 rounded-full border border-[#735ae5]/60 bg-[#735ae5]/5 shadow-[0_0_12px_rgba(115,90,229,0.25)] flex items-center justify-center pointer-events-none will-change-transform transition-[width,height,margin,border-color,background-color,box-shadow] duration-200 ease-out"
      >
        {/* Core Luminous Pulse Dot */}
        <div className="hero-cursor-dot w-2 h-2 rounded-full bg-gradient-to-tr from-[#735ae5] via-[#9069fc] to-[#7ecdf5] shadow-[0_0_8px_#735ae5] transition-all duration-200" />
      </div>

      <style jsx>{`
        :global(.hero-cursor-ring.cursor-interactive) {
          width: 56px !important;
          height: 56px !important;
          margin-top: -12px !important;
          margin-left: -12px !important;
          border-color: #735ae5 !important;
          background-color: rgba(115, 90, 229, 0.12) !important;
          backdrop-filter: blur(4px) !important;
          box-shadow: 0 0 28px rgba(115, 90, 229, 0.45), inset 0 0 10px rgba(115, 90, 229, 0.2) !important;
        }
        :global(.hero-cursor-ring.cursor-interactive .hero-cursor-dot) {
          width: 6px !important;
          height: 6px !important;
          background: #ffffff !important;
          box-shadow: 0 0 10px #ffffff !important;
        }
      `}</style>
    </div>
  );
}
