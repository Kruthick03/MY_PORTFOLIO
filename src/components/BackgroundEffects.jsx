import React, { useEffect, useRef, useState } from 'react';

const BackgroundEffects = ({ theme }) => {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse Parallax coordinates
  useEffect(() => {
    const handleMouseMove = (e) => {
      const xOffset = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const yOffset = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      setMousePos({ x: xOffset * 15, y: yOffset * 15 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const particleCount = Math.min(Math.floor((width * height) / 20000), 80);
    const connectionDistance = 110;

    const canvasMouse = {
      x: null,
      y: null,
      radius: 150,
    };

    const isDark = theme === 'dark';
    const particleColor = isDark ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.15)';

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.radius = Math.random() * 1.5 + 1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;

        if (canvasMouse.x !== null && canvasMouse.y !== null) {
          const dx = canvasMouse.x - this.x;
          const dy = canvasMouse.y - this.y;
          const distance = Math.hypot(dx, dy);
          if (distance < canvasMouse.radius) {
            const force = (canvasMouse.radius - distance) / canvasMouse.radius;
            this.x -= (dx / distance) * force * 0.5;
            this.y -= (dy / distance) * force * 0.5;
          }
        }
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isDark ? `rgba(139, 92, 246, ${alpha})` : `rgba(59, 130, 246, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      drawConnections();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      canvasMouse.x = e.clientX;
      canvasMouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      canvasMouse.x = null;
      canvasMouse.y = null;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      particles.length = 0;
      const newCount = Math.min(Math.floor((width * height) / 20000), 80);
      for (let i = 0; i < newCount; i++) {
        particles.push(new Particle());
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {/* 1. Aurora Gradient Mesh with Mouse Parallax */}
      <div 
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
        }}
      >
        {/* Blob 1 */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/10 dark:bg-blue-600/5 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        {/* Blob 2 */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-500/10 dark:bg-purple-600/5 blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />
        {/* Blob 3 */}
        <div className="absolute top-[40%] right-[20%] w-[500px] h-[500px] rounded-full bg-blue-500/5 dark:bg-purple-600/3 blur-[100px] animate-pulse" style={{ animationDuration: '12s' }} />
      </div>

      {/* 2. Interactive Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-80" />

      {/* 3. Dot Grid Overlay */}
      <div className="absolute inset-0 dot-grid opacity-[0.8]" />
    </div>
  );
};

export default BackgroundEffects;
