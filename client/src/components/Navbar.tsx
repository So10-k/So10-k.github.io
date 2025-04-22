import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';

const Navbar = () => {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  // Determine active link
  const getNavLinkClasses = (path: string) => {
    const baseClasses = "transition-colors";
    const activeClasses = "text-primary font-medium";
    const inactiveClasses = "text-dark hover:text-primary font-medium";
    
    return `${baseClasses} ${location === path ? activeClasses : inactiveClasses}`;
  };

  return (
    <nav className={`fixed top-0 left-0 w-full bg-white bg-opacity-95 shadow-sm z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`} id="main-nav">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-heading font-bold text-dark">
            <span className="text-primary">Sam</span> Otten
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path} 
                className={getNavLinkClasses(link.path)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            id="mobile-menu-button" 
            className="md:hidden text-dark focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle Mobile Menu"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div id="mobile-menu" className={`mobile-menu fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 md:hidden ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="p-5">
          <div className="flex justify-end">
            <button 
              id="close-mobile-menu" 
              className="text-dark focus:outline-none"
              onClick={closeMobileMenu}
              aria-label="Close Mobile Menu"
            >
              <i className="fas fa-times text-2xl"></i>
            </button>
          </div>
          <div className="flex flex-col space-y-6 mt-10">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path} 
                className={getNavLinkClasses(link.path)}
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
