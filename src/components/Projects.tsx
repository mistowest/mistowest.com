import { ExternalLink, Globe, Cpu, Eye, Search, ChevronRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Mapa de Pontos de Coleta",
    subtitle: "Projeto Carbono",
    description: "Plataforma de mapeamento interativo com visualização georreferenciada de pontos de coleta de fazendas em Goiás.",
    link: "https://map.vigiaverde.com.br",
    icon: Globe,
    technologies: ["GeoServer", "WebGIS", "REST API"],
  },
  {
    id: "02",
    title: "Sistema IoT ESP32",
    subtitle: "Monitoramento Ambiental",
    description: "Soluções completas de IoT baseadas em ESP32 para monitoramento ambiental em tempo real.",
    link: "https://wokwi.com/makers/mrwest",
    icon: Cpu,
    technologies: ["C++", "Arduino", "MQTT", "LoRa"],
  },
  {
    id: "03",
    title: "SpyLove",
    subtitle: "Takedown Projects",
    description: "Ferramenta de monitoramento e análise desenvolvida para o ecossistema Takedown.",
    link: "https://spylove.org/",
    icon: Eye,
    technologies: ["Takedown"],
  },
  {
    id: "04",
    title: "TakedownSpy",
    subtitle: "Takedown Projects",
    description: "Sistema avançado de rastreamento e coleta de dados com interface web moderna.",
    link: "https://spy.trumcate.com/",
    icon: Search,
    technologies: ["Takedown"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">_03</span>
          <h2 className="section-title mt-2">PROJETOS</h2>
          <div className="gradient-line" />
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card-hover rounded-xl p-6 group"
            >
              <div className="flex items-start gap-6">
                {/* ID */}
                <div className="hidden sm:block">
                  <span className="text-xs font-mono text-muted-foreground">SRC_{project.id}</span>
                </div>

                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <project.icon className="w-5 h-5 text-foreground" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground">{project.title}</h3>
                      <p className="text-sm text-primary font-mono">{project.subtitle}</p>
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    )}
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-2 mb-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-mono rounded bg-white/5 text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
