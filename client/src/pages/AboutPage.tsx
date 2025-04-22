import { useEffect } from 'react';
import useScrollAnimation from '@/hooks/use-scroll-animation';

const AboutPage = () => {
  useScrollAnimation();

  // Set page title
  useEffect(() => {
    document.title = "About | Sam Otten";
  }, []);

  const designSkills = [
    { name: 'UI/UX Design', percentage: 95 },
    { name: 'Wireframing', percentage: 90 },
    { name: 'Figma/XD', percentage: 85 },
    { name: 'Design Systems', percentage: 80 }
  ];

  const developmentSkills = [
    { name: 'HTML/CSS', percentage: 98 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'React', percentage: 85 },
    { name: 'Responsive Design', percentage: 95 }
  ];

  const creativeSkills = [
    { name: 'Creative Problem Solving', percentage: 92 },
    { name: 'Animation', percentage: 80 },
    { name: 'Visual Storytelling', percentage: 85 },
    { name: 'Branding', percentage: 75 }
  ];

  const softSkills = [
    { name: 'Communication', percentage: 90 },
    { name: 'Project Management', percentage: 85 },
    { name: 'Time Management', percentage: 80 },
    { name: 'Collaboration', percentage: 95 }
  ];

  return (
    <section className="min-h-screen pt-20">
      {/* About Header */}
      <div className="bg-light py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12" data-scroll>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-dark mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-12 items-center">
            <div className="md:w-2/5 mb-8 md:mb-0" data-scroll>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Sam Otten" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-white px-6 py-3 rounded-lg shadow-md">
                  <p className="font-heading font-bold">7+ Years Experience</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-3/5" data-scroll>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-dark mb-4">Creative Developer & Designer</h3>
              <p className="text-lg text-dark/80 mb-6">
                I'm Sam, a passionate digital craftsman based in San Francisco with over 7 years of experience creating beautiful, functional web experiences that people love to use.
              </p>
              <p className="text-lg text-dark/80 mb-6">
                My approach combines strategic thinking with design intuition and technical expertise. I specialize in crafting immersive digital experiences that balance aesthetic appeal with exceptional functionality.
              </p>
              <p className="text-lg text-dark/80 mb-8">
                When I'm not coding or designing, you'll find me exploring photography, experimenting with new technologies, or hiking in the mountains nearby.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-lg">UI/UX Design</span>
                <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-lg">Frontend Development</span>
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-lg">React</span>
                <span className="px-4 py-2 bg-dark/10 text-dark rounded-lg">JavaScript</span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-lg">Responsive Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Skills Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12" data-scroll>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-4">My Skills & Expertise</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-scroll>
              {/* Design Skills */}
              <div className="bg-light p-8 rounded-xl shadow-sm">
                <div className="flex items-center mb-6">
                  <i className="fas fa-palette text-3xl text-primary mr-4"></i>
                  <h3 className="text-xl font-heading font-bold text-dark">Design</h3>
                </div>
                <ul className="space-y-4">
                  {designSkills.map((skill, index) => (
                    <li key={index} className="flex justify-between items-center">
                      <span className="text-dark/80">{skill.name}</span>
                      <div className="w-1/2 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Development Skills */}
              <div className="bg-light p-8 rounded-xl shadow-sm">
                <div className="flex items-center mb-6">
                  <i className="fas fa-code text-3xl text-secondary mr-4"></i>
                  <h3 className="text-xl font-heading font-bold text-dark">Development</h3>
                </div>
                <ul className="space-y-4">
                  {developmentSkills.map((skill, index) => (
                    <li key={index} className="flex justify-between items-center">
                      <span className="text-dark/80">{skill.name}</span>
                      <div className="w-1/2 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-secondary h-2 rounded-full" 
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Creative Skills */}
              <div className="bg-light p-8 rounded-xl shadow-sm">
                <div className="flex items-center mb-6">
                  <i className="fas fa-lightbulb text-3xl text-accent mr-4"></i>
                  <h3 className="text-xl font-heading font-bold text-dark">Creative</h3>
                </div>
                <ul className="space-y-4">
                  {creativeSkills.map((skill, index) => (
                    <li key={index} className="flex justify-between items-center">
                      <span className="text-dark/80">{skill.name}</span>
                      <div className="w-1/2 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-accent h-2 rounded-full" 
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Soft Skills */}
              <div className="bg-light p-8 rounded-xl shadow-sm">
                <div className="flex items-center mb-6">
                  <i className="fas fa-users text-3xl text-dark mr-4"></i>
                  <h3 className="text-xl font-heading font-bold text-dark">Soft Skills</h3>
                </div>
                <ul className="space-y-4">
                  {softSkills.map((skill, index) => (
                    <li key={index} className="flex justify-between items-center">
                      <span className="text-dark/80">{skill.name}</span>
                      <div className="w-1/2 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-dark h-2 rounded-full" 
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
