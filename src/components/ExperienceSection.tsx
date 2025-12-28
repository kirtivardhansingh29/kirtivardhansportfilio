import { Calendar, Award, Users, Trophy } from "lucide-react";
import loopLogo from "@/assets/loop-logo.png";
import gfgLogo from "@/assets/gfg-logo.svg";
import gdscLogo from "@/assets/gdsc-logo.png";

const experiences = [
  {
    title: "Technical Coordinator",
    organization: "GFGCB_GCET (GeeksforGeeks Campus Club)",
    period: "2024 – Present",
    description:
      "Leading technical initiatives, organizing coding workshops, managing technical events, and mentoring fellow students in DSA and development.",
    icon: Award,
    type: "leadership",
    logo: gfgLogo,
  },
  {
    title: "Member",
    organization: "LOOP Coding Club - GALGOTIAS",
    period: "August 2024 – Present",
    description:
      "Active member of the college coding club, participating in coding events, hackathons, and collaborative programming sessions.",
    icon: Users,
    type: "involvement",
    logo: loopLogo,
  },
  {
    title: "Member",
    organization: "GDSC (Google Developer Student Clubs)",
    period: "August 2024 – Present",
    description:
      "Part of the Google Developer community, learning about Google technologies and participating in community events.",
    icon: Users,
    type: "involvement",
    logo: gdscLogo,
  },
];

const achievements = [
  {
    title: "Coding Competitions",
    description: "Active participant in various coding competitions and hackathons",
    icon: Trophy,
  },
  {
    title: "Technical Communities",
    description: "Engaged member of multiple technical communities",
    icon: Users,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-24 px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">{"// Experience"}</p>
          <h2 className="section-title mb-4">Involvement & Activities</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Timeline */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Current Involvements
            </h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30" />
              
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-16 pb-8 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/30" />
                  
                  <div className="glass-card p-6 hover-glow transition-all duration-300">
                    <div className="flex items-start gap-4">
                      {/* Club Logo */}
                      <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center p-2 shrink-0">
                        <img 
                          src={exp.logo} 
                          alt={exp.organization} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="font-bold text-foreground">{exp.title}</h4>
                          {exp.type === "leadership" && (
                            <span className="px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary border border-primary/30">
                              Leadership
                            </span>
                          )}
                        </div>
                        <p className="text-primary font-semibold text-sm">{exp.organization}</p>
                        <p className="text-muted-foreground text-xs mt-1">{exp.period}</p>
                        <p className="text-muted-foreground text-sm mt-3">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Clubs */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-primary" />
              Highlights
            </h3>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="glass-card p-6 hover-glow transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-primary">
                      <achievement.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{achievement.title}</h4>
                      <p className="text-muted-foreground text-sm">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Club Logos Showcase */}
            <div className="glass-card p-6">
              <h4 className="font-bold text-foreground mb-4">Organizations</h4>
              <div className="flex items-center justify-around gap-4">
                <div className="group flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-xl bg-white/10 p-3 group-hover:bg-white/20 transition-colors">
                    <img src={gfgLogo} alt="GFG" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-xs text-muted-foreground">GFG</span>
                </div>
                <div className="group flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-xl bg-white/10 p-3 group-hover:bg-white/20 transition-colors">
                    <img src={loopLogo} alt="LOOP" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-xs text-muted-foreground">LOOP</span>
                </div>
                <div className="group flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-xl bg-white/10 p-3 group-hover:bg-white/20 transition-colors">
                    <img src={gdscLogo} alt="GDSC" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-xs text-muted-foreground">GDSC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
