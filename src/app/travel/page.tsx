import type { Metadata } from "next";
import Travel from "@/components/Travel";

export const metadata: Metadata = {
  title: "Travel | Portfolio",
  description: "Places I've explored around the world.",
};

export default function TravelPage() {
  return (
    <main>
      <Travel />
      <footer className="text-center text-muted text-xs py-8 border-t border-border">
        Built with Next.js &amp; Tailwind CSS
      </footer>
    </main>
  );
}
