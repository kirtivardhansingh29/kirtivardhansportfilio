import { Calendar, Award, Users, Trophy } from "lucide-react";

const experiences = [
  {
    title: "Member",
    organization: "LOOP Coding Club - GALGOTIAS",
    period: "August 2024 – Present",
    description:
      "Active member of the college coding club, participating in coding events, hackathons, and collaborative programming sessions.",
    icon: Users,
    type: "involvement",
  },
  {
    title: "Member",
    organization: "GDSC (Google Developer Student Clubs)",
    period: "August 2024 – Present",
    description:
      "Part of the Google Developer community, learning about Google technologies and participating in community events.",
    icon: Award,
    type: "involvement",
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
                      <div className="p-3 rounded-xl bg-primary/10">
                        <exp.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground">{exp.title}</h4>
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

          {/* Achievements */}
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

            {/* College Info Card */}
            <div className="glass-card p-6 hover-glow">
              <div className="flex items-center gap-4">
                <img
                  src="https://kirtivardhansinghportfili.netlify.app/loop.png"
                  alt="LOOP Club"
                  className="w-16 h-16 rounded-xl object-contain bg-white/10 p-2"
                />
                <div>
                  <h4 className="font-bold text-foreground">LOOP Coding Club</h4>
                  <p className="text-muted-foreground text-sm">
                    Official coding club of GALGOTIAS College of Engineering
                  </p>
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
