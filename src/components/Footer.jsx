
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 relative overflow-hidden bg-black/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 md:mb-0"
            >
              <span className="text-2xl font-bold gradient-text">Portfolio</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex space-x-6 mb-6 md:mb-0"
            >
              <motion.a
                href="#home"
                className="text-foreground/70 hover:text-foreground transition-colors"
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Home
              </motion.a>
              <motion.a
                href="#about"
                className="text-foreground/70 hover:text-foreground transition-colors"
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                About
              </motion.a>
              <motion.a
                href="#skills"
                className="text-foreground/70 hover:text-foreground transition-colors"
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Skills
              </motion.a>
              <motion.a
                href="#projects"
                className="text-foreground/70 hover:text-foreground transition-colors"
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="text-foreground/70 hover:text-foreground transition-colors"
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Contact
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex space-x-4"
            >
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <Github size={18} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <Twitter size={18} />
              </motion.a>
            </motion.div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/60 text-sm mb-4 md:mb-0">
              © {currentYear} Jagan . All rights reserved.
            </p>
            
            <p className="text-foreground/60 text-sm flex items-center">
              Made with <Heart size={14} className="mx-1 text-red-500" /> by Jagan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
