import { Github, Youtube, MapPin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">_04</span>
          <h2 className="section-title mt-2">CONTATO</h2>
          <div className="gradient-line" />
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Main contact card */}
          <div className="glass-card rounded-xl p-8 text-center mb-8">
            <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-display font-bold text-foreground">MW</span>
            </div>
            
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              MISTO WEST
            </h3>
            <p className="text-muted-foreground mb-4 font-body text-sm">
              Full Stack Developer • IoT Specialist • WebGIS
            </p>

            <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-8">
              <MapPin className="w-4 h-4" />
              <span>Rio Verde, GO - Brasil</span>
            </div>

            {/* Social links */}
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/mistowest"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-5 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all"
              >
                <Github className="w-5 h-5 text-foreground" />
                <span className="font-display font-semibold text-sm text-foreground">GitHub</span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>

              <a
                href="https://www.youtube.com/@MrWest"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-5 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all"
              >
                <Youtube className="w-5 h-5 text-foreground" />
                <span className="font-display font-semibold text-sm text-foreground">YouTube</span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
