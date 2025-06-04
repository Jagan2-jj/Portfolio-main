
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: "Epic Food Recipe",
    description: "A comprehensive dashboard for e-commerce businesses with real-time analytics, inventory management, and customer insights.",
    tags: ["Html", "Css", "Javascript", "mongodb", "api"],
    imageAlt: "Epic food recipe dashboard showcasing a modern UI with charts and data visualizations",
    imageSrc: "/p1.jpg", // Add this line
    liveUrl: "https://example.com/project1",
    githubUrl: "https://github.com/Jagan2-jj/myproject"
  },
  {
    id: 2,
    title: "Travel Companion App",
    description: "A mobile-first web application that helps travelers plan their trips, discover local attractions, and share their experiences.",
    tags: ["React", "Framer Motion", "Google Maps API", "Supabase"],
    imageAlt: "Travel companion app showing a map interface with points of interest and trip planning features",
    imageSrc: "", // Add this line
    liveUrl: "https://example.com/project2",
    githubUrl: "https://github.com/username/project2"
  },
  {
    id: 3,
    title: "Creative Portfolio",
    description: "A visually stunning portfolio website for a digital artist, featuring interactive galleries and smooth animations.",
    tags: ["React", "Three.js", "GSAP", "Netlify"],
    imageAlt: "Creative portfolio website with interactive 3D elements and image galleries",
    imageSrc: "/p2.jpg, // Add this line
    liveUrl: "https://example.com/project3",
    githubUrl: "https://github.com/username/project3"
  },
  {
    id: 4,
    title: "Fitness Tracker",
    description: "A comprehensive fitness application that allows users to track workouts, set goals, and visualize their progress over time.",
    tags: ["React", "D3.js", "Firebase Auth", "Tailwind"],
    imageAlt: "Fitness tracking application showing workout statistics and progress charts",
    imageSrc: "/images/fitness-tracker.png", // Add this line
    liveUrl: "https://example.com/project4",
    githubUrl: "https://github.com/username/project4"
  }
];


const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const nextProject = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background to-background/95 z-0"></div>
      
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
              My <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Explore a selection of my recent work showcasing my skills and creative approach
            </p>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className="animated-border p-1">
                  <div className="overflow-hidden rounded-lg">
                    <img  
                      className="w-full h-auto rounded-lg" 
                      alt={projects[currentProject].imageAlt}
                      src={projects[currentProject].imageSrc} // Use the imageSrc property
                    />

                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3">{projects[currentProject].title}</h3>
                  <p className="text-foreground/80 mb-6">{projects[currentProject].description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[currentProject].tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button 
                      as="a" 
                      href={projects[currentProject].liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      as="a" 
                      href={projects[currentProject].githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Github size={16} className="mr-2" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex justify-center mt-12 space-x-4">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={prevProject}
                className="rounded-full"
              >
                <ChevronLeft size={20} />
              </Button>
              
              <div className="flex space-x-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentProject === index ? 'bg-primary' : 'bg-foreground/20'
                    }`}
                  />
                ))}
              </div>
              
              <Button 
                variant="outline" 
                size="icon" 
                onClick={nextProject}
                className="rounded-full"
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
