import { activities } from "@/lib/data";

export default function Activities() {
  return (
    <section id="activities" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading number="03" title="Other Activities" />
        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-colors"
            >
              <span className="inline-block px-2 py-0.5 bg-accent/10 text-accent text-xs rounded font-mono mb-3">
                {activity.category}
              </span>
              <h3 className="font-semibold text-base mb-2">{activity.title}</h3>
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
      <span className="font-mono text-accent text-sm">{number}.</span>
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}
