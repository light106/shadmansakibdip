import React from 'react';
import { motion } from 'framer-motion';
import { AWARDS } from '../constants';
import { Trophy, Mic, Music, Gamepad } from 'lucide-react';

const Extras: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Awards */}
        <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Awards & Achievements</h2>
              <p className="text-gray-400">Recognition for professional excellence and personal talents</p>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {AWARDS.map((award, idx) => (
                    <motion.div
                        key={idx}
                        variants={itemVariants}
                        whileHover={{ y: -8, backgroundColor: "rgba(255,255,255,0.1)" }}
                        className="glass p-6 rounded-2xl border border-white/10 text-center transition-colors duration-300"
                    >
                        <div className="w-12 h-12 mx-auto bg-yellow-500/20 text-yellow-500 rounded-full flex items-center justify-center mb-4">
                            {award.icon}
                        </div>
                        <h3 className="font-bold text-white mb-1">{award.title}</h3>
                        <p className="text-sm text-blue-300 mb-2">{award.category}</p>
                        <p className="text-xs text-gray-400">{award.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="glass-high-contrast rounded-3xl p-12 text-center border border-white/10"
        >
             <h3 className="text-2xl font-bold text-white mb-2">Personal Interests & Talents</h3>
             <p className="text-gray-400 mb-12">Beyond professional achievements</p>
             
             <div className="flex flex-wrap justify-center gap-12">
                <div className="flex flex-col items-center gap-3">
                    <div className="p-4 rounded-full bg-purple-500/20">
                      <Mic className="w-8 h-8 text-purple-400" />
                    </div>
                    <div>
                        <div className="font-bold text-white">Professional Singer</div>
                        <div className="text-xs text-gray-400">Performances & Competitions</div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                    <div className="p-4 rounded-full bg-blue-500/20">
                      <Music className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                        <div className="font-bold text-white">Guitarist</div>
                        <div className="text-xs text-gray-400">Guitar & Keyboard Player</div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                    <div className="p-4 rounded-full bg-orange-500/20">
                      <Trophy className="w-8 h-8 text-orange-400" />
                    </div>
                    <div>
                        <div className="font-bold text-white">Sports Enthusiast</div>
                        <div className="text-xs text-gray-400">Table Tennis, Cricket, Chess</div>
                    </div>
                </div>
                 <div className="flex flex-col items-center gap-3">
                    <div className="p-4 rounded-full bg-red-500/20">
                      <Gamepad className="w-8 h-8 text-red-400" />
                    </div>
                    <div>
                        <div className="font-bold text-white">Strategic Games</div>
                        <div className="text-xs text-gray-400">Chess & Carom Board</div>
                    </div>
                </div>
             </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Extras;