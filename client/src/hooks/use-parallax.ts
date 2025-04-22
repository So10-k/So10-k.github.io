import { useEffect } from 'react';
import { initParallax } from '@/lib/utils';

export function useParallax() {
  useEffect(() => {
    // Initialize parallax effect
    initParallax();

    // No cleanup needed as the event listener is passive
  }, []);
}

export default useParallax;
