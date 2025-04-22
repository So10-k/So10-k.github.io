import { useEffect } from 'react';
import { checkScroll } from '@/lib/utils';

export function useScrollAnimation() {
  useEffect(() => {
    // Check for elements to animate on scroll
    const handleScroll = () => {
      checkScroll();
    };

    // Initial check
    setTimeout(checkScroll, 100);

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
}

export default useScrollAnimation;
