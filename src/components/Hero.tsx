import Image from "next/image";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
    >
      {/* Decorative background blobs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "var(--accent)" }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "var(--accent-secondary)" }}
      />

      <div className="max-w-5xl mx-auto px-6 py-24 w-full relative">
        <p
          className="font-mono text-sm mb-5 tracking-widest uppercase"
          style={{ color: "var(--accent-secondary)" }}
        >
          Hi, my name is
        </p>
        <div className="flex items-center gap-8 mb-8">
          <div>
            <h1 className="gradient-text text-5xl md:text-7xl font-black tracking-tight mb-3 leading-none">
              {profile.name}
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-muted">
              {profile.title}
            </h2>
          </div>
          <div className="relative w-28 h-28 md:w-36 md:h-36 shrink-0 overflow-hidden rounded-2xl">
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

        <div className="flex items-center gap-2 text-sm text-muted mb-10">
          <svg
            className="w-4 h-4 shrink-0"
            style={{ color: "var(--accent-secondary)" }}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          {profile.location}
        </div>
        <div className="flex gap-4 flex-wrap">
          <a
            href="#experience"
            className="px-7 py-3 text-white rounded-xl text-sm font-semibold transition-all hover:scale-105 hover:shadow-lg"
            style={{
              background:
                "linear-gradient(135deg, var(--accent), var(--accent-secondary))",
            }}
          >
            View my work
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="px-7 py-3 rounded-xl text-sm font-semibold border border-border text-muted hover:border-accent hover:text-accent transition-all hover:scale-105"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
