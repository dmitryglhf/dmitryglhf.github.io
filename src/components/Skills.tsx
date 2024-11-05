import { Code, Palette, Database, Globe } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: <Code size={32} />,
      title: "Frontend Development",
      description: "React, Vue.js, TypeScript, CSS/SASS",
    },
    {
      icon: <Database size={32} />,
      title: "Backend Development",
      description: "Node.js, Python, SQL, MongoDB",
    },
    {
      icon: <Palette size={32} />,
      title: "UI/UX Design",
      description: "Figma, Adobe XD, User Research",
    },
    {
      icon: <Globe size={32} />,
      title: "Web Technologies",
      description: "REST APIs, GraphQL, AWS",
    },
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-portfolio-blue mb-12 text-center">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-portfolio-light hover-card"
            >
              <div className="text-portfolio-accent mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-portfolio-blue mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;