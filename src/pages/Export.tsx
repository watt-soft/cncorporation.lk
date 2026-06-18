import { exportData } from '../data/exportData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import ParticleField from '../components/ParticleField';
import { getAssetPath } from '../utils/assetPath';

const Export = () => {
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
            src={getAssetPath('/export_product_hero.jpeg')}
            alt="Agricultural exports"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/30" />
        </motion.div>

        <ParticleField particleCount={15} color="45, 122, 45" maxSize={1.5} speed={0.12} />

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
              <span className="text-eco">Home</span>
              <span>/</span>
              <span>Export Products</span>
            </motion.div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="h-1 bg-eco mb-6 rounded-full shadow-[0_0_10px_rgba(45,122,45,0.3)]"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-textLight mb-6">
              Premium Sri Lankan <br/>
              <span className="text-eco">Agricultural Exports</span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl text-textMuted max-w-3xl leading-relaxed"
            >
              Harnessing the natural resources of Sri Lanka, we export high-grade coconut-based products essential for global horticulture and industrial applications.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-24">

        {/* Export Products */}
        <div className="space-y-32">
          {exportData.map((product, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
              >

                {/* Image Side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full lg:w-1/2 relative group"
                >
                  {/* Offset shadow */}
                  <motion.div
                    className="absolute inset-0 bg-eco/15 translate-x-4 translate-y-4 rounded-2xl -z-10"
                    whileHover={{ translateX: 24, translateY: 24 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  />
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[500px] object-cover rounded-2xl shadow-2xl border border-gray-800/50"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                  />
                  {/* Stat badges */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: 'spring' }}
                    className="absolute top-4 right-4 px-3 py-1.5 bg-eco/90 text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg"
                  >
                    100% Natural
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, type: 'spring' }}
                    className="absolute bottom-4 left-4 px-3 py-1.5 glass-dark text-eco text-[10px] font-bold uppercase tracking-wider rounded-full"
                  >
                    Export Grade A
                  </motion.div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="w-full lg:w-1/2"
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: 'spring' }}
                    className="inline-block px-4 py-1.5 bg-eco/15 text-eco font-bold text-xs tracking-wider uppercase rounded-full mb-6 border border-eco/25"
                  >
                    Export Product
                  </motion.div>
                  <h2 className="text-4xl md:text-5xl font-bold text-textLight mb-6">{product.name}</h2>
                  <p className="text-lg text-textMuted mb-10 leading-relaxed">
                    {product.description}
                  </p>

                  <h3 className="text-xl font-semibold text-textLight mb-6 border-b border-gray-800/50 pb-4">Key Applications</h3>
                  <ul className="space-y-4 mb-10">
                    {product.applications.map((app, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        className="flex items-start gap-4"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 + idx * 0.1, type: 'spring' }}
                        >
                          <CheckCircle2 className="text-eco mt-1 flex-shrink-0" size={20} />
                        </motion.div>
                        <span className="text-textMuted text-lg">{app}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-outline border-eco text-eco hover:bg-eco hover:text-white inline-flex items-center gap-2"
                  >
                    Inquire for Bulk Export <ArrowRight size={20} />
                  </motion.button>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Export;
