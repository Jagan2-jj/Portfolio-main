
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Globe, Database, Lightbulb, Layers } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code size={32} className="text-primary" />,
    skills: ["React", "JavaScript", "HTML5", "CSS3"]
  },
  {
    title: "UI/UX Design",
    icon: <Palette size={32} className="text-accent" />,
    skills: ["Figma"]
  },
  {
    title: "Web Technologies",
    icon: <Globe size={32} className="text-secondary" />,
    skills: ["Responsive Design", "Progressive Web Apps", "Cross-Browser Compatibility"]
  },
  {
    title: "Backend Knowledge",
    icon: <Database size={32} className="text-primary" />,
    skills: ["Node.js", "RESTful APIs", "Authentication", "Database Design"]
  },
  {
    title: "Coding",
    icon: <Lightbulb size={32} className="text-accent" />,
    skills: ["Java", "Python", "C", "Data Structures", "Algorithms"]
  },
  {
    title: "Tools & Workflow",
    icon: <Layers size={32} className="text-secondary" />,
    skills: ["Git", "GitHub", "VS Code", ]
  }
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-background to-background/95">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05)_0%,rgba(0,0,0,0)_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05)_0%,rgba(0,0,0,0)_50%)]"></div>
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
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and areas of expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="skill-card"
              >
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-bold ml-3">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 + (skillIndex * 0.1) }}
                        className="w-1.5 h-1.5 rounded-full bg-primary mr-2"
                      />
                      <span className="text-foreground/80">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
