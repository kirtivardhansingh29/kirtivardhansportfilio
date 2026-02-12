import { ExternalLink } from "lucide-react";
import { useCodolioStats } from "@/hooks/useCodolioStats";

const codingProfiles = [
  {
    name: "LeetCode",
    username: "Kirtivardhan_singh",
    url: "https://leetcode.com/u/Kirtivardhan_singh",
    color: "from-yellow-500 to-orange-500",
    icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
  },
  {
    name: "GeeksforGeeks",
    username: "kirtivardz7rp",
    url: "https://www.geeksforgeeks.org/user/kirtivardz7rp",
    stats: "39 Problems",
    color: "from-green-500 to-emerald-600",
    icon: "https://media.geeksforgeeks.org/gfg-gg-logo.svg",
  },
  {
    name: "CodeChef",
    username: "aham_kirti666",
    url: "https://www.codechef.com/users/aham_kirti666",
    stats: "Rating: 1125 | 137 Problems",
    color: "from-amber-600 to-yellow-700",
    icon: "https://cdn.codechef.com/images/cc-logo.svg",
  },
  {
    name: "CodeForces",
    username: "kirtivardhans001",
    url: "https://codeforces.com/profile/kirtivardhans001",
    color: "from-blue-500 to-cyan-500",
    icon: "https://codolio.com/icons/codeforces.png",
  },
  {
    name: "HackerRank",
    username: "kirtivardhans001",
    url: "https://www.hackerrank.com/profile/kirtivardhans001",
    stats: "26 Problems | Python & C++ Badges",
    color: "from-green-600 to-teal-600",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png",
  },
  {
    name: "Codolio",
    username: "aham_kirti666",
    url: "https://codolio.com/profile/aham_kirti666",
    stats: "Global Rank: 16309",
    color: "from-orange-500 to-red-500",
    icon: "https://codolio.com/favicon.ico",
  },
];

const dsaTopics = [
  { name: "Arrays", count: 22 },
  { name: "Sorting", count: 14 },
  { name: "Algorithms", count: 14 },
  { name: "C++", count: 13 },
  { name: "Mathematical", count: 10 },
  { name: "HashMap & Set", count: 8 },
  { name: "Python", count: 7 },
  { name: "Bit Manipulation", count: 6 },
  { name: "Two Pointers", count: 5 },
  { name: "Math", count: 5 },
];

const CodingProfilesSection = () => {
  const stats = useCodolioStats();

  // Update Codolio profile stats dynamically
  const profiles = codingProfiles.map(p =>
    p.name === "Codolio" ? { ...p, stats: `Global Rank: ${stats.globalRank}` } : p
  );

  return (
    <section id="coding-profiles" className="relative py-24 px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">{"// Competitive Programming"}</p>
          <h2 className="section-title mb-4">Coding Profiles</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Active on multiple competitive programming platforms with <span className="text-primary font-semibold">{stats.totalProblems} problems solved</span> and growing!
          </p>
        </div>

        {/* Stats Summary */}
        <div className="glass-card p-6 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold gradient-text">{stats.totalProblems}</p>
              <p className="text-sm text-muted-foreground">Total Problems</p>
            </div>
            <div>
              <p className="text-3xl font-bold gradient-text">{stats.contests}</p>
              <p className="text-sm text-muted-foreground">Contests</p>
            </div>
            <div>
              <p className="text-3xl font-bold gradient-text">{stats.submissions}</p>
              <p className="text-sm text-muted-foreground">Submissions</p>
            </div>
            <div>
              <p className="text-3xl font-bold gradient-text">{stats.maxStreak}</p>
              <p className="text-sm text-muted-foreground">Max Streak</p>
            </div>
          </div>
        </div>

        {/* Profiles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {profiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 hover-glow transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${profile.color} p-2 flex items-center justify-center`}>
                  <img
                    src={profile.icon}
                    alt={profile.name}
                    className="w-8 h-8 object-contain filter brightness-0 invert"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-foreground">{profile.name}</h3>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-primary text-sm font-mono">@{profile.username}</p>
                  {profile.stats && (
                    <p className="text-muted-foreground text-xs mt-1">{profile.stats}</p>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* DSA Topics */}
        <div className="glass-card p-8">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">DSA Topic Analysis</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {dsaTopics.map((topic) => (
              <div
                key={topic.name}
                className="px-4 py-2 rounded-full bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              >
                <span className="text-foreground font-medium">{topic.name}</span>
                <span className="text-primary ml-2 font-mono text-sm">{topic.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">HackerRank Badges</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="glass-card p-4 flex items-center gap-3 hover-glow">
              <img src="https://hrcdn.net/fcore/assets/badges/python-f70befd824.svg" alt="Python" className="w-10 h-10" />
              <div>
                <span className="text-foreground font-medium block">Python</span>
                <div className="flex text-yellow-400 text-sm">
                  <span>★</span><span>★</span><span>★</span>
                </div>
              </div>
            </div>
            <div className="glass-card p-4 flex items-center gap-3 hover-glow">
              <img src="https://hrcdn.net/fcore/assets/badges/cpp-739b350881.svg" alt="C++" className="w-10 h-10" />
              <div>
                <span className="text-foreground font-medium block">C++</span>
                <div className="flex text-yellow-400 text-sm">
                  <span>★</span><span>★</span><span>★</span>
                </div>
              </div>
            </div>
            <div className="glass-card p-4 flex items-center gap-3 hover-glow">
              <img src="https://hrcdn.net/fcore/assets/badges/problem-solving-ecaf59a612.svg" alt="Problem Solving" className="w-10 h-10" />
              <div>
                <span className="text-foreground font-medium block">Problem Solving</span>
                <div className="flex text-yellow-400 text-sm">
                  <span>★</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProfilesSection;
