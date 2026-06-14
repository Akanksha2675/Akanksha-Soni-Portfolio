import { GraduationCap, Award, BookOpen } from 'lucide-react';

const EDUCATION = [
  {
    degree: 'B.Tech CSE',
    school: 'OP Jindal University, Raigarh',
    period: 'Aug 2023 – Present',
    detail: 'CGPA: 8.20/10',
  },
  {
    degree: '12th PCM',
    school: 'S.E.C. Railway Higher Secondary School, Bilaspur',
    period: '2022–2023',
    detail: '',
  },
  {
    degree: '10th',
    school: 'S.E.C. Railway Higher Secondary School, Bilaspur',
    period: '2020–2021',
    detail: '',
  },
];

const STATS = [
  { icon: BookOpen, label: 'CGPA', value: '8.20' },
  { icon: Award, label: 'Projects', value: '3+' },
  { icon: GraduationCap, label: 'Certifications', value: '2+' },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal">
          <span className="section-eyebrow">// about_me</span>
          <h2 className="section-heading">Who Am I?</h2>
        </div>

        <div className="grid md:grid-cols-5 gap-12 mt-8">
          {/* Left: Avatar */}
          <div className="md:col-span-2 flex justify-center reveal">
            <div className="glow-card p-8 animate-float inline-flex items-center justify-center w-64 h-64">
              <span className="font-display text-8xl font-bold gradient-text select-none">
                Aki
                verse
              </span>
            </div>
          </div>

          {/* Right: Bio + Education */}
          <div className="md:col-span-3 space-y-8 reveal">
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I'm a passionate Computer Science student at OP Jindal University,
                driven by the thrill of turning ideas into real, working software.
                From building full-stack web platforms to automating complex
                pipelines, I love solving problems that matter.
              </p>
              <p>
                As a Computer Science Student, I thrive at the
                intersection of technology and community — organizing coding
                competitions, mentoring peers, and continuously pushing my
                boundaries as a developer.
              </p>
            </div>

            {/* Education timeline */}
            <div className="space-y-4">
              <h3 className="font-display text-lg font-semibold text-slate-200">
                Education
              </h3>
              <div className="relative border-l-2 border-violet/30 pl-6 space-y-6">
                {EDUCATION.map((edu, i) => (
                  <div key={i} className="relative">
                    <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-violet border-2 border-space" />
                    <div>
                      <p className="font-display font-semibold text-slate-200">
                        {edu.degree}
                      </p>
                      <p className="text-sm text-slate-400">{edu.school}</p>
                      <p className="text-sm text-cyan font-mono">
                        {edu.period}
                        {edu.detail && ` — ${edu.detail}`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {STATS.map((stat, i) => (
                <div key={i} className="glow-card p-4 text-center">
                  <stat.icon size={20} className="text-cyan mx-auto mb-2" />
                  <p className="font-display text-xl font-bold gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-500 font-mono">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
