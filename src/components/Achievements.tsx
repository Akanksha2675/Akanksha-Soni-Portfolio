import { Trophy, Star, Users } from 'lucide-react';

const ACHIEVEMENTS = [
  {
    icon: Trophy,
    title: 'Smart India Hackathon (SIH) 2025',
    subtitle: 'Qualified Internal Round',
    description:
      'Competed in national-level engineering hackathon demonstrating rapid prototyping and collaborative problem-solving',
  },
  {
    icon: Star,
    title: 'Google Student Ambassador 2025',
    subtitle: '',
    description:
      "Represents Google's developer programs at OP Jindal University, organising tech events and community outreach",
  },
  {
    icon: Users,
    title: 'Codigo — Coding Competition',
    subtitle: 'Student Coordinator, 2024',
    description:
      'Organised a college-level coding competition; managed logistics, problem sets, and participant coordination',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal">
          <span className="section-eyebrow">// achievements</span>
          <h2 className="section-heading">Milestones</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {ACHIEVEMENTS.map((item, i) => (
            <div key={i} className="reveal glow-card p-6 space-y-4 relative">
              <div className="w-12 h-12 rounded-full bg-magenta/10 border border-magenta/30 flex items-center justify-center">
                <item.icon size={22} className="text-magenta" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-slate-200">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="text-cyan font-mono text-xs mt-1">
                    {item.subtitle}
                  </p>
                )}
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
