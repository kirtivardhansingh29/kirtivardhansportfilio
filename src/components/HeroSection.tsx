import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react";

const roles = [
  "Full-Stack Developer",
  "Machine Learning Enthusiast",
  "Generative AI Explorer",
  "Open Source Contributor",
];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      {/* Hero gradient overlay */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-primary rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-glow-pulse" />
            <div className="relative">
              <img
                src="https://kirtivardhansinghportfili.netlify.app/pggg.jpg"
                alt="Kirti Vardhan Singh"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary/30 shadow-2xl"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background animate-pulse" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-primary font-mono text-sm md:text-base mb-2 animate-fade-in">
              {"<Hello World />"}
            </p>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-slide-up">
              I'm{" "}
              <span className="gradient-text">
                Kirti Vardhan Singh
              </span>
            </h1>

            <div className="h-12 md:h-16 mb-6">
              <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground">
                <span className="text-primary">&gt;</span>{" "}
                <span className="border-r-2 border-primary pr-1">
                  {displayText}
                </span>
              </p>
            </div>

            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mb-8 leading-relaxed">
              2nd Year B.Tech Student at{" "}
              <span className="text-primary font-semibold">GALGOTIAS College</span>
              {" | "}Passionate about building scalable applications and exploring the frontiers of AI.
            </p>

            {/* Location */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground mb-8">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Greater Noida, Uttar Pradesh, India</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <a
                href="mailto:kirtivardhans001@email.com"
                className="glass-card p-3 hover-glow transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/in/kirti-vardhan-singh-093960340"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-3 hover-glow transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://github.com/Kirtivardhans99"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-3 hover-glow transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://codolio.com/profile/aham_kirti666"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-3 hover-glow transition-all duration-300 hover:scale-110"
              >
                <ExternalLink className="w-5 h-5 text-primary" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8">
              <a
                href="#projects"
                className="px-8 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-full border-2 border-primary/50 text-primary font-semibold transition-all duration-300 hover:bg-primary/10 hover:border-primary"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
