import { useState, useEffect, FormEvent } from 'react';
import useScrollAnimation from '@/hooks/use-scroll-animation';

const ContactPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  useScrollAnimation();

  // Set page title
  useEffect(() => {
    document.title = "Contact | Sam Otten";
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // This is a visual-only form, so we'll just show an alert
    alert('This is a demo form. In a real application, this would send your message.');
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="min-h-screen pt-20">
      <div className="bg-light py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16" data-scroll>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-dark mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-dark/70 max-w-2xl mx-auto">
              Have a project in mind or want to discuss work opportunities? I'd love to hear from you!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-md" data-scroll>
              <h3 className="text-2xl font-heading font-bold text-dark mb-6">Send Me a Message</h3>
              
              <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-dark/80 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" 
                    placeholder="John Doe" 
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-dark/80 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" 
                    placeholder="john@example.com" 
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-dark/80 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" 
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-dark/80 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none" 
                    placeholder="Tell me about your project or inquiry..." 
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-md"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div data-scroll>
              <div className="bg-white p-8 rounded-xl shadow-md mb-8">
                <h3 className="text-2xl font-heading font-bold text-dark mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <i className="fas fa-envelope text-primary"></i>
                    </div>
                    <div>
                      <p className="text-dark/60 text-sm">Email</p>
                      <p className="text-dark font-medium">hello@samotten.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-secondary/10 p-3 rounded-lg mr-4">
                      <i className="fas fa-phone-alt text-secondary"></i>
                    </div>
                    <div>
                      <p className="text-dark/60 text-sm">Phone</p>
                      <p className="text-dark font-medium">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-accent/10 p-3 rounded-lg mr-4">
                      <i className="fas fa-map-marker-alt text-accent"></i>
                    </div>
                    <div>
                      <p className="text-dark/60 text-sm">Location</p>
                      <p className="text-dark font-medium">San Francisco, California</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <p className="text-dark/80 mb-4">Connect with me on social media:</p>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-dark/5 hover:bg-dark/10 p-3 rounded-full transition-colors" aria-label="LinkedIn">
                      <i className="fab fa-linkedin-in text-dark"></i>
                    </a>
                    <a href="#" className="bg-dark/5 hover:bg-dark/10 p-3 rounded-full transition-colors" aria-label="Twitter">
                      <i className="fab fa-twitter text-dark"></i>
                    </a>
                    <a href="#" className="bg-dark/5 hover:bg-dark/10 p-3 rounded-full transition-colors" aria-label="GitHub">
                      <i className="fab fa-github text-dark"></i>
                    </a>
                    <a href="#" className="bg-dark/5 hover:bg-dark/10 p-3 rounded-full transition-colors" aria-label="Dribbble">
                      <i className="fab fa-dribbble text-dark"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-heading font-bold text-dark mb-6">Availability</h3>
                <p className="text-dark/80 mb-4">
                  I'm currently available for freelance work and new projects. My typical response time is within 24 hours.
                </p>
                <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                  <p className="text-dark/80">
                    <span className="font-medium">Currently:</span> Available for new projects starting {new Date().toLocaleString('default', { month: 'long' })} {new Date().getFullYear()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
