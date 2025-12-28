import { useState } from "react";

const skillCategories = [
  {
    name: "Languages",
    skills: [
      { name: "Python", level: 85, color: "from-yellow-400 to-yellow-600" },
      { name: "C++", level: 75, color: "from-blue-400 to-blue-600" },
      { name: "JavaScript", level: 70, color: "from-yellow-300 to-orange-500" },
      { name: "SQL", level: 70, color: "from-cyan-400 to-cyan-600" },
    ],
  },
  {
    name: "Web Technologies",
    skills: [
      { name: "HTML/CSS", level: 90, color: "from-orange-400 to-red-500" },
      { name: "React", level: 65, color: "from-cyan-400 to-blue-500" },
      { name: "Node.js", level: 60, color: "from-green-400 to-green-600" },
      { name: "PostgreSQL", level: 55, color: "from-blue-500 to-indigo-600" },
    ],
  },
  {
    name: "Tools & Libraries",
    skills: [
      { name: "Git/GitHub", level: 80, color: "from-gray-400 to-gray-600" },
      { name: "Pandas/NumPy", level: 75, color: "from-purple-400 to-purple-600" },
      { name: "MySQL", level: 70, color: "from-blue-400 to-cyan-500" },
    ],
  },
  {
    name: "Soft Skills",
    skills: [
      { name: "Public Speaking", level: 85, color: "from-pink-400 to-rose-500" },
      { name: "Management", level: 80, color: "from-indigo-400 to-purple-500" },
      { name: "Social Media", level: 75, color: "from-cyan-400 to-teal-500" },
    ],
  },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="relative py-24 px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">{"// Skills"}</p>
          <h2 className="section-title mb-4">Technical Arsenal</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === index
                  ? "bg-gradient-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "glass-card text-muted-foreground hover:text-foreground hover-glow"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="glass-card p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div
                key={skill.name}
                className="space-y-3"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-foreground">{skill.name}</span>
                  <span className="text-primary font-mono text-sm">{skill.level}%</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{
                      width: `${skill.level}%`,
                      boxShadow: `0 0 20px rgba(var(--primary), 0.3)`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Skills Tags */}
        <div className="mt-12">
          <p className="text-center text-muted-foreground mb-6">All Technologies</p>
          <div className="flex flex-wrap justify-center gap-3">
            {skillCategories.flatMap((cat) =>
              cat.skills.map((skill) => (
                <span key={skill.name} className="skill-badge">
                  {skill.name}
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
