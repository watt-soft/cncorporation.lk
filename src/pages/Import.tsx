import ProductCard from '../components/ProductCard';
import { machineryData } from '../data/machineryData';
import { motion } from 'framer-motion';
import ParticleField from '../components/ParticleField';

const Import = () => {
  const plasticRecycling = machineryData.filter(m => m.category === 'Plastic Recycling');
  const foodWaste = machineryData.filter(m => m.category === 'Food Waste Recycling');
  const vehicles = machineryData.filter(m => m.category === 'Vehicle');

  return (
    <div className="bg-primary min-h-screen relative overflow-hidden">

      {/* Hero Banner */}
      <div className="relative h-[500px] flex items-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Recycling machinery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/30" />
        </motion.div>

        <ParticleField particleCount={20} color="244, 197, 27" maxSize={1.5} speed={0.15} />

        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-textMuted mb-6"
            >
              <span className="text-accent">Home</span>
              <span>/</span>
              <span>Import Machinery</span>
            </motion.div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="h-1 bg-accent mb-6 rounded-full shadow-[0_0_10px_rgba(244,197,27,0.3)]"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-textLight mb-6">
              Advanced Japanese <br/>
              <span className="text-accent">Recycling Machinery</span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl text-textMuted max-w-3xl leading-relaxed"
            >
              We supply industrial-grade recycling equipment directly imported from Japan. Built for longevity, efficiency, and a cleaner tomorrow.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-24">

        {/* Plastic Waste Solutions */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-10"
          >
            <h2 className="text-3xl font-bold text-textLight whitespace-nowrap">Plastic Waste Solutions</h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-px bg-gradient-to-r from-gray-800 to-transparent flex-grow origin-left"
            />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plasticRecycling.map((machine, i) => (
              <ProductCard
                key={machine.id}
                title={machine.name}
                category={machine.category}
                image={machine.image}
                description={machine.shortDesc}
                features={machine.features}
                index={i}
              />
            ))}
          </div>
        </div>

        {/* Food Waste Solutions */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-10"
          >
            <h2 className="text-3xl font-bold text-textLight whitespace-nowrap">Food Waste Solutions</h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-px bg-gradient-to-r from-gray-800 to-transparent flex-grow origin-left"
            />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {foodWaste.map((machine, i) => (
              <ProductCard
                key={machine.id}
                title={machine.name}
                category={machine.category}
                image={machine.image}
                description={machine.shortDesc}
                features={machine.features}
                index={i}
              />
            ))}
          </div>
        </div>

        {/* Vehicle Imports */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-2xl p-10 md:p-14 relative overflow-hidden"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-20 -right-20 w-40 h-40 border border-accent/10 rounded-full"
          />

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mb-10 relative z-10"
          >
            <h2 className="text-3xl font-bold text-textLight mb-4">Commercial Vehicle Import</h2>
            <p className="text-textMuted">
              Leveraging our import expertise, we also source and supply reliable Japanese commercial vehicles to support your operational logistics.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {vehicles.map((vehicle, i) => (
              <ProductCard
                key={vehicle.id}
                title={vehicle.name}
                category={vehicle.category}
                image={vehicle.image}
                description={vehicle.shortDesc}
                features={vehicle.features}
                index={i}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Import;
