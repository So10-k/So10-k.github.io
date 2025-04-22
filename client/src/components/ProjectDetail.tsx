import { useState, useEffect, useRef } from 'react';
import { Project } from '@/lib/projects';
import { setBodyScroll } from '@/lib/utils';
import useParallax from '@/hooks/use-parallax';

interface ProjectDetailProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetail = ({ project, isOpen, onClose }: ProjectDetailProps) => {
  const [isActive, setIsActive] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  
  useParallax();

  // Handle opening and closing animation with proper timing
  useEffect(() => {
    if (isOpen) {
      setIsActive(true);
      setBodyScroll(false);
    } else {
      setIsActive(false);
      // Delay resetting body scroll until after the animation completes
      const timer = setTimeout(() => {
        setBodyScroll(true);
      }, 400); // matches the CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!project) return null;

  // Determine color classes based on project color
  const colorClasses = {
    primary: {
      bg: 'bg-primary/5',
      text: 'text-primary',
      border: 'border-primary',
      button: 'bg-primary hover:bg-primary/90',
      overlay: 'bg-primary/30'
    },
    secondary: {
      bg: 'bg-secondary/5',
      text: 'text-secondary',
      border: 'border-secondary',
      button: 'bg-secondary hover:bg-secondary/90',
      overlay: 'bg-secondary/30'
    },
    accent: {
      bg: 'bg-accent/5',
      text: 'text-accent',
      border: 'border-accent',
      button: 'bg-accent hover:bg-accent/90',
      overlay: 'bg-accent/30'
    },
    dark: {
      bg: 'bg-dark/5',
      text: 'text-dark',
      border: 'border-dark',
      button: 'bg-dark hover:bg-dark/90',
      overlay: 'bg-dark/30'
    }
  };
  
  const color = colorClasses[project.color];

  return (
    <div 
      ref={overlayRef}
      className={`project-overlay ${isActive ? 'active' : ''}`}
      id={`project-${project.id}`}
    >
      <div className="project-content">
        <div className="fixed top-8 right-8 z-60">
          <button 
            className="close-project-btn bg-white text-dark p-3 rounded-full shadow-lg hover:bg-light transition-colors"
            onClick={onClose}
            aria-label="Close project details"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        
        <div className={`bg-gradient-to-b from-${project.color}/5 to-white py-20 px-4 md:px-0`}>
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-dark mb-4">{project.title}</h2>
              <p className={`text-xl ${color.text} font-medium mb-8`}>{project.description}</p>
              
              {project.details.images[0] && (
                <div className="parallax-container relative h-80 md:h-128 mb-12 overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src={project.details.images[0].url} 
                    alt={project.details.images[0].alt} 
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 ${color.overlay}`}></div>
                  {project.details.images[0].caption && (
                    <div className="absolute bottom-8 left-8 text-white">
                      {project.details.images[0].caption.split(': ').map((part, index) => (
                        index === 0 ? (
                          <h3 key={index} className="text-3xl font-heading font-bold mb-2">{part}</h3>
                        ) : (
                          <p key={index} className="text-xl">{part}</p>
                        )
                      ))}
                    </div>
                  )}
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-heading font-bold text-dark mb-4">Project Overview</h3>
                  <p className="text-dark/80 mb-4">
                    {project.details.overview}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-dark mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.details.technologies.map((tech, index) => {
                      const bgClass = index % 3 === 0 ? 'bg-primary/10 text-primary' : 
                                      index % 3 === 1 ? 'bg-secondary/10 text-secondary' : 
                                      'bg-accent/10 text-accent';
                      return (
                        <span key={index} className={`px-4 py-2 ${bgClass} rounded-lg`}>
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
              
              {project.details.images[1] && (
                <div className="parallax-container relative h-80 rounded-xl shadow-lg mb-12 overflow-hidden">
                  <img 
                    src={project.details.images[1].url} 
                    alt={project.details.images[1].alt} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-dark/40"></div>
                  {project.details.images[1].caption && (
                    <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                      <div>
                        {project.details.images[1].caption.split(': ').map((part, index) => (
                          index === 0 ? (
                            <h3 key={index} className="text-3xl font-heading font-bold mb-2">{part}</h3>
                          ) : (
                            <p key={index} className="text-xl max-w-xl">{part}</p>
                          )
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              <div className="mb-12">
                <h3 className="text-2xl font-heading font-bold text-dark mb-6">Design Process</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {project.details.process.map((step) => {
                    const stepColorClass = 
                      step.step === 1 ? 'text-primary' : 
                      step.step === 2 ? 'text-secondary' : 
                      'text-accent';
                    
                    return (
                      <div key={step.step} className="bg-light p-6 rounded-xl">
                        <div className={`text-4xl ${stepColorClass} font-heading font-bold mb-4`}>
                          {step.step.toString().padStart(2, '0')}
                        </div>
                        <h4 className="text-lg font-heading font-bold text-dark mb-2">{step.title}</h4>
                        <p className="text-dark/70">{step.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="mb-12">
                <h3 className="text-2xl font-heading font-bold text-dark mb-6">Results & Impact</h3>
                <p className="text-dark/80 mb-4">
                  Since launching, {project.title} has received positive feedback from users and has significantly improved metrics:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  {project.details.results.map((result, index) => {
                    const resultColorClass = 
                      index === 0 ? 'bg-primary/5 text-primary' : 
                      index === 1 ? 'bg-secondary/5 text-secondary' : 
                      index === 2 ? 'bg-accent/5 text-accent' : 
                      'bg-dark/5 text-dark';
                    
                    const [bgClass, textClass] = resultColorClass.split(' ');
                    
                    return (
                      <div key={index} className={`text-center p-6 ${bgClass} rounded-xl`}>
                        <div className={`text-3xl font-heading font-bold ${textClass} mb-2`}>{result.value}</div>
                        <p className="text-dark/70">{result.stat}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="text-center mt-16">
                <a 
                  href="#" 
                  className={`inline-block px-8 py-4 ${color.button} text-white font-medium rounded-lg transition-colors shadow-md`}
                >
                  Visit Live Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
