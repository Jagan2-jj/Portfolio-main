import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = ({ scrollYProgress }) => {
  const [ref, inView] = useInView({
    triggerOnce: false, 
    threshold: 0.2,
  });

  const imageY = useTransform(scrollYProgress, [0.1, 0.4], ["-20%", "20%"]); 
  const textY = useTransform(scrollYProgress, [0.1, 0.4], ["20%", "-20%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90 z-0"></div>
      
      <div className="absolute inset-0 overflow-hidden opacity-50 dark:opacity-30">
        <motion.div
          className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-primary/5"
          style={{ y: useTransform(scrollYProgress, [0,1], ['-50%', '50%'])}}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute bottom-20 left-[10%] w-80 h-80 rounded-full bg-secondary/5"
          style={{ y: useTransform(scrollYProgress, [0,1], ['50%', '-50%'])}}
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Get to know me better - my background, experience, and what drives me as a creative developer.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              variants={itemVariants} 
              className="relative"
              style={{ y: imageY }}
            >
              <div className="animated-border p-1">
                <div className="overflow-hidden rounded-lg">
                  <img 
                    className="w-full h-auto rounded-lg object-cover max-h-[400px]" 
                    alt="Professional portrait of Jagan Panigrahi, a creative developer" 
                    src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8" 
                  />
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              style={{ y: textY }}
            >
              <h3 className="text-2xl font-bold mb-4">
                I'm <span className="gradient-text">Jagan Panigrahi</span>, a Creative Developer and coder
              </h3>
              
              <p className="text-foreground/80 mb-4">
                As a Computer Science student and passionate developer, I specialize in building clean, efficient, and user-friendly digital experiences.
              </p>
              
              <p className="text-foreground/80 mb-6">
                From writing my first line of code to developing full-stack web applications, I've grown into a developer who loves solving problems, creating intuitive user interfaces, and experimenting with new technologies. Whether it's frontend design or backend logic, I'm driven by a love for code and a desire to keep learning and improving.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <h4 className="text-primary font-medium mb-2">Name:</h4>
                  <p>Jagan Panigrahi</p>
                </div>
                <div>
                  <h4 className="text-primary font-medium mb-2">Email:</h4>
                  <p>jk8523301@gmail.com</p>
                </div>
                <div>
                  <h4 className="text-primary font-medium mb-2">Location:</h4>
                  <p>Muniguda,Odisha,India</p>
                </div>
                <div>
                  <h4 className="text-primary font-medium mb-2">Availability:</h4>
                  <p>Full-time</p>
                </div>
              </div>

              <a href="/JaganPanigrahi_Resume.pdf" download>
                <Button className="group">
                  <Download size={16} className="mr-2 group-hover:animate-bounce" />
                  Download Resume
                </Button>
              </a>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;