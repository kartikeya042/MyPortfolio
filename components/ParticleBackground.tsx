"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
};

const CONNECTION_DISTANCE = 120;
const MOUSE_RADIUS = 140;
const MAX_SPEED = 0.55;

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId = 0;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let dpr = 1;

    const mouse = {
      x: -9999,
      y: -9999,
      active: false,
    };

    const randomVelocity = () => (Math.random() - 0.5) * 0.45;

    const createParticles = () => {
      const count = Math.max(24, Math.floor((width * height) / 9000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: randomVelocity(),
        vy: randomVelocity(),
        size: Math.random() * 1.6 + 1,
      }));
    };

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = window.devicePixelRatio || 1;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createParticles();
    };

    const onMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = true;
    };

    const onMouseLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const animate = () => {
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];

        // Add a tiny drift so movement feels organic without becoming jittery.
        p.vx += (Math.random() - 0.5) * 0.004;
        p.vy += (Math.random() - 0.5) * 0.004;

        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const distance = Math.hypot(dx, dy);

          if (distance < MOUSE_RADIUS && distance > 0.001) {
            const push = ((MOUSE_RADIUS - distance) / MOUSE_RADIUS) * 0.08;
            p.vx += (dx / distance) * push;
            p.vy += (dy / distance) * push;
          }
        }

        p.vx = Math.max(-MAX_SPEED, Math.min(MAX_SPEED, p.vx));
        p.vy = Math.max(-MAX_SPEED, Math.min(MAX_SPEED, p.vy));

        p.x += p.vx;
        p.y += p.vy;

        if (p.x <= 0 || p.x >= width) {
          p.vx *= -1;
          p.x = Math.max(0, Math.min(width, p.x));
        }

        if (p.y <= 0 || p.y >= height) {
          p.vy *= -1;
          p.y = Math.max(0, Math.min(height, p.y));
        }

        ctx.beginPath();
        ctx.fillStyle = "#ffffff";
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i += 1) {
        const p1 = particles[i];

        for (let j = i + 1; j < particles.length; j += 1) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.hypot(dx, dy);

          if (distance < CONNECTION_DISTANCE) {
            const alpha = 1 - distance / CONNECTION_DISTANCE;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = window.requestAnimationFrame(animate);
    };

    resizeCanvas();
    animationFrameId = window.requestAnimationFrame(animate);

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed top-0 left-0 z-0 h-full w-full bg-black"
      aria-hidden="true"
    />
  );
}
