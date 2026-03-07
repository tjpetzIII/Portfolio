import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Activities from "@/components/Activities";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Certifications />
      <Projects />
      <Activities />
      <Contact />
      <footer className="text-center text-muted text-xs py-8 border-t border-border">
        Built with Next.js &amp; Tailwind CSS
      </footer>
    </main>
  );
}
