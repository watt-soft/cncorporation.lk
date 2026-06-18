import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ParticleField from './ParticleField';

const slides = [
  {
    id: 1,
    image: '/Industrial_recycling_machine_reveal_202606162256.jpeg',
    title: 'Advanced Japanese Recycling Technology',
    subtitle: 'Turning waste into value for a sustainable tomorrow. High-efficiency machinery imported directly from Japan.',
    cta: 'View Machinery',
    link: '/import'
  },
  {
    id: 2,
    image: '/export_product_hero.jpeg',
    title: 'Premium Agricultural Exports',
    subtitle: "Sri Lanka's finest Coir Fibre and Coco Peat, meeting the highest global horticulture standards.",
    cta: 'Discover Exports',
    link: '/export'
  },
  {
    id: 3,
    image: '/visa_hero.jpeg',
    title: 'Japan Visas & Work Permits',
    subtitle: 'Expert facilitation for international students and professionals seeking opportunities abroad.',
    cta: 'Learn More',
    link: '/visa-services'
  }
];

// Split text into words for staggered animation
const WordReveal = ({ text, className }: { text: string; className?: string }) => {
  const words = text.split(' ');
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40, rotateX: -45 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.4 + i * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block mr-[0.3em]"
          style={{ perspective: '500px' }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [current, nextSlide]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-primary">
      {/* Animated background slides with Ken Burns */}
      <AnimatePresence custom={direction} mode="popLayout">
        <motion.div
          key={current}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.05, opacity: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] as const }}
          className="absolute inset-0"
        >
          {/* Ken Burns continuous zoom */}
          <motion.img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
            animate={{ scale: [1, 1.08] }}
            transition={{ duration: 8, ease: 'linear' }}
          />
          {/* Cinematic gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-primary/30" />
          {/* Vignette */}
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.6) 100%)' }} />
        </motion.div>
      </AnimatePresence>

      {/* Particle Effect */}
      <ParticleField particleCount={30} color="244, 197, 27" maxSize={2} speed={0.2} />

      {/* Grain texture overlay */}
      <div className="absolute inset-0 grain-overlay pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl pt-20 pb-20 md:pb-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                {/* Animated accent line */}
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 80, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="h-1 bg-accent mb-8 rounded-full shadow-[0_0_15px_rgba(244,197,27,0.5)]"
                />

                {/* Slide counter */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-xs uppercase tracking-[0.3em] text-accent/70 font-semibold mb-6 flex items-center gap-3"
                >
                  <span className="text-accent text-lg font-bold">
                    {String(current + 1).padStart(2, '0')}
                  </span>
                  <span className="w-8 h-px bg-textMuted/40" />
                  <span className="text-textMuted/60">
                    {String(slides.length).padStart(2, '0')}
                  </span>
                </motion.div>

                {/* Word-by-word title reveal */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-textLight leading-tight mb-6 tracking-tight">
                  <WordReveal text={slides[current].title} />
                </h1>

                {/* Subtitle with fade */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.7 }}
                  className="text-lg md:text-xl text-textMuted mb-10 max-w-2xl leading-relaxed"
                >
                  {slides[current].subtitle}
                </motion.p>

                {/* CTA Button with glow */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, type: 'spring', stiffness: 200 }}
                >
                  <Link
                    to={slides[current].link}
                    className="btn-primary inline-flex items-center gap-3 text-lg group"
                  >
                    {slides[current].cta}
                    <motion.span
                      animate={{ x: [0, 6, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                    >
                      <ChevronRight size={20} />
                    </motion.span>
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-10 md:bottom-16 right-6 md:right-10 z-30 flex gap-3">
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="w-12 h-12 flex items-center justify-center rounded-full border border-white/15 bg-black/30 text-textLight hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300 backdrop-blur-md"
        >
          <ChevronLeft size={22} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="w-12 h-12 flex items-center justify-center rounded-full border border-white/15 bg-black/30 text-textLight hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300 backdrop-blur-md"
        >
          <ChevronRight size={22} />
        </motion.button>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-10 md:bottom-16 left-6 md:left-10 z-30 flex gap-3 items-center">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => { setDirection(index > current ? 1 : -1); setCurrent(index); }}
            className="h-[3px] rounded-full bg-textLight/20 overflow-hidden relative"
            animate={{ width: index === current ? 56 : 8 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === current && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 7, ease: 'linear' }}
                className="absolute inset-0 bg-accent origin-left rounded-full"
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-textMuted/50 font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} className="text-accent/60" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSlider;
