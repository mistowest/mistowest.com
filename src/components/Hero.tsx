import { Github, Youtube, ChevronDown, ArrowRight } from "lucide-react";
import mistoWestAvatar from "@/assets/misto-west-avatar.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8 fade-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-display tracking-wider text-white/70 uppercase">
                Full Stack Developer
              </span>
            </div>

            {/* Main title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 fade-in leading-[0.9]" style={{ animationDelay: "0.1s" }}>
              <span className="text-foreground block">WESLEY</span>
              <span className="text-gradient block mt-2">HENRIQUE</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-muted-foreground max-w-lg mb-8 fade-in font-body leading-relaxed" style={{ animationDelay: "0.2s" }}>
              Desenvolvedor focado em{" "}
              <span className="text-foreground font-medium">Web</span>,{" "}
              <span className="text-foreground font-medium">APIs</span>,{" "}
              <span className="text-foreground font-medium">IoT</span> e{" "}
              <span className="text-foreground font-medium">Soluções Ambientais</span>.
              Bolsista <span className="text-primary">CEAGRE</span> no Projeto Carbono.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 fade-in" style={{ animationDelay: "0.3s" }}>
              <a
                href="https://github.com/mistowest"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-white text-background font-display font-semibold text-sm uppercase tracking-wider hover:bg-white/90 transition-all"
              >
                <Github className="w-5 h-5" />
                GitHub
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://www.youtube.com/@MrWest"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-white/20 text-foreground font-display font-semibold text-sm uppercase tracking-wider hover:bg-white/5 hover:border-white/30 transition-all"
              >
                <Youtube className="w-5 h-5" />
                YouTube
              </a>
            </div>

            {/* Terminal-like info */}
            <div className="mt-12 fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="font-mono text-sm text-muted-foreground space-y-1">
                <p><span className="text-primary">&gt;</span> INITIALIZING PORTFOLIO...</p>
                <p><span className="text-primary">&gt;</span> STACK: Python, Golang, IoT</p>
                <p><span className="text-primary">&gt;</span> STATUS: <span className="text-green-400">ONLINE</span></p>
              </div>
            </div>
          </div>

          {/* Right content - Avatar with HUD boxes */}
          <div className="order-1 lg:order-2 flex justify-center fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Avatar image */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src={mistoWestAvatar} 
                  alt="Misto West Avatar" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              {/* HUD Box - Stack */}
              <div className="absolute -right-4 md:-right-12 top-4 hud-box rounded-lg px-4 py-3 min-w-[140px]">
                <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider block mb-1">STACK</span>
                <p className="text-foreground font-display font-bold text-sm">Python • Go</p>
              </div>

              {/* HUD Box - Focus */}
              <div className="absolute -left-4 md:-left-12 bottom-20 hud-box rounded-lg px-4 py-3 min-w-[140px]">
                <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider block mb-1">FOCUS</span>
                <p className="text-foreground font-display font-bold text-sm">IoT • WebGIS</p>
              </div>

              {/* HUD Box - Status */}
              <div className="absolute -right-4 md:-right-8 bottom-4 hud-box rounded-lg px-4 py-3">
                <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider block mb-1">BOLSISTA</span>
                <p className="text-primary font-display font-bold text-sm">CEAGRE</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 fade-in" style={{ animationDelay: "0.6s" }}>
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-xs font-mono uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
