const SiteFooter = () => {
  return (
    <footer className="mt-16 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-muted-foreground">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p>© {new Date().getFullYear()} Your Name — Full‑Stack Developer</p>
          <div className="flex items-center gap-4">
            <a href="#projects" className="story-link">Projects</a>
            <a href="#services" className="story-link">Services</a>
            <a href="#stack" className="story-link">Stack</a>
            <a href="#contact" className="story-link">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
