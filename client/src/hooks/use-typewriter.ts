import { useState, useEffect } from 'react';

interface TypewriterOptions {
  text: string;
  delay?: number;
}

export function useTypewriter({ text, delay = 100 }: TypewriterOptions) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!text) return;
    
    let currentIndex = 0;
    setIsTyping(true);
    
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text.charAt(currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
        setIsTyping(false);
      }
    }, delay);
    
    return () => clearInterval(intervalId);
  }, [text, delay]);
  
  return { displayText, isTyping };
}

export default useTypewriter;
