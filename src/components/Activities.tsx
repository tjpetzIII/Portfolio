import { activities } from "@/lib/data";

export default function Activities() {
  return (
    <section id="activities" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading number="04" title="Other Activities" />
        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="bg-card border border-border rounded-2xl p-6 transition-all hover:-translate-y-0.5 card-gradient-hover"
            >
              <span className="inline-block px-3 py-1 text-xs rounded-full font-mono font-semibold mb-4"
                style={{
                  background: "linear-gradient(135deg, color-mix(in srgb, var(--accent) 15%, transparent), color-mix(in srgb, var(--accent-secondary) 15%, transparent))",
                  color: "var(--accent)"
                }}>
                {activity.category}
              </span>
              <h3 className="font-bold text-base mb-2">{activity.title}</h3>
              <p className="text-muted text-sm leading-relaxed">
                {activity.description}
              </p>
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
