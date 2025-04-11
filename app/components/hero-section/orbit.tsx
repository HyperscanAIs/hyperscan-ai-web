"use client";

import { Brain, Cpu, Database } from "lucide-react";
import { useLayoutEffect, useRef } from "react";

const Orbit = () => {
  const orbitRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbitRef.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } =
        orbitRef.current.getBoundingClientRect();

      const x = (clientX - left - width / 2) / 25;
      const y = (clientY - top - height / 2) / 25;

      orbitRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div
      ref={orbitRef}
      className="relative w-72 h-72 md:w-96 md:h-96 perspective-1000 transition-transform duration-300 ease-out transform-3d"
    >
      {/* Center sphere */}
      <div className="absolute top-1/2 left-1/2 transform translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/30 backdrop-blur-xs border border-primary/50 animate-pulse-glow flex items-center justify-center">
        <Brain className="w-12 h-12 md:w-16 md:h-16 text-primary" />
      </div>

      {/* Orbiting elements */}
      <div className="absolute top-0 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-secondary/30 backdrop-blur-xs border border-secondary/50 flex items-center justify-center animate-float">
        <Database className="w-8 h-8 text-secondary" />
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-16 h-16 rounded-full bg-accent/30 backdrop-blur-xs border border-accent/50 flex items-center justify-center animate-float delay-[1s]">
        <Cpu className="w-8 h-8 text-accent" />
      </div>

      {/* Orbiting rings */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 rounded-full border border-primary/30 animate-rotate-slow" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 rounded-full border border-accent/30 animate-rotate-slow" />

      {/* Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-primary/80"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `translateZ(${Math.random() * 100 - 50}px)`,
            animationDelay: `${Math.random() * 5}s`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Orbit;
