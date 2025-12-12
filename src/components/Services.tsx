import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PenLine, Music2, Mic2, Check } from "lucide-react";

const services = [
  {
    icon: PenLine,
    title: "Solo Letras",
    tagline: "Tu idea, mi pluma",
    description: "Escritura de letra desde cero a partir de tu idea, tema o referencia. Para artistas que ya tienen su beat o producción.",
    includes: [
      "Letra completa personalizada",
      "Revisiones incluidas",
      "Adaptación a tu estilo",
      "Entrega en 48-72h"
    ]
  },
  {
    icon: Music2,
    title: "Letra + Beat + Demo",
    tagline: "Tu canción, lista para grabar",
    description: "Escribo la letra, elijo el beat perfecto y grabo una maqueta con mi voz para que copies flow y melodía directamente.",
    includes: [
      "Letra original completa",
      "Selección de beat premium",
      "Demo grabada con mi voz",
      "Guía de flow y melodía"
    ],
    featured: true
  },
  {
    icon: Music2,
    title: "Letra + Beat",
    tagline: "Letra y beat",
    description: "Escribo la letra y selecciono el beat perfecto. Trabajamos estructura y referencias de flow.",
    includes: [
      "Letra original completa",
      "Selección de beat premium",
      "Guía de estructura y métrica",
      "Referencias de flow"
    ]
  }
  
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const
    }
  }
};

const Services = () => {
  return (
    <section id="servicios" className="py-24 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
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
            Servicios para{" "}
            <span className="gradient-text">Artistas</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            Cada proyecto es único. Elige el servicio que mejor se adapte a lo que necesitas.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className={`group relative rounded-2xl p-8 hover-lift ${
                service.featured 
                  ? "bg-gradient-to-br from-accent/20 via-card to-card border-2 border-accent/30" 
                  : "bg-card border border-border"
              }`}
            >
              {service.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground text-xs font-semibold px-4 py-1 rounded-full font-display tracking-wide">
                    MÁS POPULAR
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
                service.featured 
                  ? "bg-accent text-accent-foreground" 
                  : "bg-secondary text-foreground group-hover:bg-accent/20"
              }`}>
                <service.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-display font-bold mb-2">{service.title}</h3>
              <p className="text-accent font-medium mb-4 font-body">{service.tagline}</p>
              <p className="text-muted-foreground mb-6 font-body leading-relaxed">{service.description}</p>

              {/* Includes list */}
              <ul className="space-y-3 mb-8">
                {service.includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-foreground/80 font-body">
                    <Check className={`w-4 h-4 flex-shrink-0 ${service.featured ? "text-accent" : "text-accent/70"}`} />
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button 
                variant={service.featured ? "hero" : "glass"} 
                size="lg" 
                className="w-full"
                asChild
              >
                <a href="#contacto">Reservar</a>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
