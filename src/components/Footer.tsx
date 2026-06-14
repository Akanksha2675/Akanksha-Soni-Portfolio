import { Github, Linkedin, Mail, Heart, Coffee } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/Akanksha2675"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/akanksha-soni-351002289"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:soniakanksha267@gmail.com"
            className="text-slate-400 hover:text-cyan transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
        <p className="font-display text-sm text-slate-400">
          Designed & Built by{' '}
          <span className="gradient-text font-semibold">Akanksha Soni</span>
        </p>
        <p className="font-mono text-xs gradient-text">
          &copy; 2026 Akanksha Soni
        </p>
        <p className="text-xs text-slate-600 flex items-center justify-center gap-1">
          Made with <Heart size={12} className="text-magenta" /> and a lot of{' '}
          <Coffee size={12} className="text-yellow-600" />
        </p>
      </div>
    </footer>
  );
}
