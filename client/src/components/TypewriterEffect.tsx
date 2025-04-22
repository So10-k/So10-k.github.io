import { useEffect, useRef } from 'react';
import useTypewriter from '@/hooks/use-typewriter';

interface TypewriterEffectProps {
  text: string;
  className?: string;
  delay?: number;
}

const TypewriterEffect = ({ text, className, delay = 100 }: TypewriterEffectProps) => {
  const { displayText, isTyping } = useTypewriter({ text, delay });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.classList.add('typewriter');
    }
    
    return () => {
      if (containerRef.current) {
        containerRef.current.classList.remove('typewriter');
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={className}
      style={{ 
        borderRight: isTyping ? '3px solid hsl(var(--accent))' : 'none'
      }}
    >
      {displayText}
    </div>
  );
};

export default TypewriterEffect;
