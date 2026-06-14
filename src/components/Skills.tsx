import { useEffect, useRef } from 'react';

interface SkillBarProps {
  name: string;
  level: number;
}

function SkillBar({ name, level }: SkillBarProps) {
  const fillRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && fillRef.current) {
            fillRef.current.style.width = `${level}%`;
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={containerRef} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-mono text-sm text-slate-300">{name}</span>
        <span className="font-mono text-xs text-cyan">{level}%</span>
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <div
          ref={fillRef}
          className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-violet to-cyan"
          style={{ width: 0 }}
        />
      </div>
    </div>
  );
}

const PROGRAMMING_SKILLS = [
  { name: 'C++', level: 90 },
  { name: 'Python', level: 85 },
  { name: 'Java', level: 80 },
];

const WEB_SKILLS = [
  { name: 'HTML', level: 88 },
  { name: 'CSS', level: 85 },
  { name: 'Next.js / React', level: 75 },
];

const CORE_SKILLS = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'Operating Systems',
  'Computer Networks',
  'DBMS',
  'System Design Fundamentals',
];

const TOOLS = [
  'Git & GitHub',
  'Vercel',
  'REST APIs',
  'Problem Solving & Code Optimization',
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal">
          <span className="section-eyebrow">// technical_skills</span>
          <h2 className="section-heading">Tech Stack</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Programming Languages */}
          <div className="reveal glow-card p-6 space-y-6">
            <h3 className="font-display text-lg font-semibold gradient-text">
              Programming Languages
            </h3>
            <div className="space-y-4">
              {PROGRAMMING_SKILLS.map(s => (
                <SkillBar key={s.name} name={s.name} level={s.level} />
              ))}
            </div>
          </div>

          {/* Web Technologies */}
          <div className="reveal glow-card p-6 space-y-6">
            <h3 className="font-display text-lg font-semibold gradient-text">
              Web Technologies
            </h3>
            <div className="space-y-4">
              {WEB_SKILLS.map(s => (
                <SkillBar key={s.name} name={s.name} level={s.level} />
              ))}
            </div>
          </div>

          {/* Core CS */}
          <div className="reveal glow-card p-6 space-y-4">
            <h3 className="font-display text-lg font-semibold gradient-text">
              Core CS Concepts
            </h3>
            <div className="flex flex-wrap gap-3">
              {CORE_SKILLS.map(skill => (
                <span
                  key={skill}
                  className="skill-pill border-violet/40 text-violet hover:bg-violet/10 hover:border-violet"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="reveal glow-card p-6 space-y-4">
            <h3 className="font-display text-lg font-semibold gradient-text">
              Tools & Platforms
            </h3>
            <div className="flex flex-wrap gap-3">
              {TOOLS.map(tool => (
                <span
                  key={tool}
                  className="skill-pill border-cyan/40 text-cyan hover:bg-cyan/10 hover:border-cyan"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
