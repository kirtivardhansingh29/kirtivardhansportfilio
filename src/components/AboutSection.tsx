import { Code2, Brain, Rocket, Users, Target, Trophy, Flame, Calendar } from "lucide-react";

const stats = [
  { label: "Problems Solved", value: "254", icon: Target },
  { label: "Active Days", value: "67", icon: Calendar },
  { label: "Max Streak", value: "18", icon: Flame },
  { label: "Contests", value: "10", icon: Trophy },
];

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
              I am a highly motivated <span className="text-primary font-semibold">2nd-year B.Tech IT student</span> at Galgotias College of Engineering and Technology (GCET). My core interests lie at the intersection of robust Full-Stack Development, Agentic AI, and Machine Learning.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am dedicated to building <span className="text-primary font-semibold">efficient, scalable applications</span> and thrive in collaborative environments, constantly seeking opportunities to learn new technologies and contribute to open-source projects.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a <span className="text-primary font-semibold">Technical Coordinator at GFGCB_GCET</span>, I actively participate in coding competitions, organize technical events, and mentor fellow students in DSA and development.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card p-4 text-center hover-glow">
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
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
