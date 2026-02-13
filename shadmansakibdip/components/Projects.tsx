import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Briefcase } from 'lucide-react';

const Projects: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yHeader = useTransform(scrollYProgress, [0, 1], [30, -30]); // Reduced

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
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" }, // Added blur
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }
    }
  };

  return (
    <section id="projects" ref={ref} className="py-24 scroll-mt-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          style={{ y: yHeader }}
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Major Projects</h2>
          <p className="text-gray-400">Significant project management and technical implementations</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8, backgroundColor: "rgba(255,255,255,0.08)" }}
              className="glass p-8 rounded-3xl border border-white/10 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 rounded-xl bg-apple-blue/20 text-apple-blue">
                   <Briefcase size={24} />
                </div>
                <span className="text-sm text-gray-400">{project.date}</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-blue-300 font-medium mb-4">{project.role}</p>
              <p className="text-gray-300 text-sm mb-6">{project.description}</p>

              <div className="bg-black/30 rounded-2xl p-6 border border-white/5">
                 <h4 className="text-sm font-semibold text-white mb-3">Key Deliverables:</h4>
                 <ul className="space-y-2">
                    {project.deliverables.map((item, i) => (
                        <li key={i} className="flex gap-2 text-sm text-gray-400">
                             <span className="text-green-400 mt-1">✓</span>
                             {item}
                        </li>
                    ))}
                 </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;