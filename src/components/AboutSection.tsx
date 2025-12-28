import { Code2, Brain, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Building robust web applications with modern technologies",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Exploring AI and creating intelligent solutions",
  },
  {
    icon: Rocket,
    title: "Generative AI",
    description: "Working with cutting-edge AI models and applications",
  },
  {
    icon: Users,
    title: "Open Source",
    description: "Contributing to and learning from the community",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">{"// About"}</p>
          <h2 className="section-title mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a highly motivated <span className="text-primary font-semibold">2nd-year B.Tech student</span> specializing in Information Technology. My core interests lie at the intersection of robust Full-Stack Development, Agentic AI, and Machine Learning.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am dedicated to building <span className="text-primary font-semibold">efficient, scalable applications</span> and thrive in collaborative environments, constantly seeking opportunities to learn new technologies and contribute to open-source projects.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I actively participate in <span className="text-primary font-semibold">coding competitions</span> and technical communities, pushing myself to grow as a developer every day.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="glass-card p-4 text-center hover-glow">
                <p className="text-3xl font-bold gradient-text">5+</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div className="glass-card p-4 text-center hover-glow">
                <p className="text-3xl font-bold gradient-text">2+</p>
                <p className="text-sm text-muted-foreground">Years Coding</p>
              </div>
              <div className="glass-card p-4 text-center hover-glow">
                <p className="text-3xl font-bold gradient-text">100+</p>
                <p className="text-sm text-muted-foreground">Commits</p>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card p-6 hover-glow transition-all duration-500 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
