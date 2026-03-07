import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading number="01" title="Work Experience" />
        <div className="mt-12 space-y-6">
          {experiences.map((exp) => (
            <div
              key={`${exp.company}-${exp.role}`}
              className="bg-card border border-border rounded-2xl p-6 transition-all hover:-translate-y-0.5 card-gradient-hover"
              style={{ borderLeft: "3px solid var(--accent)" }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-bold text-lg">{exp.role}</h3>
                  <p className="font-semibold text-sm" style={{ color: "var(--accent)" }}>{exp.company}</p>
                </div>
                <div className="text-xs text-muted text-left sm:text-right shrink-0 font-mono">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-4">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full font-mono font-medium"
                    style={{ background: "color-mix(in srgb, var(--accent-secondary) 12%, transparent)", color: "var(--accent-secondary)" }}
                  >
                    {skill}
                  </span>
                ))}
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
