import { Badge } from "@/components/ui/badge";
import { Code2, Database, Server, Globe, Cpu } from "lucide-react";

const stack = [
  { name: "React", Icon: Code2 },
  { name: "TypeScript", Icon: Code2 },
  { name: "Node.js", Icon: Server },
  { name: "PostgreSQL", Icon: Database },
  { name: "Supabase", Icon: Database },
  { name: "GraphQL", Icon: Globe },
  { name: "AWS", Icon: Cpu },
];

const TechStack = () => {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <h2 className="font-heading text-3xl sm:text-4xl">Tech Stack</h2>
      <div className="mt-6 flex flex-wrap gap-3">
        {stack.map(({ name, Icon }) => (
          <Badge key={name} variant="secondary" className="gap-2">
            <Icon className="size-4 text-primary" /> {name}
          </Badge>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
