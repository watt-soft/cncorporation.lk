import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { getAssetPath } from '../utils/assetPath';

const footerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = () => {
  return (
    <footer className="bg-[#080808] border-t border-white/5 pt-20 pb-8 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-40 -right-40 w-80 h-80 rounded-full border border-gray-800/20"
      />
      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full border border-accent/5"
      />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />

      {/* Top gradient separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >

          {/* Brand Info */}
          <motion.div variants={itemVariants}>
            <Link to="/" className="flex items-center gap-2.5 mb-6 group">
              <motion.img
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                src={getAssetPath('/cnc_logo.png')}
                alt="CN Corporation Logo"
                className="h-12 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-textLight leading-tight tracking-wider">
                  CN <span className="text-accent">CORPORATION</span>
                </span>
              </div>
            </Link>
            <p className="text-textMuted text-sm mb-6 leading-relaxed">
              Bringing Japan's advanced eco-technology to Sri Lanka. We specialize in recycling machinery, agricultural exports, and visa facilitation services.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-textLight font-bold mb-6 tracking-wide uppercase text-sm">Business Lines</h4>
            <ul className="space-y-3">
              {[
                { to: '/import', label: 'Recycling Machinery' },
                { to: '/export', label: 'Agricultural Exports' },
                { to: '/visa-services', label: 'Visa & Work Permits' },
                { to: '/import', label: 'Vehicle Imports' },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-textMuted hover:text-accent transition-all duration-300 text-sm inline-flex items-center gap-2 group">
                    <span className="inline-block w-0 group-hover:w-4 transition-all duration-300 h-px bg-accent" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h4 className="text-textLight font-bold mb-6 tracking-wide uppercase text-sm">Company</h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'About Us' },
                { to: '/contact', label: 'Contact & Support' },
                { to: '#', label: 'Privacy Policy' },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-textMuted hover:text-accent transition-all duration-300 text-sm inline-flex items-center gap-2 group">
                    <span className="inline-block w-0 group-hover:w-4 transition-all duration-300 h-px bg-accent" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="text-textLight font-bold mb-6 tracking-wide uppercase text-sm">Get In Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-textMuted group-hover:text-textLight transition-colors">123 Industrial Zone, Colombo 03, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-textMuted group-hover:text-textLight transition-colors">+94 11 234 5678</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-textMuted group-hover:text-textLight transition-colors">info@cncorporation.lk</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-textMuted/60 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} CN Corporation. All rights reserved.
          </p>

          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-xs text-textMuted/60 hover:text-accent transition-all duration-300 group"
          >
            Back to Top
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-8 h-8 rounded-full border border-gray-800 group-hover:border-accent/50 flex items-center justify-center transition-colors"
            >
              <ArrowUp size={14} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
