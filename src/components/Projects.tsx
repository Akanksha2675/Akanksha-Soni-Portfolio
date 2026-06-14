import { Github, ExternalLink } from 'lucide-react';

interface Project {
  number: number;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
}

const PROJECTS: Project[] = [
  {
    number: 1,
    title: 'College Discovery Platform',
    description:
      'Full-stack web app enabling students to explore, filter, and compare colleges across India by location, fees, ratings, and programs. Features dynamic filtering, side-by-side comparison, and community discussions. Deployed on Vercel with responsive mobile-first UI serving 8+ universities, 50+ programs across 10+ cities.',
    tech: ['Next.js', 'React', 'Vercel'],
    live: 'https://college-discovery-platform-u82r.vercel.app',
  },
  {
    number: 2,
    title: 'Automated Cold Outreach Pipeline',
    description:
      'End-to-end automated sales pipeline converting a seed domain into sent outreach emails across 4 sequential stages. Integrates Ocean.io, Prospeo, email enrichment, and Brevo via REST APIs. Modular, config-driven Python architecture enabling easy debugging and API management.',
    tech: ['Python', 'REST APIs'],
    github: 'https://github.com/Akanksha2675/Outreach-Pipeline',
  },
  {
    number: 3,
    title: 'ShareOn — Landing Website',
    description:
      'Marketing landing page for ShareOn, an AI Personal Branding Agent that transforms documents, expertise, and ideas into videos, posts, and multi-platform content. Built with React 18 + TypeScript, Vite for bundling, Tailwind CSS for utility-first styling, and Supabase for waitlist/auth integrations.',
    tech: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase'],
    github: 'https://github.com/Akanksha2675/ShareOn-Website',
    live: 'https://shareon-demo.bolt.host',
  },
  {
    number: 4,
    title: 'Responsive Website',
    description:
      'Fully responsive, mobile-first website with collapsible navigation and dynamic UI components. Built with OOP principles and modular code for maintainability. Optimized for rendering performance and layout consistency across browsers.',
    tech: ['HTML', 'CSS'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal">
          <span className="section-eyebrow">// featured_projects</span>
          <h2 className="section-heading">What I've Built</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {PROJECTS.map((project) => (
            <div key={project.number} className="reveal glow-card p-6 relative group">
              <span className="absolute top-4 right-4 font-mono text-xs text-violet/60">
                #{String(project.number).padStart(2, '0')}
              </span>

              <div className="space-y-4">
                <h3 className="font-display text-xl font-semibold text-slate-100 group-hover:text-cyan transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-mono rounded-full border border-violet/30 text-violet bg-violet/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-cyan transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-cyan transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
