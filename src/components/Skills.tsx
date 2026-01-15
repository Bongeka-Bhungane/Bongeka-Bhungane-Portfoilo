import {
  Code,
  Smartphone,
  GitBranch,
  Palette,
  Users,
  Lightbulb,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["React Native"],
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: GitBranch,
      title: "Tools & Version Control",
      skills: ["Git", "GitHub", "Redux"],
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: Palette,
      title: "Design",
      skills: ["UI Design", "Figma"],
      color: "from-cyan-600 to-blue-500",
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: ["Team Work", "Self-Organize", "Scrum/Agile"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Lightbulb,
      title: "Core Competencies",
      skills: ["Problem Solving", "Plan & Design"],
      color: "from-cyan-500 to-blue-600",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A comprehensive set of technical and soft skills that I use to build
            amazing digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6 transform hover:rotate-12 transition-transform duration-300`}
                >
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 text-gray-700 rounded-lg text-sm font-medium border border-blue-100 hover:border-blue-300 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
