import Image from "next/image";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center pt-14"
    >
      <div className="max-w-5xl mx-auto px-4 py-16 w-full">
        <p
          className="text-sm mb-3 font-bold"
          style={{ color: "var(--accent-secondary)" }}
        >
          Hi, my name is
        </p>

        <div className="flex items-center gap-6 mb-6">
          <div>
            {/* Google-style colored letters for name */}
            <h1 className="text-5xl md:text-6xl font-black mb-2 leading-tight" style={{ fontFamily: "Arial Black, Arial, sans-serif" }} aria-label={profile.name}>
              <GoogleColoredName name={profile.name} />
            </h1>
            <h2 className="text-xl md:text-2xl font-bold" style={{ color: "var(--muted)" }}>
              {profile.title}
            </h2>
          </div>
          <div
            className="shrink-0 overflow-hidden"
            style={{ width: "100px", height: "100px" }}
          >
            <Image
              src="/images/personalPicture.png"
              alt={profile.name}
              width={100}
              height={100}
              className="object-cover object-top w-full h-full"
              priority
            />
          </div>
        </div>

        <p className="text-sm max-w-xl mb-6 leading-relaxed" style={{ color: "var(--muted)" }}>
          {profile.bio}
        </p>

        <div className="flex items-center gap-2 text-sm mb-6" style={{ color: "var(--muted)" }}>
          <span style={{ color: "var(--accent-secondary)" }}>&#9679;</span>
          {profile.location}
        </div>

        <div className="flex gap-3 flex-wrap">
          <a
            href="#experience"
            className="btn-google px-5 py-2 text-sm font-bold"
            style={{ textDecoration: "none" }}
          >
            View my work &raquo;
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="btn-classic px-5 py-2 text-sm font-bold"
          >
            Get in touch
          </a>
        </div>

        {/* Classic horizontal rule */}
        <hr className="mt-12" style={{ borderColor: "var(--border)", borderTopWidth: "1px" }} />
      </div>
    </section>
  );
}

// Google-style colored letters cycling through blue, red, yellow, green
const GOOGLE_COLORS = ["#3366cc", "#cc0000", "#ffaa00", "#3366cc", "#009900", "#cc0000"];

function GoogleColoredName({ name }: { name: string }) {
  let colorIndex = 0;
  return (
    <>
      {name.split("").map((char, i) => {
        if (char === " ") return <span key={i}>&nbsp;</span>;
        const color = GOOGLE_COLORS[colorIndex % GOOGLE_COLORS.length];
        colorIndex++;
        return (
          <span key={i} style={{ color }}>
            {char}
          </span>
        );
      })}
    </>
  );
}
