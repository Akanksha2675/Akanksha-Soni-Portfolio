import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const CONTACT_INFO = [
  { icon: Mail, label: 'Email', value: 'soniakanksha267@gmail.com', href: 'mailto:soniakanksha267@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Bilaspur, Chhattisgarh, India', href: undefined },
  { icon: Linkedin, label: 'LinkedIn', value: 'akanksha-soni-351002289', href: 'https://www.linkedin.com/in/akanksha-soni-351002289' },
  { icon: Github, label: 'GitHub', value: 'Akanksha2675', href: 'https://github.com/Akanksha2675' },
];

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const formRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async () => {
    if (!name || !email || !subject || !message) return;

    setStatus('sending');
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const emailjs = (window as any).emailjs;
      if (!emailjs) {
        throw new Error('EmailJS not loaded');
      }

      emailjs.init('qUCLq4ArBNmL7hzk6');
      await emailjs.send('service_whp15ys', 'template_z29hip8', {
        from_name: name,
        from_email: email,
        subject,
        message,
      });

      setStatus('success');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal">
          <span className="section-eyebrow">// contact</span>
          <h2 className="section-heading">Let's Connect</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Left: Contact info */}
          <div className="reveal space-y-4">
            {CONTACT_INFO.map((item, i) => (
              <div key={i} className="glow-card p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-violet/10 border border-violet/30 flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-violet" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm text-slate-300 hover:text-cyan transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-slate-300">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Contact form */}
          <div ref={formRef} className="reveal glow-card p-6 space-y-4">
            <div>
              <label className="block text-xs text-slate-500 font-mono mb-1">Name</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full bg-space border border-slate-700/50 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-violet transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-500 font-mono mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full bg-space border border-slate-700/50 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-violet transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-500 font-mono mb-1">Subject</label>
              <input
                type="text"
                value={subject}
                onChange={e => setSubject(e.target.value)}
                className="w-full bg-space border border-slate-700/50 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-violet transition-colors"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-500 font-mono mb-1">Message</label>
              <textarea
                rows={5}
                value={message}
                onChange={e => setMessage(e.target.value)}
                className="w-full bg-space border border-slate-700/50 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-violet transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              onClick={handleSubmit}
              disabled={status === 'sending' || !name || !email || !subject || !message}
              className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>

            {/* Toasts */}
            {status === 'success' && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
                <CheckCircle size={18} />
                Message sent! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                <AlertCircle size={18} />
                Something went wrong. Please try again.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
