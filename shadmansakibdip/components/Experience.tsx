import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const yHeader = useTransform(scrollYProgress, [0, 1], [30, -30]); // Reduced from 50
  const scaleY = useTransform(scrollYProgress, [0.05, 0.9], [0, 1]); // Adjusted trigger points

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30, filter: "blur(10px)" }, // Added blur
    visible: { 
      opacity: 1, 
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }
    }
  };

  return (
    <section id="experience" ref={containerRef} className="py-24 scroll-mt-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          style={{ y: yHeader }}
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Professional Experience</h2>
          <p className="text-gray-400">A comprehensive journey through my professional career</p>
        </motion.div>

        <div className="relative pl-6 md:pl-0">
          {/* Vertical Progress Line (Mobile/Tablet left aligned, optional visually) */}
          <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-white/5 hidden sm:block rounded-full" />
          <motion.div 
            style={{ scaleY }} 
            className="absolute left-0 top-4 bottom-4 w-0.5 bg-apple-blue origin-top hidden sm:block rounded-full shadow-[0_0_10px_rgba(41,151,255,0.5)]" 
          />

          <motion.div 
            className="space-y-12 sm:pl-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {EXPERIENCE.map((exp) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="glass rounded-2xl p-8 relative overflow-hidden group hover:bg-white/5 transition-all duration-500 border border-white/5 hover:border-white/10"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-apple-blue transition-colors duration-300">{exp.role}</h3>
                    <div className="text-blue-300 font-medium text-lg">{exp.company}</div>
                  </div>
                  <div className="px-4 py-1.5 bg-white/5 rounded-full text-sm font-medium text-gray-300 whitespace-nowrap border border-white/10 self-start md:self-auto">
                    {exp.period}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex gap-2 text-gray-300 text-sm">
                          <span className="text-apple-blue mt-1.5 w-1.5 h-1.5 rounded-full bg-apple-blue shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {exp.techFocus.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Technical Focus</h4>
                      <ul className="space-y-2">
                        {exp.techFocus.map((item, i) => (
                          <li key={i} className="flex gap-2 text-gray-300 text-sm">
                            <span className="text-purple-400 mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;