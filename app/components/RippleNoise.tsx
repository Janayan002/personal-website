"use client";

import { useEffect, useRef } from "react";

type Particle = {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
};

type Ripple = {
  x: number;
  y: number;
  radius: number;
  strength: number;
  phase: number;
};

export default function RippleNoise() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: Particle[] = [];
    const ripples: Ripple[] = [];
    const spacing = 7;
    let lastMouseTime = 0;
    let lastMouseX = 0;
    let lastMouseY = 0;

    const buildParticles = () => {
      particles = [];
      const cols = Math.ceil(width / spacing);
      const rows = Math.ceil(height / spacing);
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing + (Math.random() - 0.5) * 4;
          const y = j * spacing + (Math.random() - 0.5) * 4;
          particles.push({ baseX: x, baseY: y, x, y, vx: 0, vy: 0 });
        }
      }
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildParticles();
    };

    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      const dx = e.clientX - lastMouseX;
      const dy = e.clientY - lastMouseY;
      const dist = Math.hypot(dx, dy);
      if (now - lastMouseTime > 40 || dist > 18) {
        ripples.push({
          x: e.clientX,
          y: e.clientY,
          radius: 0,
          strength: 1,
          phase: Math.random() * Math.PI * 2,
        });
        if (ripples.length > 24) ripples.shift();
        lastMouseTime = now;
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
      }
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let r = ripples.length - 1; r >= 0; r--) {
        const rip = ripples[r];
        rip.radius += 1.2;
        rip.strength *= 0.95;
        if (rip.strength < 0.02 || rip.radius > 90) {
          ripples.splice(r, 1);
        }
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        for (let r = 0; r < ripples.length; r++) {
          const rip = ripples[r];
          const dx = p.x - rip.x;
          const dy = p.y - rip.y;
          const d = Math.hypot(dx, dy);
          if (d < 0.001) continue;
          const angle = Math.atan2(dy, dx);
          const wobble =
            Math.sin(angle * 3 + rip.phase) * 5 +
            Math.sin(angle * 5 - rip.phase * 1.7) * 3;
          const effective = rip.radius + wobble;
          const band = Math.abs(d - effective);
          if (band < 7) {
            const force = ((7 - band) / 7) * rip.strength * 1.2;
            p.vx += (dx / d) * force;
            p.vy += (dy / d) * force;
          }
        }

        p.vx += (p.baseX - p.x) * 0.02;
        p.vy += (p.baseY - p.y) * 0.02;
        p.vx *= 0.88;
        p.vy *= 0.88;
        p.x += p.vx;
        p.y += p.vy;

        const flicker = 0.35 + Math.random() * 0.45;
        const size = Math.random() < 0.5 ? 1 : 1.5;
        ctx.fillStyle = `rgba(180, 180, 180, ${flicker})`;
        ctx.fillRect(p.x, p.y, size, size);
      }

      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden
    />
  );
}
