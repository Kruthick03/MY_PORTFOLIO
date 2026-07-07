import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Smooth lagging effect for the outer ring
  useEffect(() => {
    let animationFrameId;
    
    const updateRing = () => {
      setRingPosition((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      animationFrameId = requestAnimationFrame(updateRing);
    };

    updateRing();

    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  // Hover detection on links and buttons
  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName === 'A' || 
        target.closest('a') || 
        target.tagName === 'BUTTON' || 
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.classList.contains('cursor-pointer');

      if (isClickable) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  if (isHidden) return null;

  return (
    <>
      {/* Inner Dot */}
      <div
        className="custom-cursor hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.5 : 1})`,
          backgroundColor: isHovered ? '#7c3aed' : '#2563eb',
        }}
      />
      {/* Outer Ring */}
      <div
        className="custom-cursor-ring hidden md:block"
        style={{
          left: `${ringPosition.x}px`,
          top: `${ringPosition.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.6 : 1})`,
          borderColor: isHovered ? 'rgba(124, 58, 237, 0.8)' : 'rgba(37, 99, 235, 0.5)',
          backgroundColor: isHovered ? 'rgba(124, 58, 237, 0.05)' : 'transparent',
        }}
      />
    </>
  );
};

export default CustomCursor;
