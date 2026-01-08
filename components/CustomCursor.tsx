'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const cursorPos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.15;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.15;
      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.3;
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.3;

      cursor.style.transform = 'translate(' + (cursorPos.current.x - 10) + 'px, ' + (cursorPos.current.y - 10) + 'px)';
      dot.style.transform = 'translate(' + (dotPos.current.x - 3) + 'px, ' + (dotPos.current.y - 3) + 'px)';

      requestAnimationFrame(animate);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.classList.contains('magnetic-btn')) {
        setHovered(true);
      }
    };

    const handleMouseOut = () => {
      setHovered(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className={'custom-cursor ' + (hovered ? 'hover' : '')} />
      <div ref={dotRef} className="custom-cursor-dot" />
    </>
  );
}
