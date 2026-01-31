import { GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
            _01
          </span>
          <h2 className="section-title mt-2">SOBRE</h2>
          <div className="gradient-line" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Formação */}
          <div className="glass-card-hover rounded-xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  Formação Acadêmica
                </h3>
                <p className="text-muted-foreground text-sm">Estudante</p>
              </div>
            </div>

            <p className="text-foreground/90 mb-2 font-body">
              <span className="text-foreground font-medium">
                Instituto Federal Goiano
              </span>
            </p>

            <p className="text-muted-foreground text-sm font-body">
              Campus Rio Verde — Desenvolvendo habilidades em tecnologia,
              inovação, sustentabilidade e agricultura de precisão.
            </p>
          </div>

          {/* CEAGRE */}
          <div className="glass-card-hover rounded-xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  Experiência Profissional
                </h3>
                <p className="text-muted-foreground text-sm">Bolsista</p>
              </div>
            </div>

            <p className="text-foreground/90 mb-2 font-body">
              <a
                href="https://www.ceagre.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium hover:text-primary transition"
              >
                CEAGRE
              </a>
              <span className="text-muted-foreground text-sm">
                {" "}
                — Centro de Excelência em Agricultura Exponencial
              </span>
            </p>

            <p className="text-muted-foreground text-sm font-body">
              Atuação no{" "}
              <span className="text-primary font-medium">
                Projeto Carbono
              </span>
              , desenvolvendo soluções tecnológicas para monitoramento ambiental
              e análise de dados geoespaciais.
            </p>
          </div>

          {/* Takedown */}
          <div className="glass-card-hover rounded-xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  Experiência Profissional
                </h3>
                <p className="text-muted-foreground text-sm">
                  Desenvolvedor Backend
                </p>
              </div>
            </div>

            <p className="text-foreground/90 mb-2 font-body">
              <a
                href="https://www.takedownnow.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium hover:text-primary transition"
              >
                Takedown
              </a>
              <span className="text-muted-foreground text-sm">
                {" "}
                — Segurança Digital
              </span>
            </p>

            <p className="text-muted-foreground text-sm font-body">
              Desenvolvedor backend responsável por soluções de segurança,
              automação e infraestrutura voltadas à proteção digital.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div className="hud-box rounded-lg p-4 text-center">
            <span className="text-2xl font-display font-bold text-foreground">
              3+
            </span>
            <p className="text-xs text-muted-foreground mt-1">
              Anos de Experiência
            </p>
          </div>

          <div className="hud-box rounded-lg p-4 text-center">
            <span className="text-2xl font-display font-bold text-foreground">
              10+
            </span>
            <p className="text-xs text-muted-foreground mt-1">Projetos</p>
          </div>

          <div className="hud-box rounded-lg p-4 text-center">
            <span className="text-2xl font-display font-bold text-foreground">
              ∞
            </span>
            <p className="text-xs text-muted-foreground mt-1">
              Linhas de Código
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

