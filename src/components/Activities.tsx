import { activities } from "@/lib/data";

export default function Activities() {
  return (
    <section id="activities" className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading title="Other Activities" />
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="bg-card border p-4 card-gradient-hover"
              style={{ borderColor: "var(--border)", borderTop: "2px solid var(--accent-secondary)" }}
            >
              <p className="text-xs font-bold mb-2" style={{ color: "var(--accent-secondary)", fontFamily: "monospace" }}>
                {activity.category}
              </p>
              <h3 className="font-bold text-sm mb-2">{activity.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                {activity.description}
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
