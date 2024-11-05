const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "A full-stack web application built with React and Node.js",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Project Two",
      description: "E-commerce platform with real-time inventory management",
      image: "https://images.unsplash.com/photo-1551038247-3d9af20df552",
      tags: ["Vue.js", "Firebase", "Stripe"],
    },
    {
      title: "Project Three",
      description: "Mobile-first design system and component library",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
      tags: ["TypeScript", "Storybook", "SASS"],
    },
  ];

  return (
    <section id="projects" className="section-padding bg-portfolio-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-portfolio-blue mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover-card"
            >
              <div className="aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-portfolio-blue mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-portfolio-light text-portfolio-blue text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;