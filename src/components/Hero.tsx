import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center pt-16"
    >
      <div className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-accent font-mono text-sm mb-4">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          {profile.name}
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-muted mb-8">
          {profile.title}
        </h2>
        <p className="text-muted text-lg max-w-xl mb-10 leading-relaxed">
          {profile.bio}
        </p>
        <div className="flex items-center gap-4 text-sm text-muted mb-10">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {profile.location}
        </div>
        <div className="flex gap-4">
          <a
            href="#experience"
            className="px-6 py-3 bg-accent text-white rounded-lg text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors"
          >
            View my work
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="px-6 py-3 border border-border rounded-lg text-sm font-medium hover:border-accent hover:text-accent transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
