import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = ({ scrollYProgress }) => {
  const scrollToAbout = () => {
    document.querySelector('#about').scrollIntoView({
      behavior: 'smooth'
    });
  };

  // Enhanced Parallax: Photo moves more, Text moves less
  const photoY = useTransform(scrollYProgress, [0, 0.25], ["0%", "60%"]); 
  const photoX = useTransform(scrollYProgress, [0, 0.25], ["0%", "10%"]); // Slight horizontal movement for photo
  const textY = useTransform(scrollYProgress, [0, 0.25], ["0%", "30%"]); 
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.4]);
  const backgroundScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.3]);


  const newLocal = "\jagan.jpg";
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-grid overflow-hidden">
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{ opacity: backgroundOpacity, scale: backgroundScale }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10 dark:bg-primary/5"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [Math.random() * 100, Math.random() * -100],
              x: [Math.random() * 50, Math.random() * -50], // Adding some x-axis movement
              opacity: [0.05, 0.2, 0.05],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-4 z-10">
        {/* Order of flex items ensures photo is on the right on large screens */}
        <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-12 pt-20 lg:pt-0">
          {/* Text Content */}
          <motion.div 
            className="lg:w-3/5 order-2 lg:order-1" 
            style={{ y: textY }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} // Slight delay for staggered effect
          >
            <div
              className="mb-4"
            >
              <span className="text-lg md:text-xl text-primary">Hello, I'm</span>
            </div>

            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="gradient-text">Jagan Panigrahi</span>
            </h1>

            <div
              className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              I'm a <span className="text-accent font-semibold">Student Developer</span> passionate about learning and building beautiful, functional, and user-friendly digital experiences. Currently exploring web development, UI/UX design, and creative coding.
            </div>

            <div
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12"
            >
              <Button
                size="lg"
                className="animated-border bg-primary/10 hover:bg-primary/20 text-white dark:text-foreground"
                onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:border-primary/50 text-white dark:text-foreground dark:border-primary/50 dark:hover:border-primary/70"
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
            </div>

            <div
              className="flex space-x-4 justify-center lg:justify-start"
            >
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-foreground/10 dark:bg-white/10 p-3 rounded-full hover:bg-foreground/20 dark:hover:bg-white/20 transition-colors"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-foreground/10 dark:bg-white/10 p-3 rounded-full hover:bg-foreground/20 dark:hover:bg-white/20 transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-foreground/10 dark:bg-white/10 p-3 rounded-full hover:bg-foreground/20 dark:hover:bg-white/20 transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
            </div>
          </motion.div>
          
          {/* Photo Content */}
          <motion.div 
            className="lg:w-2/5 order-1 lg:order-2 flex justify-center lg:justify-end" 
            style={{ y: photoY, x: photoX }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }} // Animate x to 0 for entry from right
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem]">
              <div className="absolute inset-0 animated-border p-1 rounded-full">
                <img  
                  className="w-full h-full rounded-full object-cover shadow-2xl" 
                  alt="Professional portrait of John Doe, a creative developer"
                 src={newLocal} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-foreground/10 dark:bg-white/10 hover:bg-foreground/20 dark:hover:bg-white/20"
          onClick={scrollToAbout}
          aria-label="Scroll to about section"
        >
          <ArrowDown size={20} />
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;
