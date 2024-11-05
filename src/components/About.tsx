const About = () => {
  return (
    <section id="about" className="section-padding bg-portfolio-light">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-portfolio-blue mb-8 text-center">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1551038247-3d9af20df552"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              I'm a passionate developer with a keen eye for design and a love for creating beautiful, functional web applications. With years of experience in both front-end and back-end development, I bring ideas to life through clean code and intuitive user experiences.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing and mentoring.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;