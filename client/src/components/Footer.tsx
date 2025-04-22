import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-dark text-black py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-2xl font-heading font-bold mb-4 inline-block"
            >
              <span className="text-primary">Sam</span> Otten
            </Link>
            <p className="text-black/70 my-4 max-w-sm">
              Creative developer and designer focused on crafting engaging
              digital experiences that connect brands with their audience.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="bg-dark-800 hover:bg-primary p-2 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className="bg-dark-800 hover:bg-primary p-2 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="bg-dark-800 hover:bg-primary p-2 rounded-full transition-colors"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="#"
                className="bg-dark-800 hover:bg-primary p-2 rounded-full transition-colors"
                aria-label="Dribbble"
              >
                <i className="fab fa-dribbble"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-heading font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-black/70 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-black/70 hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-black/70 hover:text-primary transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-black/70 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-black/70">
                <i className="fas fa-envelope mr-2 text-primary"></i>
                hello@samotten.com
              </li>
              <li className="flex items-center text-black/70">
                <i className="fas fa-phone-alt mr-2 text-primary"></i>
                +1 (555) 123-4567
              </li>
              <li className="flex items-center text-black/70">
                <i className="fas fa-map-marker-alt mr-2 text-primary"></i>
                San Francisco, CA
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-black/50 text-sm">
            &copy; {new Date().getFullYear()} Sam Otten. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a
              href="#"
              className="text-black/50 text-sm hover:text-primary transition-colors mr-6"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-black/50 text-sm hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
