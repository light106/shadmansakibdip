import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ABOUT_TEXT, CAREER_OBJ, STATS, EXPERTISE_FIELDS } from '../constants';

const About: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax effects - reduced range for subtlety
  const yStats = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const yCard = useTransform(scrollYProgress, [0, 1], [40, -40]);

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
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }
    }
  };

  return (
    <section id="about" ref={ref} className="py-24 relative scroll-mt-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Intro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-white mb-6">About Me</motion.h2>
            <motion.p variants={itemVariants} className="text-gray-300 text-lg leading-relaxed mb-8">{ABOUT_TEXT}</motion.p>
            
            <motion.div style={{ y: yStats }} className="flex gap-12 relative z-10">
              {STATS.map((stat, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <p className="text-3xl md:text-4xl font-bold text-apple-blue">{stat.value}</p>
                  <p className="text-sm text-gray-400 uppercase tracking-wider mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
             style={{ y: yCard }}
             className="glass rounded-2xl p-8 border-l-4 border-apple-blue relative z-0"
          >
            <h3 className="text-xl font-bold text-white mb-4">Career Objectives</h3>
            <p className="text-gray-300 leading-relaxed italic">
              "{CAREER_OBJ}"
            </p>
          </motion.div>
        </div>

        {/* Fields of Expertise */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-bold text-white mb-8">Fields of Expertise</motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPERTISE_FIELDS.map((field, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.08)" }}
                transition={{ duration: 0.2 }}
                className="glass rounded-xl p-6 flex items-center gap-4 border border-white/5"
              >
                <div className="p-3 bg-white/5 text-blue-300 rounded-lg">
                  {field.icon}
                </div>
                <span className="text-gray-100 font-medium">{field.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;