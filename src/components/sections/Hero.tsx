import { Button } from "@/components/ui/button";
import { Rocket, Mail } from "lucide-react";
import heroBg from "@/assets/hero-tech-bg.jpg";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--x", `${x}%`);
    el.style.setProperty("--y", `${y}%`);
  };

  return (
    <header className="relative overflow-hidden">
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        className="hero-spotlight rounded-2xl border border-border bg-[radial-gradient(60rem_60rem_at_top_right,rgba(59,130,246,0.06),transparent_60%)]"
      >
        <div className="absolute inset-0 -z-10 opacity-50">
          <img
            src={heroBg}
            alt="Futuristic high-tech developer background with neon blue accents"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-sm text-muted-foreground">
              <span className="size-2 rounded-full bg-primary" /> Available for new projects
            </p>
            <h1 className="font-heading text-4xl leading-tight sm:text-5xl md:text-6xl">
              Full-Stack Developer crafting high-performance web apps
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              I design, build, and scale robust products end‑to‑end — from pixel‑perfect
              frontends to resilient cloud backends.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild>
                <a href="#projects" className="hover-scale">
                  <Rocket className="mr-2 size-4" /> View Projects
                </a>
              </Button>
              <Button variant="secondary" asChild>
                <a href="#contact" className="hover-scale">
                  <Mail className="mr-2 size-4" /> Contact Me
                </a>
              </Button>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-2 gap-3 text-sm text-muted-foreground sm:max-w-none sm:grid-cols-4">
              {[
                "React & TypeScript",
                "Node.js & APIs",
                "PostgreSQL / Supabase",
                "AWS & CloudOps",
              ].map((item) => (
                <div key={item} className="card-surface px-3 py-2">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
