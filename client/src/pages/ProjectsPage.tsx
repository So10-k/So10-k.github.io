import { useState, useEffect } from 'react';
import { projects, projectTags, Project } from '@/lib/projects';
import ProjectDetail from '@/components/ProjectDetail';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import useParallax from '@/hooks/use-parallax';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  
  useScrollAnimation();
  useParallax();

  // Set page title
  useEffect(() => {
    document.title = "Projects | Sam Otten";
  }, []);

  // Filter projects when the activeFilter changes
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => 
        project.category.split(' ').includes(activeFilter)
      );
      setFilteredProjects(filtered);
    }
  }, [activeFilter]);

  const handleFilterClick = (filterId: string) => {
    setActiveFilter(filterId);
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
  };

  return (
    <section className="min-h-screen pt-20">
      {/* Projects Header with Parallax */}
      <div className="parallax bg-gradient-to-r from-secondary/5 to-primary/5 py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="parallax-box absolute top-20 right-1/4 w-32 h-32 bg-primary/10 rounded-full" data-speed="0.04"></div>
          <div className="parallax-box absolute bottom-10 left-1/3 w-24 h-24 bg-secondary/10 rounded-full" data-speed="-0.06"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16" data-scroll>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-dark mb-4">My Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-dark/70 max-w-3xl mx-auto">
              Explore my recent work across design and development. Each project represents a unique challenge and solution.
            </p>
          </div>
          
          {/* Project Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12" data-scroll>
            {projectTags.map((tag) => (
              <button 
                key={tag.id}
                className={`filter-btn px-6 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === tag.id 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-dark hover:bg-light'
                }`} 
                onClick={() => handleFilterClick(tag.id)}
              >
                {tag.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Projects Grid */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-scroll>
            {filteredProjects.map((project) => {
              const colorClass = 
                project.color === 'primary' ? 'bg-primary/80' : 
                project.color === 'secondary' ? 'bg-secondary/80' : 
                project.color === 'accent' ? 'bg-accent/80' :
                'bg-dark/80';
              
              return (
                <div 
                  key={project.id} 
                  className="project-card rounded-xl overflow-hidden shadow-md group" 
                  data-category={project.category} 
                  data-project-id={project.id}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 ${colorClass} opacity-0 group-hover:opacity-90 transition-opacity flex items-center justify-center`}>
                      <button 
                        className="view-project-btn px-6 py-3 bg-white text-dark font-medium rounded-lg hover:bg-light transition-colors shadow-md"
                        onClick={() => handleProjectClick(project)}
                      >
                        View Project
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-bold text-dark">{project.title}</h3>
                    <p className="text-dark/70 mt-2">{project.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Project Detail Overlay */}
      <ProjectDetail 
        project={selectedProject} 
        isOpen={isDetailOpen} 
        onClose={handleCloseDetail} 
      />
    </section>
  );
};

export default ProjectsPage;
