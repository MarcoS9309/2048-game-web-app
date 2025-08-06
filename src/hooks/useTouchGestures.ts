import { useEffect, useRef } from 'react';
import { Direction } from '@/lib/game2048';

interface TouchHandler {
  onMove: (direction: Direction) => void;
}

export function useTouchGestures({ onMove }: TouchHandler) {
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStartRef.current) return;

      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - touchStartRef.current.x;
      const deltaY = touch.clientY - touchStartRef.current.y;
      const absDeltaX = Math.abs(deltaX);
      const absDeltaY = Math.abs(deltaY);

      // Minimum swipe distance
      const minSwipeDistance = 30;

      if (Math.max(absDeltaX, absDeltaY) < minSwipeDistance) {
        return;
      }

      e.preventDefault();

      if (absDeltaX > absDeltaY) {
        // Horizontal swipe
        onMove(deltaX > 0 ? 'right' : 'left');
      } else {
        // Vertical swipe
        onMove(deltaY > 0 ? 'down' : 'up');
      }

      touchStartRef.current = null;
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: false });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [onMove]);
}