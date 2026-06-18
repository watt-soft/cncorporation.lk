import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ParticleField from '../components/ParticleField';
import { getAssetPath } from '../utils/assetPath';

const contactItems = [
  {
    icon: <MapPin className="text-accent" size={24} />,
    title: 'Address',
    lines: ['123 Industrial Zone,', 'Colombo 03, Sri Lanka'],
  },
  {
    icon: <Phone className="text-accent" size={24} />,
    title: 'Phone',
    lines: ['+94 11 234 5678', '+94 77 123 4567 (Mobile/WhatsApp)'],
  },
  {
    icon: <Mail className="text-accent" size={24} />,
    title: 'Email',
    lines: ['info@cncorporation.lk', 'sales@cncorporation.lk'],
  },
  {
    icon: <Clock className="text-accent" size={24} />,
    title: 'Business Hours',
    lines: ['Mon - Fri: 8:30 AM - 5:30 PM'],
  },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="bg-primary min-h-screen relative overflow-hidden">

      {/* Hero Banner */}
      <div className="relative h-[400px] flex items-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <img
            src={getAssetPath('/visa_hero.jpeg')}
            alt="Contact us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/30" />
        </motion.div>

        <ParticleField particleCount={15} color="244, 197, 27" maxSize={1.5} speed={0.12} />

        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-1 bg-accent mx-auto mb-6 rounded-full shadow-[0_0_10px_rgba(244,197,27,0.3)]"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-textLight mb-6">
              Contact <span className="text-accent">Us</span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-textMuted leading-relaxed"
            >
              Whether you're looking for cutting-edge recycling machinery, premium agricultural exports, or professional visa services, our team is ready to assist you.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Contact Information & Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-textLight mb-8">Get In Touch</h3>

              <ul className="space-y-6">
                {contactItems.map((item, i) => (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className="flex items-start gap-4 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ type: 'spring' }}
                      className="w-12 h-12 bg-primary/80 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-700/50 group-hover:border-accent/40 group-hover:shadow-[0_0_15px_rgba(244,197,27,0.1)] transition-all duration-300"
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">{item.title}</h4>
                      {item.lines.map((line, j) => (
                        <p key={j} className="text-textLight group-hover:text-accent/90 transition-colors">{line}</p>
                      ))}
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-2xl p-2 h-[300px] overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-primary/80 flex items-center justify-center flex-col text-gray-500 m-2 rounded-xl border border-dashed border-gray-700/50">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <MapPin size={48} className="mb-4 opacity-40" />
                </motion.div>
                <p className="text-textMuted/60 text-sm">Google Maps Embed Location</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/3 to-transparent pointer-events-none" />

              <h3 className="text-2xl font-bold text-textLight mb-8 relative z-10">Send an Inquiry</h3>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex flex-col items-center justify-center py-20 relative z-10"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-6"
                    >
                      <CheckCircle2 className="text-accent" size={40} />
                    </motion.div>
                    <h4 className="text-2xl font-bold text-textLight mb-2">Thank You!</h4>
                    <p className="text-textMuted text-center">Your inquiry has been submitted. Our team will contact you shortly.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 relative z-10"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="space-y-2"
                      >
                        <label htmlFor="name" className="text-sm text-textMuted font-medium">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          required
                          className="input-premium"
                          placeholder="John Doe"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="space-y-2"
                      >
                        <label htmlFor="email" className="text-sm text-textMuted font-medium">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="input-premium"
                          placeholder="john@example.com"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="space-y-2"
                    >
                      <label htmlFor="service" className="text-sm text-textMuted font-medium">Service of Interest *</label>
                      <select
                        id="service"
                        required
                        defaultValue=""
                        className="input-premium appearance-none"
                      >
                        <option value="" disabled>Select a service...</option>
                        <option value="machinery">Recycling Machinery Import</option>
                        <option value="exports">Agricultural Exports (Coir/Coco Peat)</option>
                        <option value="visas">Visa & Work Permit Facilitation</option>
                        <option value="vehicles">Vehicle Import</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                      className="space-y-2"
                    >
                      <label htmlFor="message" className="text-sm text-textMuted font-medium">Message / Requirements *</label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        className="input-premium resize-none"
                        placeholder="Please provide details about your requirements..."
                      ></textarea>
                    </motion.div>

                    <motion.button
                      whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(244,197,27,0.2)' }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="btn-primary w-full text-lg mt-4 inline-flex items-center justify-center gap-2"
                    >
                      Submit Inquiry
                      <Send size={18} />
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
