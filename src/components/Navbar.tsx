import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import ScrollProgress from './ScrollProgress';
import { getAssetPath } from '../utils/assetPath';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Import Machinery', path: '/import' },
    { name: 'Export Products', path: '/export' },
    { name: 'Visa Services', path: '/visa-services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <ScrollProgress />
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={clsx(
          'fixed w-full top-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-primary/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3 border-b border-white/5'
            : 'bg-transparent py-5'
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <motion.img
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                src={getAssetPath('/cnc_logo.png')}
                alt="CN Corporation Logo"
                className="h-12 w-auto object-contain"
              />
              <div className="flex flex-col hidden sm:flex">
                <span className="text-xl font-bold text-textLight leading-tight tracking-wider">
                  CN <span className="text-accent">CORPORATION</span>
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8 items-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.3, duration: 0.4 }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      clsx(
                        'text-sm font-semibold uppercase tracking-wide transition-all duration-300 hover:text-accent relative py-1',
                        isActive ? 'text-accent' : 'text-textLight'
                      )
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.name}
                        {isActive && (
                          <motion.div
                            layoutId="nav-underline"
                            className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent rounded-full shadow-[0_0_8px_rgba(244,197,27,0.5)]"
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Link to="/contact" className="btn-primary py-2.5 px-6 text-sm ml-4 rounded-lg">
                  Get a Quote
                </Link>
              </motion.div>
            </nav>

            {/* Mobile Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="md:hidden text-textLight hover:text-accent transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-full left-0 w-full bg-primary/95 backdrop-blur-xl border-t border-white/5 shadow-2xl overflow-hidden"
            >
              <nav className="flex flex-col px-4 pt-2 pb-6 gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        clsx(
                          'block px-4 py-3.5 rounded-lg text-sm font-semibold uppercase tracking-wide transition-all duration-200',
                          isActive ? 'bg-accent/10 text-accent border-l-2 border-accent' : 'text-textLight hover:bg-white/5'
                        )
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Navbar;
