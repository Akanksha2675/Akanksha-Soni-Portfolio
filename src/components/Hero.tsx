import { useEffect, useState, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react';

const ROLES = [
  'Software Developer',
  'Web Developer',
  'AI/ML Engineer',
  'CSE Student @ OP Jindal University',
];

function useTypingAnimation(roles: string[]) {
  const [text, setText] = useState('');
  const charIndexRef = useRef(0);
  const stateRef = useRef({ roleIndex: 0, isDeleting: false });

  useEffect(() => {
    const state = stateRef.current;
    let timeoutId: ReturnType<typeof setTimeout>;

    function tick() {
      const current = roles[state.roleIndex];

      if (!state.isDeleting) {
        charIndexRef.current += 1;
        const idx = charIndexRef.current;
        setText(current.slice(0, idx));
        if (idx === current.length) {
          timeoutId = setTimeout(() => {
            state.isDeleting = true;
            tick();
          }, 1800);
          return;
        }
      } else {
        charIndexRef.current -= 1;
        const idx = charIndexRef.current;
        setText(current.slice(0, idx));
        if (idx === 0) {
          state.isDeleting = false;
          state.roleIndex = (state.roleIndex + 1) % roles.length;
        }
      }

      timeoutId = setTimeout(tick, state.isDeleting ? 40 : 90);
    }

    timeoutId = setTimeout(tick, 90);
    return () => clearTimeout(timeoutId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return text;
}

export default function Hero() {
  const typedText = useTypingAnimation(ROLES);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <span className="font-mono text-cyan text-sm">
              &lt; Hello World /&gt;
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="gradient-text">Akanksha Soni</span>
            </h1>
            <div className="h-8">
              <span className="font-display text-xl md:text-2xl text-slate-300">
                {typedText}
              </span>
              <span className="typing-cursor" />
            </div>
            <p className="text-slate-400 leading-relaxed max-w-lg">
              Third-year B.Tech Computer Science student skilled in C++, Python, and
              Java, with a solid grounding in data structures, algorithms, OOP, and
              system design. Seeking a Software Development internship to build
              scalable, efficient software.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary inline-flex items-center gap-2">
                <ExternalLink size={18} />
                View My Work
              </a>
              <a
                href="/AKANKSHA_SONI__RESUME.pdf"
                download="Akanksha_Soni_Resume.pdf"
                className="btn-outline inline-flex items-center gap-2"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/Akanksha2675"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan transition-colors duration-300"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/akanksha-soni-351002289"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan transition-colors duration-300"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:soniakanksha267@gmail.com"
                className="text-slate-400 hover:text-cyan transition-colors duration-300"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* Right: Code snippet */}
          <div className="hidden md:flex justify-center">
            <div className="glow-card p-6 font-mono text-sm animate-float max-w-md w-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-magenta/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <span className="w-3 h-3 rounded-full bg-green-400/80" />
                <span className="ml-2 text-slate-500 text-xs">akanksha.py</span>
              </div>
              <pre className="leading-relaxed">
                <code>
                  <span className="text-violet">class</span>{' '}
                  <span className="text-cyan">Developer</span>:{'\n'}
                  {'  '}
                  <span className="text-violet">def</span>{' '}
                  <span className="text-yellow-300">__init__</span>(
                  <span className="text-magenta">self</span>):{'\n'}
                  {'    '}self.name ={' '}
                  <span className="text-green-400">"Akanksha Soni"</span>{'\n'}
                  {'    '}self.skills = [{'\n'}
                  {'      '}
                  <span className="text-green-400">"C++"</span>,{' '}
                  <span className="text-green-400">"Python"</span>,{'\n'}
                  {'      '}
                  <span className="text-green-400">"Java"</span>,{' '}
                  <span className="text-green-400">"Next.js"</span>{'\n'}
                  {'    '}]{'\n'}
                  {'    '}self.passion ={' '}
                  <span className="text-green-400">"building"</span>{'\n'}
                  {'\n'}
                  {'  '}
                  <span className="text-violet">def</span>{' '}
                  <span className="text-yellow-300">create</span>(
                  <span className="text-magenta">self</span>, idea):{'\n'}
                  {'    '}<span className="text-violet">return</span>{' '}
                  <span className="text-cyan">magic</span>(idea, self.skills)
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
