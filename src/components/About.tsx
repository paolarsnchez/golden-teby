import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import artistImage from "@/assets/artist-portrait.jpg";
const About = () => {
  return (
    <section id="sobre-mi" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content - Order reversed on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-2 lg:order-1"
          >
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Sobre{" "}
                <span className="gradient-text">Mí</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground font-body leading-relaxed">
                <p>
                  Soy Esteban Alferez Navarro, un compositor musical joven, capaz de convertir 
                  experiencias en canciones que conectan de inmediato. 
                  Mi escritura destaca por un equilibrio único entre emoción cruda, 
                  sensibilidad urbana y un toque espiritual que hace que cada letra tenga alma, 
                  propósito y personalidad.
                </p>
                <p>
                  Me especializo en <span className="text-foreground font-medium">urbano latino</span>: 
                  reggaetón, trap, R&B, rap, dancehall... Mis letras nacen de vivencias, 
                  una visión artística que mezcla calle, magia y sentimiento.
                </p>
                <p>
                  Mi foco está en <span className="text-accent font-medium">letras que cuentan historias reales</span>. 
                  No solo entrego canciones: entrego visión, emoción y verdad. 
                  Mi objetivo es ayudar a que cada artista pueda expresar lo que nunca ha dicho, 
                  sonar como siempre ha querido y elevar su proyecto con letras que dejan huella.
                </p>
              </div>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6"
            >
              <Quote className="w-8 h-8 text-accent/50 mb-4" />
              <p className="text-xl md:text-2xl font-display font-medium text-foreground/90 italic">
                "La mejor letra es la que eleva al artista, 
                 potencia su identidad y transmite un mensaje claro."
              </p>
            </motion.div>
          </motion.div>

          {/* Image/Avatar placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="aspect-square max-w-md mx-auto rounded-3xl overflow-hidden relative group">
              {/* Artist photo */}
              <img 
                src={artistImage} 
                alt="Escritor musical urbano" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            {/* Decorative floating elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />

            {/* Stats floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-4 -right-4 md:bottom-8 md:-right-8 bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-4 shadow-elevated"
            >
              <div className="flex gap-6">
                <div className="text-center">
                  <p className="text-2xl font-display font-bold gradient-text">50+</p>
                  <p className="text-xs text-muted-foreground font-body">Letras escritas</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-display font-bold gradient-text">20+</p>
                  <p className="text-xs text-muted-foreground font-body">Artistas</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
