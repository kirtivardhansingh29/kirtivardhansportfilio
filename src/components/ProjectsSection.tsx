import { ExternalLink, Github, Rocket } from "lucide-react";

const projects = [
  {
    title: "AYUSHMANN AI",
    description:
      "An AI-based meditech program that predicts the possibility of diseases through symptoms analysis. Built with modern AI/ML techniques for accurate health insights.",
    tags: ["React", "Node.js", "PostgreSQL", "Machine Learning"],
    status: "In Development",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, animated portfolio showcasing my projects and skills. Built with React and featuring glassmorphism design, particle effects, and smooth animations.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    status: "Live",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    github: "https://github.com/Kirtivardhans99",
    demo: "#",
  },
  {
    title: "Data Analysis Projects",
    description:
      "Collection of data analysis and visualization projects using Python, Pandas, and NumPy. Exploring patterns and insights from various datasets.",
    tags: ["Python", "Pandas", "NumPy", "Data Visualization"],
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    github: "https://github.com/Kirtivardhans99",
    demo: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">{"// Projects"}</p>
          <h2 className="section-title mb-4">Featured Work</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card overflow-hidden group hover-glow transition-all duration-500"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === "Live"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-primary/20 text-primary border border-primary/30"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/60 backdrop-blur-sm">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-primary/20 border border-primary/50 hover:bg-primary/30 transition-colors"
                  >
                    <Github className="w-5 h-5 text-primary" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-primary/20 border border-primary/50 hover:bg-primary/30 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Rocket className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-md bg-secondary/50 text-muted-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Kirtivardhans99"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/50 text-primary font-semibold hover:bg-primary/10 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
