import { PythonIcon, GolangIcon, LuaIcon, IoTIcon, WebGISIcon, BackendIcon } from "./icons/TechIcons";

const technologies = [
  {
    name: "Python",
    Icon: PythonIcon,
    description: "Backend, APIs REST, Automação",
    skills: ["FastAPI", "Flask", "Pandas", "MQTT"],
  },
  {
    name: "Golang",
    Icon: GolangIcon,
    description: "Alto desempenho, Microserviços",
    skills: ["Gin", "gRPC", "Concorrência", "CLI"],
  },
  {
    name: "Lua",
    Icon: LuaIcon,
    description: "Scripts embarcados, Automação",
    skills: ["ESP32", "Firmware", "Integração"],
  },
  {
    name: "IoT / ESP32",
    Icon: IoTIcon,
    description: "Sensores, Wi-Fi, MQTT, LoRa",
    skills: ["C++", "Arduino", "DHT22", "OLED"],
  },
  {
    name: "WebGIS",
    Icon: WebGISIcon,
    description: "Sistemas geográficos, Mapas",
    skills: ["Leaflet", "GeoJSON", "PostGIS"],
  },
  {
    name: "Backend",
    Icon: BackendIcon,
    description: "APIs, Databases, DevOps",
    skills: ["Docker", "PostgreSQL", "Redis"],
  },
];

const TechStack = () => {
  return (
    <section id="stack" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">_02</span>
          <h2 className="section-title mt-2">HABILIDADES</h2>
          <div className="gradient-line" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="glass-card-hover rounded-xl p-5 group"
            >
              {/* Icon */}
              <div className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform">
                <tech.Icon className="w-full h-full" />
              </div>

              {/* Name & Description */}
              <h3 className="font-display text-base font-bold text-foreground mb-1">{tech.name}</h3>
              <p className="text-xs text-muted-foreground mb-3">{tech.description}</p>

              {/* Skills tags */}
              <div className="flex flex-wrap gap-1.5">
                {tech.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 text-muted-foreground border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
