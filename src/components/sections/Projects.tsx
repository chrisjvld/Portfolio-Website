import ProjectCard, { Project } from "@/components/cards/ProjectCard";

const projects: Project[] = [
  {
    title: "SaaS Analytics Platform",
    description:
      "Real-time dashboards, role-based access, event ingestion pipeline and billing integration.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    href: "#",
  },
  {
    title: "E‑commerce Headless Storefront",
    description:
      "Headless architecture, blazing fast product search, and secure checkout.",
    tags: ["Next.js", "GraphQL", "Redis", "AWS"],
    href: "#",
  },
  {
    title: "AI Customer Support Assistant",
    description:
      "Context-aware chat assistant with vector search and analytics console.",
    tags: ["TypeScript", "Supabase", "OpenAI", "LangChain"],
    href: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16 text-center sm:py-20">
      <div className="mb-8 flex flex-col items-center justify-center">
        <h2 className="font-heading text-3xl sm:text-4xl">Featured Projects</h2>
        <a href="#contact" className="story-link text-sm text-muted-foreground">
          Work with me
        </a>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
