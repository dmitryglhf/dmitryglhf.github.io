import { Briefcase, Calendar } from 'lucide-react';

const WorkExperience = () => {
  const experiences = [
    {
      company: "Tech Solutions Inc.",
      position: "Senior Full Stack Developer",
      period: "2021 - Present",
      description: "Led development of enterprise-scale web applications, managing a team of 5 developers. Implemented CI/CD pipelines reducing deployment time by 40%.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    },
    {
      company: "Digital Innovations Lab",
      position: "Frontend Developer",
      period: "2019 - 2021",
      description: "Developed responsive web applications using React and TypeScript. Improved application performance by 60% through code optimization.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      company: "StartUp Ventures",
      position: "Junior Developer",
      period: "2018 - 2019",
      description: "Collaborated on multiple projects using modern JavaScript frameworks. Implemented new features and maintained existing codebase.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-portfolio-blue mb-12 text-center">
          Work Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="grid md:grid-cols-[1fr,2fr] gap-8 items-center hover-card bg-portfolio-light rounded-lg p-6"
            >
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src={experience.image}
                  alt={experience.company}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-portfolio-blue">
                  {experience.position}
                </h3>
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Briefcase size={18} />
                    <span>{experience.company}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>{experience.period}</span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;