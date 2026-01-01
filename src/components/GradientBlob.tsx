import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
interface GradientBlobProps {
  className?: string;
  style?: React.CSSProperties;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  baseColor: string;
  gradientColors: string;
  size: string;
  initialX: string;
  initialY: string;
  animationDuration: string;
  parallaxFactor: number;
  blurAmount: string;
  delay?: string;
}
export function GradientBlob({
  className = '',
  mouseX,
  mouseY,
  baseColor,
  gradientColors,
  size,
  initialX,
  initialY,
  animationDuration,
  parallaxFactor,
  blurAmount,
  delay = '0s'
}: GradientBlobProps) {
  const {
    scrollY
  } = useScroll();
  // Parallax transforms based on mouse position
  // We map the mouse position (0 to window width/height) to a small offset range
  const x = useTransform(mouseX, [0, window.innerWidth], [-50 * parallaxFactor, 50 * parallaxFactor]);
  const y = useTransform(mouseY, [0, window.innerHeight], [-50 * parallaxFactor, 50 * parallaxFactor]);
  // Scroll parallax - move up/down based on scroll
  const scrollYTransform = useTransform(scrollY, [0, 1000], [0, 200 * parallaxFactor]);
  // Generate a unique animation name for this blob to avoid conflicts if we wanted distinct paths
  // For now, we'll use a shared set of keyframes defined in the parent or global CSS,
  // but apply different durations and delays.
  return <motion.div className={`absolute rounded-full mix-blend-screen opacity-70 ${className}`} style={{
    width: size,
    height: size,
    left: initialX,
    top: initialY,
    background: `radial-gradient(circle at center, ${baseColor}, ${gradientColors})`,
    filter: `blur(${blurAmount})`,
    x,
    y: useTransform(y, latest => latest + scrollYTransform.get()),
    animation: `morph ${animationDuration} ease-in-out infinite alternate, drift ${animationDuration} ease-in-out infinite alternate`,
    animationDelay: delay,
    willChange: 'transform, border-radius'
  }} />;
}