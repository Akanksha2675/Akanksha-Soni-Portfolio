import { Award, Globe, Database, Code } from 'lucide-react';

const CERTS = [
  {
    icon: Globe,
    name: 'Introduction to IoT',
    issuer: 'NPTEL',
    description: 'Covered embedded systems and communication protocols relevant to IoT software integration',
  },
  {
    icon: Code,
    name: 'Programming for Everybody (Python)',
    issuer: 'Coursera',
    description: 'Strengthened Python fundamentals: data types, control flow, and functions',
  },
  {
    icon: Database,
    name: 'Data Analytics Essentials',
    issuer: 'Cisco Networking Academy',
    description: 'Issued January 2025 — Covered data analytics foundations, data visualization, and analytical thinking skills',
  },
  {
    icon: Award,
    name: 'Web Development',
    issuer: 'Academor',
    description: 'End-to-end web development skills including front-end structure and styling',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal">
          <span className="section-eyebrow">// certifications</span>
          <h2 className="section-heading">Credentials</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {CERTS.map((cert, i) => (
            <div key={i} className="reveal glow-card p-6 text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-violet/10 border border-violet/30 flex items-center justify-center">
                <cert.icon size={22} className="text-violet" />
              </div>
              <h3 className="font-display text-base font-semibold text-slate-200">
                {cert.name}
              </h3>
              <p className="text-cyan font-mono text-xs">{cert.issuer}</p>
              <p className="text-slate-500 text-xs leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
