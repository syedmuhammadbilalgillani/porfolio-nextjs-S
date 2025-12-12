'use client';

import React, { useEffect } from 'react';
import gsap from 'gsap';
import './CustomCursor.scss';

export default function CustomCursor() {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      cursorMovingAnimation(event);
    };

    const cursorMovingAnimation = (event: MouseEvent) => {
      try {
        const timing = gsap.timeline({
          defaults: {
            x: event.clientX,
            y: event.clientY,
          },
        });

        timing.to(
          '.cs_cursor_sm',
          {
            x: event.clientX,
            y: event.clientY,
            ease: 'power2.out',
          },
          '-=0.01'
        );
      } catch (err) {
        console.log(err);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <span className="cs_cursor_sm"></span>
    </>
  );
}
