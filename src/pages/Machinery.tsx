import ProductCard from '../components/ProductCard';
import { machineryData } from '../data/machineryData';
import { motion } from 'framer-motion';
import ParticleField from '../components/ParticleField';
import { getAssetPath } from '../utils/assetPath';

const Machinery = () => {
  const vehicles = machineryData.filter((m) => m.category === 'Vehicle');

  return (
    <div className="bg-primary min-h-screen relative overflow-hidden">
      <div className="relative h-[520px] flex items-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <img
            src={getAssetPath('/vehicle_import_banner.jpeg')}
            alt="Commercial Vehicle Import"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/30" />
        </motion.div>

        <ParticleField particleCount={20} color="244, 197, 27" maxSize={1.5} speed={0.14} />

        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-6">
              <span>Home</span>
              <span>/</span>
              <span>Vehicle Machinery</span>
            </div>
            <div className="h-1 w-24 bg-accent mb-6 rounded-full shadow-[0_0_10px_rgba(244,197,27,0.3)]" />
            <h1 className="text-4xl md:text-6xl font-bold text-textLight leading-tight mb-6">
              Import Vehical <span className="text-accent"> & Machinery</span>
            </h1>
            <p className="text-lg md:text-xl text-textMuted max-w-3xl leading-relaxed">
              We source and deliver reliable Japanese commercial vehicles with the same import expertise and after-sales support that powers our industrial machinery business.
            </p>
          </motion.div>
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
                id={vehicle.id}
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
  );
};

export default Machinery;
