import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Noches de Granada",
    style: "Reggaetón",
    type: "Letra + Demo",
    color: "from-accent/30 to-primary/30"
  },
  {
    title: "Sin Miedo",
    style: "Trap",
    type: "Solo Letra",
    color: "from-primary/40 to-accent/20"
  },
  {
    title: "Contigo",
    style: "Pop Urbano",
    type: "Sesión Estudio",
    color: "from-accent/20 to-primary/40"
  },
  {
    title: "Fuego Lento",
    style: "R&B Latino",
    type: "Letra + Demo",
    color: "from-primary/30 to-accent/30"
  },
  {
    title: "Calle y Arte",
    style: "Rap",
    type: "Solo Letra",
    color: "from-accent/40 to-primary/20"
  },
  {
    title: "Luna Nueva",
    style: "Dancehall",
    type: "Sesión Estudio",
    color: "from-primary/20 to-accent/40"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const
    }
  }
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

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
            Portfolio &{" "}
            <span className="gradient-text">Demos</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-body">
            Algunos trabajos recientes. Cada letra cuenta una historia única.
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-4 flex flex-col justify-between">
                {/* Top - Type badge */}
                <div className="flex justify-between items-start">
                  <span className="bg-card/80 backdrop-blur-sm text-xs font-medium px-3 py-1.5 rounded-full text-foreground/80 font-body">
                    {project.type}
                  </span>
                  <motion.button 
                    className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-5 h-5 ml-0.5" />
                  </motion.button>
                </div>

                {/* Bottom - Info */}
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-accent text-sm font-medium mb-1 font-body">{project.style}</p>
                  <h3 className="text-xl font-display font-bold">{project.title}</h3>
                  
                  {/* Listen link - appears on hover */}
                  <div className="flex items-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-4 h-4 text-accent" />
                    <span className="text-sm text-accent font-medium font-body">Escuchar demo</span>
                  </div>
                </div>
              </div>

              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent/50 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
