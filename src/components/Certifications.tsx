import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading number="02" title="Certifications" />
        <div className="mt-12 space-y-4">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="bg-card border border-border rounded-2xl px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 transition-all hover:-translate-y-0.5 card-gradient-hover"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-xl shrink-0"
                  style={{ background: "linear-gradient(135deg, color-mix(in srgb, var(--accent) 15%, transparent), color-mix(in srgb, var(--accent-secondary) 15%, transparent))" }}>
                  <svg className="w-5 h-5" style={{ color: "var(--accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-base">{cert.name}</h3>
                  <p className="text-muted text-sm">{cert.issuer}</p>
                </div>
              </div>
              <div className="text-sm text-muted sm:text-right shrink-0 font-mono">
                <p>{cert.date}</p>
                {cert.credentialId && (
                  <p className="text-xs">{cert.credentialId}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-black text-5xl leading-none select-none"
        style={{ color: "color-mix(in srgb, var(--accent) 20%, transparent)" }}>
        {number}.
      </span>
      <h2 className="text-2xl font-black">{title}</h2>
      <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
    </div>
  );
}
