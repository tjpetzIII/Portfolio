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
              className="bg-card border border-border rounded-xl px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 hover:border-accent/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <svg className="w-8 h-8 text-accent-secondary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-base">{cert.name}</h3>
                  <p className="text-muted text-sm">{cert.issuer}</p>
                </div>
              </div>
              <div className="text-sm text-muted sm:text-right shrink-0">
                <p>{cert.date}</p>
                {cert.credentialId && (
                  <p className="font-mono text-xs">{cert.credentialId}</p>
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
      <span className="font-mono text-accent-secondary text-sm">{number}.</span>
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}
