import HeroSlider from '../components/HeroSlider';
import ServiceGrid from '../components/ServiceGrid';
import ValuePillars from '../components/ValuePillars';
import ProductCard from '../components/ProductCard';
import AnimatedCounter from '../components/AnimatedCounter';
import ParticleField from '../components/ParticleField';
import { machineryData } from '../data/machineryData';
import { ArrowRight, Leaf, Factory, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const statsData = [
  { value: 25, suffix: '+', label: 'Years Combined', subtext: 'Industrial excellence & global trade expertise' },
  { value: 150, suffix: '+', label: 'Eco Machines', subtext: 'High-capacity Japanese systems imported' },
  { value: 100, suffix: '%', label: 'Quality Assured', subtext: 'Pre-vetted Japanese heavy equipment' },
  { value: 1200, suffix: '+', label: 'Careers Guided', subtext: 'Visa and education pathways approved' }
];

const ecoStats = [
  { icon: <Factory size={28} />, value: 500, suffix: '+', label: 'Tons Recycled', desc: 'Plastic waste processed annually' },
  { icon: <Leaf size={28} />, value: 95, suffix: '%', label: 'Waste Reduced', desc: 'Volume reduction per cycle' },
  { icon: <TrendingUp size={28} />, value: 30, suffix: '+', label: 'Partners', desc: 'Global eco-network connections' },
];

const partnerBrands = [
  { name: 'SUMITOMO', type: 'Recycling Systems' },
  { name: 'KUBOTA', type: 'Agricultural Tech' },
  { name: 'YANMAR', type: 'Precision Power' },
  { name: 'HITACHI', type: 'Heavy Eco-Machinery' },
  { name: 'PERKINS', type: 'Industrial Engines' },
  { name: 'CN LOGISTICS', type: 'Global Freight' },
  { name: 'JAPAN FOUNDATION', type: 'Visa & Language' },
];

const Home = () => {
  const featuredMachines = machineryData.slice(0, 2);

  return (
    <div className="bg-primary min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <HeroSlider />

      {/* Corporate Impact / Industrial Stats Section */}
      <section className="py-20 md:py-32 bg-secondary relative z-20 border-b border-gray-900 overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 glass-dark rounded-2xl p-6 md:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.8)] relative overflow-hidden group/card"
          >
            {/* Glass sheen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none opacity-40 transition-transform duration-1000 group-hover/card:scale-110" />
            
            {/* Ambient blurred orbs */}
            <div className="absolute -top-16 -left-16 w-40 h-40 rounded-full bg-accent/10 blur-2xl pointer-events-none group-hover/card:bg-accent/15 transition-all duration-700" />
            <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-accent/5 blur-2xl pointer-events-none" />

            {statsData.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover="hover"
                className={clsx(
                  "text-center flex flex-col items-center justify-center p-6 md:p-8 rounded-xl transition-all duration-300 relative cursor-pointer select-none",
                  "border-b border-white/5 md:border-b-0 md:border-r last:border-none last:border-b-0"
                )}
                variants={{
                  hover: {
                    y: -8,
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.1)',
                  }
                }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              >
                {/* Soft interior highlight */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-accent/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Animated Counter */}
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  duration={2.5}
                  className="text-4xl md:text-6xl font-extrabold text-accent mb-3 tracking-tight drop-shadow-[0_4px_15px_rgba(0,0,0,0.6)]"
                />

                <motion.span
                  variants={{
                    hover: { color: '#F4C51B' }
                  }}
                  className="text-xs md:text-sm uppercase tracking-widest text-textLight font-extrabold mb-2 transition-colors duration-300"
                >
                  {stat.label}
                </motion.span>

                <motion.span
                  variants={{
                    hover: { color: 'rgba(255, 255, 255, 0.9)' }
                  }}
                  className="text-[10px] md:text-xs text-textMuted max-w-[180px] leading-relaxed transition-colors duration-300"
                >
                  {stat.subtext}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        {/* Soft decorative background glow */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ repeat: Infinity, duration: 10 }}
          className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-accent blur-3xl"
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-1 bg-accent mb-6 rounded-full shadow-[0_0_10px_rgba(244,197,27,0.3)]"
            />
            <h2 className="section-title">Our Capabilities</h2>
            <p className="section-subtitle ml-0">
              Explore our core business sectors. We are dedicated to providing sustainable, high-end solutions across industries.
            </p>
          </motion.div>
          <ServiceGrid />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        {/* Animated background stripe */}
        <motion.div
          initial={{ x: '100%' }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-0 right-0 w-1/3 h-full bg-secondary/40 skew-x-12 translate-x-32"
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Why CN Corporation</h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-1 bg-accent mx-auto mt-6 mb-6 rounded-full shadow-[0_0_10px_rgba(244,197,27,0.3)]"
            />
            <p className="section-subtitle">
              Bridging the gap between world-class technology and regional demands.
            </p>
          </motion.div>
          <ValuePillars />
        </div>
      </section>

      {/* Eco Impact Section */}
      <section className="py-28 bg-secondary relative overflow-hidden">
        {/* Parallax background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Eco landscape"
            className="w-full h-full object-cover opacity-[0.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/95 to-secondary" />
        </div>

        <ParticleField particleCount={20} color="45, 122, 45" maxSize={2} speed={0.15} />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-block px-4 py-1.5 bg-eco/15 border border-eco/25 rounded-full text-eco text-xs font-bold uppercase tracking-widest mb-6"
            >
              Environmental Impact
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-bold text-textLight mb-6 tracking-tight">
              Turning Waste Into{' '}
              <span className="text-eco">Value</span>
            </h2>
            <p className="text-textMuted text-lg max-w-2xl mx-auto leading-relaxed">
              Our Japanese recycling technology transforms environmental challenges into sustainable solutions for Sri Lanka and beyond.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {ecoStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -8, borderColor: 'rgba(45, 122, 45, 0.4)' }}
                className="glass-card p-8 rounded-2xl text-center transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)]"
              >
                <motion.div
                  className="w-14 h-14 rounded-xl bg-eco/10 flex items-center justify-center mx-auto mb-5 text-eco"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  {stat.icon}
                </motion.div>
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  duration={2}
                  className="text-4xl font-extrabold text-eco mb-1 block"
                />
                <p className="text-textLight font-bold text-sm uppercase tracking-wider mb-2">{stat.label}</p>
                <p className="text-textMuted text-xs">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Machine Spotlight */}
      <section className="py-24 bg-primary border-t border-gray-800/50 relative overflow-hidden">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full border border-accent/5"
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-1 bg-accent mb-6 rounded-full shadow-[0_0_10px_rgba(244,197,27,0.3)]"
              />
              <h2 className="section-title">Flagship Machinery</h2>
              <p className="section-subtitle ml-0 max-w-xl">
                Discover our top-performing Japanese recycling machines, engineered for efficiency and environmental impact.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link to="/import" className="btn-outline inline-flex items-center gap-2 flex-shrink-0">
                View All Equipment <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredMachines.map((machine, i) => (
              <ProductCard
                key={machine.id}
                title={machine.name}
                category={machine.category}
                image={machine.image}
                description={machine.shortDesc}
                features={machine.features.slice(0, 3)}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Brands & Partners Showcase Section */}
      <section className="py-24 bg-secondary border-t border-white/5 overflow-hidden relative">
        {/* Subtle center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 mb-12 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-accent font-bold mb-4"
          >
            Trusted Alliances & Brands
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-textLight tracking-tight"
          >
            Japan Quality Standards · Global Sustainable Network
          </motion.h3>
        </div>

        {/* Infinite Marquee Track */}
        <div className="relative w-full flex items-center justify-start overflow-hidden py-6 select-none">
          {/* Edge fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />

          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-20 md:gap-28 px-10">
            {[...partnerBrands, ...partnerBrands].map((brand, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center flex-shrink-0 group cursor-pointer">
                <span className="text-xl md:text-2xl font-black text-textLight/25 group-hover:text-accent transition-all duration-300 tracking-wider">
                  {brand.name}
                </span>
                <span className="text-[9px] uppercase tracking-widest text-textMuted/40 group-hover:text-textLight/60 transition-all duration-300 mt-1.5">
                  {brand.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
