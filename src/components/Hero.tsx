import Image from "next/image";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-16">
      <div className="max-w-5xl mx-auto px-6 py-24 w-full">
        <div>
          <p className="text-accent-secondary font-mono text-sm mb-4">
            Hi, my name is
          </p>
          <div className="flex items-center gap-8 mb-8">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2">
                {profile.name}
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-muted">
                {profile.title}
              </h2>
            </div>
            <div className="relative w-28 h-28 md:w-36 md:h-36 shrink-0 overflow-hidden">
              <Image
                src="/images/personalPicture.png"
                alt={profile.name}
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
          <p className="text-muted text-lg max-w-xl mb-10 leading-relaxed">
            {profile.bio}
          </p>

          <div className="flex items-center gap-4 text-sm text-muted mb-10">
            <svg
              className="w-4 h-4 text-accent-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
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
              className="px-6 py-3 border border-border rounded-lg text-sm font-medium hover:border-accent-secondary hover:text-accent-secondary transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
