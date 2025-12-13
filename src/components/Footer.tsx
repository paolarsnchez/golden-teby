import { motion } from "framer-motion";
import { Instagram, MessageCircle, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:justify-self-start"
          >
            <h3 className="text-2xl font-display font-bold">
              <span className="gradient-text">GOLDEN</span>
              <span className="text-foreground"> TEBY</span>
            </h3>
            <p className="text-sm text-muted-foreground font-body mt-1">
              Escritor musical · Granada, España
            </p>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center gap-4"
          >
            <a 
              href="https://instagram.com/golden_teby" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://wa.me/34691590792" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a 
              href="mailto:contacto@nombreartistico.com"
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Back to top */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors font-body group md:justify-self-end"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-border/50 text-center"
        >
          <p className="text-sm text-muted-foreground font-body">
            © {new Date().getFullYear()} GOLDEN TEBY. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
