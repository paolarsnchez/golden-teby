import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        
        {/* Animated blob 1 - Lime accent */}
        <div 
          className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-blob"
        />
        
        {/* Animated blob 2 - Warm brown */}
        <div 
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-primary/30 rounded-full blur-3xl animate-blob-reverse"
        />
        
        {/* Animated blob 3 - Accent glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full animate-pulse-glow"
        />

        {/* Grain overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Artist name */}
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-display font-extrabold tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text">GOLDEN</span>
            <br />
            <span className="text-foreground">TEBY</span>
          </motion.h1>

          

          {/* Tagline */}
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl font-display font-medium text-foreground/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Letras y beats para que tu música
            <br />
            <span className="gradient-text">cuente algo de verdad.</span>
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contacto" className="gap-3 text-white border-accent">
                Comienza tu proyecto musical
              </a>
            </Button>
            <Button variant="hero" size="xl" asChild>
              <a
                href="https://wa.me/34691590792"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </Button>
          </motion.div>
        </motion.div>

        
      </div>
    </section>
  );
};

export default Hero;
