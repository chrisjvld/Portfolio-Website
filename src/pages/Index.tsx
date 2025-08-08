import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import TechStack from "@/components/sections/TechStack";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div>
      <SiteHeader />
      <main>
        <Hero />
        <Projects />
        <Services />
        <TechStack />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;

