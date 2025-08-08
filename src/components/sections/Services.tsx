import { Card, CardContent } from "@/components/ui/card";
import { Code2, Server, Cloud } from "lucide-react";

const items = [
  {
    title: "Product Engineering",
    desc: "From UX to production — rapid prototypes to polished releases.",
    Icon: Code2,
  },
  {
    title: "APIs & Integrations",
    desc: "Scalable REST/GraphQL services with rock-solid auth and testing.",
    Icon: Server,
  },
  {
    title: "Cloud & DevOps",
    desc: "CI/CD, observability, and cost‑efficient infrastructure on AWS.",
    Icon: Cloud,
  },
];

const Services = () => {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-16 text-center sm:py-20">
      <h2 className="font-heading text-3xl sm:text-4xl">Services</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ title, desc, Icon }) => (
          <Card key={title} className="transition-transform hover:translate-y-[-2px]">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-3">
                <div className="rounded-md border border-border bg-secondary/40 p-2">
                  <Icon className="size-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-muted-foreground">{desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
