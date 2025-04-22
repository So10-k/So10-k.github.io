import { useEffect } from 'react';
import { Link } from 'wouter';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import useParallax from '@/hooks/use-parallax';
import TypewriterEffect from '@/components/TypewriterEffect';
import { projects } from '@/lib/projects';

const HomePage = () => {
  useScrollAnimation();
  useParallax();

  // Set page title
  useEffect(() => {
    document.title = "Sam Otten | Creative Portfolio";
  }, []);

  // Get first 3 projects for featured work
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="min-h-screen pt-20 flex flex-col">
      {/* Hero Section with Parallax */}
      <div className="parallax bg-gradient-to-r from-primary/10 to-secondary/10 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="parallax-box absolute top-20 right-20 w-32 h-32 bg-primary/20 rounded-full" data-speed="0.05"></div>
          <div className="parallax-box absolute bottom-40 left-10 w-24 h-24 bg-secondary/20 rounded-full" data-speed="-0.08"></div>
          <div className="parallax-box absolute top-40 left-1/4 w-16 h-16 bg-accent/20 rounded-full" data-speed="0.1"></div>
          <div className="parallax-box absolute bottom-20 right-1/3 w-20 h-20 bg-primary/10 rounded-full" data-speed="-0.05"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 z-10">
          <div className="max-w-3xl" data-scroll>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 text-dark">
              <span>Hi, I'm </span>
              <span className="text-primary">Sam Otten</span>
            </h1>
            <div className="h-12 md:h-16">
              <TypewriterEffect 
                text="Creative Developer & Designer" 
                className="text-xl md:text-2xl text-dark/80 font-light"
              />
            </div>
            <p className="text-lg md:text-xl text-dark/70 my-6">
              I create engaging digital experiences that connect brands with their audience through thoughtful design and innovative development.
            </p>
            <div className="flex space-x-4 mt-8">
              <Link href="/projects" className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-md">
                View My Work
              </Link>
              <Link href="/contact" className="px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary/5 transition-colors">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Work Preview */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16" data-scroll>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-4">Featured Work</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-scroll>
            {featuredProjects.map((project, index) => {
              const colorClass = 
                project.color === 'primary' ? 'bg-primary/80' : 
                project.color === 'secondary' ? 'bg-secondary/80' : 
                'bg-accent/80';
              
              return (
                <Link key={project.id} href="/projects" className="group block relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all">
                  <div className={`absolute inset-0 ${colorClass} opacity-0 group-hover:opacity-90 transition-opacity flex items-center justify-center z-10`}>
                    <div className="text-white text-center p-4">
                      <p className="text-xl font-heading font-bold">{project.title}</p>
                      <p className="text-sm mt-2">{project.description}</p>
                    </div>
                  </div>
                  <img 
                    src={project.imageUrl} 
                    alt={`${project.title} Project`} 
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
              );
            })}
          </div>
          
          <div className="text-center mt-12" data-scroll>
            <Link href="/projects" className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors">
              <span>View All Projects</span>
              <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
