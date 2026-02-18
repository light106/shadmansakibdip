import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HERO_TITLE, HERO_SUBTITLE, HERO_DESC, SOCIALS } from '../constants';
import { ChevronDown, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Smooth easing curve
  const transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { ...transition }
    }
  };

  // Dedicated variant for the main title to add scale and blur
  const titleVariants = {
    hidden: { opacity: 0, scale: 0.85, filter: "blur(15px)", y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } 
    }
  };

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-purple-500/30 rounded-full blur-[100px] mix-blend-screen animate-blob" />
         <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-blue-500/30 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-2000" />
         <div className="absolute -bottom-8 left-[20%] w-72 h-72 bg-pink-500/30 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div 
          style={{ y: y1, opacity }} 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <motion.h1
            variants={titleVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 drop-shadow-lg whitespace-nowrap"
          >
            {HERO_TITLE}
          </motion.h1>
          
          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl text-blue-300 font-medium mb-6"
          >
            {HERO_SUBTITLE}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 font-light max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
          >
            {HERO_DESC}
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a 
              href="#contact" 
              onClick={handleScrollToContact}
              className="px-8 py-3.5 rounded-full bg-apple-blue text-white font-semibold hover:bg-blue-500 transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
            >
              Get In Touch
            </a>
            <a 
              href="/resume.pdf"
              download="Shadman_Sakib_Resume.pdf"
              className="px-8 py-3.5 rounded-full bg-white/5 border border-white/20 text-white font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2 hover:scale-105 backdrop-blur-sm"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex gap-6 justify-center lg:justify-start"
          >
            {SOCIALS.map((social, idx) => (
              <a key={idx} href={social.url} className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Image Area */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
           animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
           transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.2 }}
           className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full md:rounded-3xl overflow-hidden glass border-0 shadow-2xl ring-1 ring-white/10">
             <img 
               src="https://drive.google.com/file/d/1Zq62ryYdfxui_Q8c7emX372i4ChBmqHR/view" 
               alt="Shadman Sakib"
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        </motion.div>

      </div>

      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hidden md:block"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
};

export default Hero;
