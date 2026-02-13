import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yHeader = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const barVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: { duration: 1.2, ease: "easeOut" as const }
    })
  };

  return (
    <section id="skills" ref={ref} className="py-24 scroll-mt-28 relative overflow-hidden">
       {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-1/3 h-full bg-gradient-to-r from-purple-900/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          style={{ y: yHeader }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-gray-400">Technical proficiencies and specialized knowledge</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-[#edfffb] backdrop-blur-md rounded-2xl p-8 text-black shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                {cat.category}
              </h3>
              
              <div className="space-y-6">
                {cat.items.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between text-sm font-medium mb-2">
                      <span>{skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <motion.div
                        variants={barVariants}
                        custom={skill.level}
                        className="h-full bg-apple-blue rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;