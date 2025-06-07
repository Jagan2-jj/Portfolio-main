import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    user_name: '',  // Changed to match template
    user_email: '', // Changed to match template
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  // EmailJS Configuration with your provided IDs
  const EMAILJS_CONFIG = {
    SERVICE_ID:'service_91ho7n8',
    TEMPLATE_ID: 'template_kz6mz1v', 
    PUBLIC_KEY: 'Xn2LRXSY2I2mRY_MW'
  };

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Add debug logging
    console.log('Submitting form with data:', formData);
    
    emailjs.sendForm(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      formRef.current,
      EMAILJS_CONFIG.PUBLIC_KEY
    )
    .then((result) => {
      console.log('EmailJS success:', result);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        user_name: '',
        user_email: '',
        subject: '',
        message: '',
      });
    })
    .catch((error) => {
      console.error('EmailJS error:', error);
      toast({
        title: "Error",
        description: `Failed to send message: ${error.text || 'Please try again later'}`,
        variant: "destructive"
      });
    })
    .finally(() => {
      setIsSubmitting(false);
    });
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
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 to-background z-0"></div>
      
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
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:jk8523301@gmail.com" className="text-foreground/80 hover:text-primary transition-colors">
                      jk8523301@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <a href="tel:+917847882559" className="text-foreground/80 hover:text-primary transition-colors">
                      +91 7847882559
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-foreground/80">
                      muniguda, Odisha, India
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6">
                <h4 className="text-lg font-medium mb-3">Let's create something amazing together</h4>
                <p className="text-foreground/80">
                  I'm currently available for freelance work and exciting collaborations. If you have a project that needs creative development, let's discuss how I can help bring your vision to life.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="user_name"  // Changed to match template
                      value={formData.user_name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="user_email"  // Changed to match template
                      value={formData.user_email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send size={16} className="mr-2" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
