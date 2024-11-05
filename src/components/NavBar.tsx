import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-heading font-bold text-portfolio-blue">Portfolio</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-portfolio-accent">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-portfolio-accent">About</button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-portfolio-accent">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-portfolio-accent">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-portfolio-accent">Contact</button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-portfolio-accent">Home</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-portfolio-accent">About</button>
            <button onClick={() => scrollToSection('skills')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-portfolio-accent">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-portfolio-accent">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-portfolio-accent">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;