import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-portfolio-blue to-portfolio-accent">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 fade-in" style={{ animationDelay: '0.2s' }}>
          Hello, I'm <span className="text-portfolio-light">Your Name</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 fade-in" style={{ animationDelay: '0.4s' }}>
          Full Stack Developer & Designer
        </p>
        <button 
          onClick={scrollToProjects}
          className="bg-white text-portfolio-blue px-8 py-3 rounded-full font-semibold hover:bg-portfolio-light transition-colors fade-in" 
          style={{ animationDelay: '0.6s' }}
        >
          View My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;