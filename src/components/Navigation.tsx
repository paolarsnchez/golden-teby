import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#sobre-mi", label: "Sobre mí" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0 bg-background/80 backdrop-blur-xl border-b border-border/50"
          style={{ opacity: backgroundOpacity }}
        />

        <div className="container mx-auto relative z-10">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#hero" className="font-display font-bold text-xl">
              <img src="/golden-teby/logo.png" alt="Golden Teby Logo" className="h-8" />
            </a>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors font-body relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button variant="hero" size="default" asChild>
                <a href="#contacto">Contactar</a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <motion.div
        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
        initial={{ opacity: 0, pointerEvents: "none" }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none"
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-2xl font-display font-bold text-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isOpen ? 1 : 0, 
                y: isOpen ? 0 : 20 
              }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              {link.label}
            </motion.a>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isOpen ? 1 : 0, 
              y: isOpen ? 0 : 20 
            }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Button variant="hero" size="xl" asChild onClick={() => setIsOpen(false)}>
              <a href="#contacto">Contactar</a>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Navigation;
