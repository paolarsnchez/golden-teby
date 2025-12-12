import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Mic, PenLine, Music, Clock } from "lucide-react";
import studioImage from "@/assets/studio-hero.jpg";
const features = [
  {
    icon: Mic,
    text: "Grabación vocal con indicaciones profesionales"
  },
  {
    icon: PenLine,
    text: "Escritura de letras en sesión, cara a cara"
  },
  {
    icon: Music,
    text: "Elección de beats y asesoría creativa"
  },
  {
    icon: Clock,
    text: "Sesiones de 2h, 4h o paquetes personalizados"
  }
];

const Studio = () => {
  return (
    <section id="estudio" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 -left-40 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl animate-blob-reverse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden relative group">
              {/* Studio image */}
              <img 
                src={studioImage} 
                alt="Estudio de grabación en Granada" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
              
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-card/90 backdrop-blur-sm rounded-xl px-4 py-3 border border-border">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="font-display font-semibold">Granada, España</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/30 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/30 rounded-full blur-2xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                El{" "}
                <span className="gradient-text">Estudio</span>
              </h2>
              <p className="text-xl md:text-2xl text-foreground/90 font-display mb-4">
                Tu espacio creativo en Granada
              </p>
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                Un estudio íntimo y profesional donde crear tu música sin prisas. 
                Trabajamos juntos en todo: desde la idea inicial hasta la grabación final.
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-foreground/90 font-body">{feature.text}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#contacto">Reservar sesión</a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contacto">Preguntar por paquetes</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Studio;
