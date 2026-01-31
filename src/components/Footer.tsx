const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm font-mono">
            <span className="text-foreground font-display">MW</span>
            <span>© {currentYear}</span>
          </div>

          <nav className="flex items-center gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono">
              Sobre
            </a>
            <a href="#stack" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono">
              Stack
            </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono">
              Projetos
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono">
              Contato
            </a>
          </nav>

          <div className="text-sm text-muted-foreground font-mono">
            Built with <span className="text-primary">code</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
