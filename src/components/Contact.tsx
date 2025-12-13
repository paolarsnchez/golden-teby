import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MessageCircle, Mail, Instagram, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const contactLinks = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+34 691 590 792",
    href: "https://wa.me/34691590792",
    color: "hover:text-green-400"
  },
  {
    icon: Mail,
    label: "Email",
    value: "contacto@nombreartistico.com",
    href: "mailto:contacto@nombreartistico.com",
    color: "hover:text-accent"
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@golden_teby",
    href: "https://instagram.com/golden_teby",
    color: "hover:text-pink-400"
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Granada, España",
    href: "#",
    color: "hover:text-accent"
  }
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("¡Mensaje enviado! Te respondo en 24-48h.");
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contacto" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-card/40 via-background to-background" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-blob" />
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
            Hablemos de tu{" "}
            <span className="gradient-text">Proyecto</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10 lg:gap-16 items-start">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium font-body text-foreground/80">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Tu nombre"
                    required
                    className="bg-card/50 border-border focus:border-accent h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium font-body text-foreground/80">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    required
                    className="bg-card/50 border-border focus:border-accent h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium font-body text-foreground/80">
                  Tipo de proyecto
                </label>
                <Select name="service" required>
                  <SelectTrigger className="bg-card/50 border-border focus:border-accent h-12">
                    <SelectValue placeholder="Selecciona un servicio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="letra">Solo Letra</SelectItem>
                  <SelectItem value="letra-beat">Letra + Beat</SelectItem>
                    <SelectItem value="letra-demo">Letra + Beat + Demo</SelectItem> 
                    <SelectItem value="otro">Otro / No estoy seguro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium font-body text-foreground/80">
                  Cuéntame tu idea
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="¿De qué quieres que trate la canción? Referencias y estilo que buscas."
                  rows={5}
                  required
                  className="bg-card/50 border-border focus:border-accent resize-none"
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="xl" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Enviar mensaje
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 lg:col-span-1"
          >
            <div>
              <h3 className="text-xl font-display font-bold mb-2">
                Contacto directo
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                Si prefieres hablar directamente, aquí tienes mis datos. 
                Respondo más rápido por WhatsApp.
              </p>
            </div>

            <div className="space-y-3">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-3 p-3 rounded-xl bg-card/50 border border-border hover:border-accent/30 transition-all duration-300 group ${link.color}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 8 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <link.icon className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-body">{link.label}</p>
                    <p className="text-sm font-medium font-body">{link.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* CTA reminder */}
            <div className="bg-gradient-to-r from-accent/15 via-accent/8 to-transparent rounded-2xl p-4 border border-accent/20">
              <p className="text-base font-display font-semibold text-foreground mb-1">
                ¿Listo para empezar?
              </p>
              <p className="text-sm text-muted-foreground font-body">
                Envíame tu idea y te propongo algo en 24-48h. 
                Sin compromiso, sin letra pequeña.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
