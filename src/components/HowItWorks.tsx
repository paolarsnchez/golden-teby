import { motion } from "framer-motion";
import { MessageCircle, Settings2, Sparkles, Send } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Cuéntame tu idea",
    description: "Por WhatsApp, email o nota de voz. Háblame de tu proyecto, el estilo que buscas y qué quieres transmitir."
  },
  {
    number: "02",
    icon: Settings2,
    title: "Definimos el servicio",
    description: "Solo letra o letra con demo. Elegimos juntos el pack que mejor encaja con tu proyecto y cerramos tiempos de entrega."
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Manos a la obra",
    description: "Trabajo la letra, preparo el beat y, si has elegido demo, grabo la referencia con mi voz. Seguimos en contacto durante todo el proceso."
  },
  {
    number: "04",
    icon: Send,
    title: "Entrega final",
    description: "Recibes tu letra lista y, si has elegido demo, el audio para copiar flow y melodía. Listo para que brilles en tu grabación."
  }
];

const HowItWorks = () => {
  return (
    <section id="proceso" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Cómo{" "}
            <span className="gradient-text">Funciona</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            De tu idea a la canción final en cuatro pasos sencillos.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent md:-translate-x-px hidden md:block" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className={`relative flex items-start gap-6 md:gap-12 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Number circle - mobile */}
              <div className="md:hidden flex-shrink-0 w-16 h-16 rounded-full bg-card border-2 border-accent/30 flex items-center justify-center">
                <span className="text-accent font-display font-bold text-lg">{step.number}</span>
              </div>

              {/* Content card */}
              <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <motion.div 
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover-lift inline-block text-left"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-display font-bold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground font-body leading-relaxed">{step.description}</p>
                </motion.div>
              </div>

              {/* Center number - desktop */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-background border-2 border-accent flex-shrink-0 items-center justify-center shadow-glow">
                <span className="text-accent font-display font-bold text-lg">{step.number}</span>
              </div>

              {/* Spacer for layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
