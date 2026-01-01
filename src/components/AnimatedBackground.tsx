import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { GradientBlob } from './GradientBlob';
export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  // Mouse position motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  // Smooth out the mouse movement
  const springConfig = {
    damping: 25,
    stiffness: 150
  };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);
  return <div ref={containerRef} className="fixed inset-0 w-full h-full overflow-hidden bg-[#0a0e27] -z-10" aria-hidden="true">
      {/* Global Styles for Keyframe Animations */}
      <style>{`
        @keyframes morph {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          100% { border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%; }
        }
        @keyframes drift {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -50px) rotate(10deg); }
          66% { transform: translate(-20px, 20px) rotate(-5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
      `}</style>

      {/* Blob 1 (Back): Deep Blue/Purple - Large, slow */}
      <GradientBlob mouseX={smoothX} mouseY={smoothY} baseColor="#1a1f3a" gradientColors="#2d1b69" size="800px" initialX="-10%" initialY="-10%" animationDuration="40s" parallaxFactor={0.2} blurAmount="80px" delay="0s" />

      {/* Blob 2: Purple/Indigo - Medium-Large */}
      <GradientBlob mouseX={smoothX} mouseY={smoothY} baseColor="#4c1d95" gradientColors="#2d1b69" size="600px" initialX="60%" initialY="10%" animationDuration="30s" parallaxFactor={0.3} blurAmount="60px" delay="-5s" />

      {/* Blob 3: Indigo/Cyan - Medium */}
      <GradientBlob mouseX={smoothX} mouseY={smoothY} baseColor="#4338ca" gradientColors="#00f5ff" size="700px" initialX="20%" initialY="40%" animationDuration="35s" parallaxFactor={0.4} blurAmount="70px" delay="-10s" />

      {/* Blob 4: Pink/Purple - Medium-Small */}
      <GradientBlob mouseX={smoothX} mouseY={smoothY} baseColor="#ff006e" gradientColors="#4c1d95" size="500px" initialX="50%" initialY="60%" animationDuration="25s" parallaxFactor={0.5} blurAmount="50px" delay="-15s" />

      {/* Blob 5 (Front): Cyan/Pink - Small, fast */}
      <GradientBlob mouseX={smoothX} mouseY={smoothY} baseColor="#00f5ff" gradientColors="#ff006e" size="400px" initialX="-5%" initialY="50%" animationDuration="20s" parallaxFactor={0.6} blurAmount="40px" delay="-2s" />

      {/* Grain Overlay */}
      <div className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none mix-blend-overlay">
        <svg className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Vignette for depth */}
      <div className="absolute inset-0 bg-radial-gradient-vignette pointer-events-none" />
    </div>;
}