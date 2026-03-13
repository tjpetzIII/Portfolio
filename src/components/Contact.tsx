import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading title="Get In Touch" />
        <div className="mt-8 max-w-lg">
          <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
            I&apos;m always open to new opportunities, collaborations, or just a
            good conversation. Feel free to reach out &mdash; my inbox is always open.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="btn-google inline-block px-6 py-2 text-sm font-bold mb-8"
          >
            Say Hello &raquo;
          </a>
          <div className="flex gap-6 mt-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium"
              style={{ color: "var(--accent)", textDecoration: "underline" }}
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium"
              style={{ color: "var(--accent)", textDecoration: "underline" }}
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Classic footer bar */}
        <div className="mt-16 pt-4 text-xs" style={{ borderTop: "1px solid var(--border)", color: "var(--muted)" }}>
          <p>&#169; {new Date().getFullYear()} {profile.name} &mdash; Made with Next.js</p>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div>
      <h2
        className="text-xl font-black mb-1"
        style={{ color: "var(--accent)", fontFamily: "Arial Black, Arial, sans-serif" }}
      >
        {title}
      </h2>
      <hr style={{ borderColor: "var(--accent)", borderTopWidth: "2px" }} />
    </div>
  );
}
