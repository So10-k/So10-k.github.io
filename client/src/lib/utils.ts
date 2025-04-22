import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function checkScroll() {
  const elements = document.querySelectorAll('[data-scroll]');
  const windowHeight = window.innerHeight;
  
  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect();
    const elementTop = elementPosition.top;
    
    if (elementTop < windowHeight * 0.8) {
      element.classList.add('visible');
    }
  });
}

export function initParallax() {
  const updateParallaxElements = () => {
    const parallaxBoxes = document.querySelectorAll('.parallax-box');
    parallaxBoxes.forEach((box) => {
      const speed = (box as HTMLElement).dataset.speed || '0.2';
      const yPos = -(window.scrollY * parseFloat(speed));
      (box as HTMLElement).style.transform = `translateY(${yPos}px)`;
    });
  };

  window.addEventListener('scroll', updateParallaxElements);
  updateParallaxElements(); // Initial call
}

export function setBodyScroll(scrollable: boolean) {
  if (scrollable) {
    document.body.style.overflow = '';
  } else {
    document.body.style.overflow = 'hidden';
  }
}
