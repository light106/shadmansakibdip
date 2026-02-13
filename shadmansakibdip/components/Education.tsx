import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION, CERTIFICATIONS } from '../constants';
import { GraduationCap, Award } from 'lucide-react';

const Education: React.FC = () => {
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
    }
  };

  return (
    <section id="education" className="py-24 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Academic Education */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Education</h2>
            <p className="text-gray-400">Academic achievements and qualifications</p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {EDUCATION.map((edu, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`p-8 rounded-2xl glass border-t-0 border-x-0 border-b-4 ${edu.color?.replace('text-', 'border-') || 'border-gray-500'} hover:bg-white/5 transition-colors duration-300`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-white/5 ${edu.color?.split(' ')[2]}`}>
                    <GraduationCap size={24} />
                  </div>
                  <span className="text-sm font-medium opacity-60">{edu.year}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                <p className="text-lg font-medium opacity-90 mb-4">{edu.field}</p>
                <p className="text-sm opacity-70 uppercase tracking-wide">{edu.institution}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certifications */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Certifications & Training</h2>
            <p className="text-gray-400">Professional certifications and specialized training programs</p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {CERTIFICATIONS.map((cert, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
                transition={{ duration: 0.2 }}
                className="glass p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center transition-all duration-300"
              >
                <div className={`p-4 rounded-full bg-white/5 mb-4 ${cert.color}`}>
                  {cert.icon}
                </div>
                <h3 className="font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-blue-300 text-sm font-medium mb-1">{cert.organization}</p>
                <p className="text-gray-400 text-xs">{cert.details}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Education;