const SiteHeader = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-6 px-6 py-4">
        <a href="#" className="font-heading text-lg">Your Name</a>
        <div className="hidden gap-6 sm:flex">
          <a href="#projects" className="story-link">Projects</a>
          <a href="#services" className="story-link">Services</a>
          <a href="#stack" className="story-link">Stack</a>
          <a href="#contact" className="story-link">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default SiteHeader;
