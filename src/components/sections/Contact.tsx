import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16 text-center sm:py-20">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <h2 className="font-heading text-3xl sm:text-4xl">Let’s build something great</h2>
          <p className="mt-3 text-muted-foreground">
            Tell me about your goals and timelines. I’ll reply within 24 hours.
          </p>
          <div className="mt-6 flex justify-center">
            <Button asChild>
              <a href="mailto:you@yourdomain.com?subject=Project%20Inquiry" aria-label="Email me">
                <Mail className="mr-2 size-4" /> Email me
              </a>
            </Button>
          </div>
        </div>
        <Card>
          <CardContent className="p-6">
            <ul className="space-y-3 text-center text-sm text-muted-foreground">
              <li>• Engagements from 1–6 months</li>
              <li>• Timezone: Flexible</li>
              <li>• Remote or on‑site (by arrangement)</li>
              <li>• NDA friendly</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
