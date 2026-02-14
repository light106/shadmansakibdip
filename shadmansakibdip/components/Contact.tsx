import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SOCIALS } from '../constants';
import { Send, MapPin, Mail, Phone, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { sendMessageToDB, ContactMessage } from '../services/supabase';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactMessage>({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    // Reset status if user starts typing again after error
    if (status === 'error') setStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message || !formData.firstName) return;

    setStatus('submitting');
    try {
      await sendMessageToDB(formData);
      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="text-4xl md:text-6xl font-bold text-white mb-6"
           >
             Let's Connect
           </motion.h2>
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.1 }}
             className="text-xl text-gray-400"
           >
             Ready to discuss opportunities and collaborations
           </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Info Side */}
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="glass p-8 rounded-3xl border border-white/10 mb-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                    <p className="text-gray-300 mb-8 leading-relaxed">
                        I'm always interested in discussing new opportunities, innovative projects, and potential collaborations. Whether you're looking for expertise in AI, telecommunications, or educational technology, I'd love to hear from you.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-apple-blue/20 rounded-lg text-apple-blue">
                                <Mail size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Email</h4>
                                <a href="mailto:shadman106@gmail.com" className="text-gray-400 hover:text-white block transition-colors">shadman106@gmail.com</a>
                                <a href="mailto:attach.programmer@dshe.gov.bd" className="text-gray-400 hover:text-white block transition-colors">attach.programmer@dshe.gov.bd</a>
                                <a href="mailto:t86628@nu.ac.bd" className="text-gray-400 hover:text-white block transition-colors">t86628@nu.ac.bd</a>
                        
                            </div>
                        </div>

                         <div className="flex items-start gap-4">
                            <div className="p-3 bg-apple-blue/20 rounded-lg text-apple-blue">
                                <Phone size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Phone</h4>
                                <p className="text-gray-400">+880-1962401831</p>
                                <p className="text-gray-400">+880-1675294055</p>
                            </div>
                        </div>

                         <div className="flex items-start gap-4">
                            <div className="p-3 bg-apple-blue/20 rounded-lg text-apple-blue">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Address</h4>
                                <p className="text-gray-400">Level - 2, H- 116/3, R- 8/A<br/>West Dhanmondi, Dhaka, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Form Side */}
            <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
               className="glass p-8 rounded-3xl border border-white/10"
            >
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white">First Name</label>
                            <input 
                              type="text" 
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-apple-blue focus:bg-white/10 transition-all" 
                              placeholder="John"
                              required 
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white">Last Name</label>
                            <input 
                              type="text" 
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-apple-blue focus:bg-white/10 transition-all" 
                              placeholder="Doe" 
                            />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white">Email</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-apple-blue focus:bg-white/10 transition-all" 
                          placeholder="john@example.com"
                          required 
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white">Subject</label>
                        <input 
                          type="text" 
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-apple-blue focus:bg-white/10 transition-all" 
                          placeholder="Project Discussion"
                          required 
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white">Message</label>
                        <textarea 
                          rows={4} 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-apple-blue focus:bg-white/10 transition-all" 
                          placeholder="Tell me about your project..."
                          required 
                        />
                    </div>

                    <button 
                      type="submit" 
                      disabled={status === 'submitting' || status === 'success'}
                      className={`w-full font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 ${
                        status === 'success' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                          : status === 'error'
                          ? 'bg-red-500 hover:bg-red-600 text-white shadow-red-500/25'
                          : 'bg-apple-blue hover:bg-blue-500 text-white shadow-blue-500/25'
                      } disabled:opacity-70 disabled:cursor-not-allowed`}
                    >
                        {status === 'submitting' ? (
                          <>
                            <Loader2 className="animate-spin" size={18} />
                            Sending...
                          </>
                        ) : status === 'success' ? (
                          <>
                            <CheckCircle size={18} />
                            Message Sent!
                          </>
                        ) : status === 'error' ? (
                          <>
                            <AlertCircle size={18} />
                            Failed. Try Again.
                          </>
                        ) : (
                          <>
                            <Send size={18} />
                            Send Message
                          </>
                        )}
                    </button>
                </form>
            </motion.div>

        </div>
        
        <div className="mt-20 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>
                &copy; 2026 Engr. Shadman Sakib. All rights reserved. 
                <span className="mx-2">|</span> 
                <span className="text-white font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">Available for new opportunities</span>
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
                {SOCIALS.map((social, idx) => (
                    <a key={idx} href={social.url} className="hover:text-white transition-colors">
                        {social.icon}
                    </a>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
