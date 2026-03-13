import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading title="Personal Projects" />
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-card border p-4 flex flex-col card-gradient-hover"
              style={{ borderColor: "var(--border)", borderTop: "2px solid var(--accent)" }}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-bold" style={{ color: "var(--accent)", fontFamily: "monospace" }}>
                  [PROJECT]
                </span>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold"
                      style={{ color: "var(--accent)", textDecoration: "underline" }}
                    >
                      [src]
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold"
                      style={{ color: "var(--accent)", textDecoration: "underline" }}
                    >
                      [live]
                    </a>
                  )}
                </div>
              </div>
              <h3 className="font-bold text-sm mb-2">{project.name}</h3>
              <p className="text-xs leading-relaxed flex-1 mb-4" style={{ color: "var(--muted)" }}>
                {project.description}
              </p>
              <p className="text-xs mt-auto" style={{ color: "var(--accent-secondary)", fontFamily: "monospace" }}>
                {project.tech.join(" · ")}
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
