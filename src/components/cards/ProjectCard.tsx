import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
};

const ProjectCard = ({ project }: { project: Project }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${(-py * 6).toFixed(2)}deg) rotateY(${(px * 6).toFixed(2)}deg)`;
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <Card
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="transition-transform duration-200 will-change-transform"
    >
      <CardHeader>
        <CardTitle className="flex flex-col items-center gap-2 text-center">
          <span>{project.title}</span>
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="story-link text-sm text-muted-foreground"
              aria-label={`Open ${project.title}`}
            >
              Case study <ArrowUpRight className="ml-1 inline size-4" />
            </a>
          ) : null}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-muted-foreground">{project.description}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {project.tags.map((t) => (
            <Badge key={t} variant="secondary">
              {t}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
