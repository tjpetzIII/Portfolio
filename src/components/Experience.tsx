import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading title="Work Experience" />
        <div className="mt-8 space-y-4">
          {experiences.map((exp) => (
            <div
              key={`${exp.company}-${exp.role}`}
              className="bg-card border p-4 card-gradient-hover"
              style={{ borderColor: "var(--border)", borderLeft: "3px solid var(--accent)" }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                <div>
                  <h3 className="font-bold text-sm">{exp.role}</h3>
                  <p className="font-bold text-sm" style={{ color: "var(--accent)" }}>{exp.company}</p>
                </div>
                <div className="text-xs text-right shrink-0" style={{ color: "var(--muted)", fontFamily: "monospace" }}>
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
              <p className="text-xs leading-relaxed mb-3" style={{ color: "var(--muted)" }}>
                {exp.description}
              </p>
              <p className="text-xs" style={{ color: "var(--accent-secondary)", fontFamily: "monospace" }}>
                {exp.skills.join(" · ")}
              </p>
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
