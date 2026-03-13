import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading title="Certifications" />
        <div className="mt-8 space-y-3">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="bg-card border px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 card-gradient-hover"
              style={{ borderColor: "var(--border)", borderLeft: "3px solid var(--accent-secondary)" }}
            >
              <div className="flex items-center gap-3">
                <span style={{ color: "var(--accent-secondary)", fontSize: "16px" }}>&#9733;</span>
                <div>
                  <h3 className="font-bold text-sm">{cert.name}</h3>
                  <p className="text-xs" style={{ color: "var(--muted)" }}>{cert.issuer}</p>
                </div>
              </div>
              <div className="text-xs sm:text-right shrink-0" style={{ color: "var(--muted)", fontFamily: "monospace" }}>
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
