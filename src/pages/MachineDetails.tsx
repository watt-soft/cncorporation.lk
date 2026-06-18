import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { machineryData } from '../data/machineryData';
import ParticleField from '../components/ParticleField';

const MachineDetails = () => {
  const { id } = useParams<{ id: string }>();
  const machine = machineryData.find(m => m.id === id);

  if (!machine) {
    return (
      <div className="bg-primary min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-textLight mb-4">Machine Not Found</h1>
          <Link to="/import" className="text-accent hover:underline flex items-center justify-center gap-2">
            <ArrowLeft size={16} /> Back to Import Machinery
          </Link>
        </div>
      </div>
    );
  }

  const { details } = machine;

  return (
    <div className="bg-primary min-h-screen relative overflow-hidden pb-24">
      {/* Hero Banner */}
      <div className="relative h-[550px] md:h-[600px] flex items-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <img
            src={details?.heroImage || machine.image}
            alt={machine.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-primary/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/40" />
        </motion.div>

        <ParticleField particleCount={15} color="244, 197, 27" maxSize={1.5} speed={0.15} />

        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Link to="/import" className="inline-flex items-center gap-2 text-textMuted hover:text-accent transition-colors mb-6 text-sm tracking-widest uppercase">
              <ArrowLeft size={16} /> Back to Machinery
            </Link>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-1 bg-accent mb-6 rounded-full shadow-[0_0_10px_rgba(244,197,27,0.3)]"
            />
            
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-bold uppercase tracking-widest mb-4"
            >
              {machine.category}
            </motion.span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-textLight mb-6 tracking-tight">
              {machine.name}
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Overview Section */}
        {details?.overview ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-12 rounded-2xl -mt-16 relative mb-16 shadow-[0_30px_60px_rgba(0,0,0,0.5)] border-accent/20"
          >
            <h2 className="text-2xl font-bold text-textLight mb-4">Overview</h2>
            <p className="text-textMuted text-lg leading-relaxed">{details.overview}</p>
          </motion.div>
        ) : (
          <div className="pt-16" />
        )}

        {/* Key Benefits Grid */}
        {details?.keyBenefits && details.keyBenefits.length > 0 && (
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-textLight mb-8 flex items-center gap-4">
              Key Features & Benefits
              <div className="h-px bg-gray-800 flex-grow" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {details.keyBenefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="glass-card p-6 rounded-xl hover:border-accent/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 border border-accent/20">
                    <CheckCircle2 className="text-accent" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-textLight mb-3">{benefit.title}</h3>
                  <p className="text-textMuted text-sm leading-relaxed">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Product Image & Diagram Side-by-Side */}
        {details?.diagramImage && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-textLight mb-8 flex items-center gap-4">
              Product & System Diagram
              <div className="h-px bg-gray-800 flex-grow" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Machine Product Image */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-3 rounded-2xl border-accent/20 bg-white/5 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              >
                <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                  <img 
                    src={machine.image} 
                    alt={machine.name} 
                    loading="lazy"
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <span className="text-white font-semibold text-sm">{machine.name}</span>
                  </div>
                </div>
              </motion.div>
              {/* System Diagram */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-3 rounded-2xl border-accent/20 bg-white/5 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              >
                <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                  <img 
                    src={details.diagramImage} 
                    alt={`${machine.name} System Diagram`} 
                    loading="lazy"
                    className="w-full h-full object-contain bg-white/95 rounded-xl p-2"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <span className="text-white font-semibold text-sm">System Diagram</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Processing Steps */}
          {details?.processingSteps && details.processingSteps.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-textLight mb-8">How It Works</h2>
              <div className="space-y-8 relative">
                <div className="absolute left-6 top-8 bottom-8 w-px bg-gray-800" />
                {details.processingSteps.map((step, i) => (
                  <div key={i} className="flex gap-6 relative">
                    <div className="w-12 h-12 rounded-full bg-surface border-2 border-accent flex items-center justify-center text-accent font-bold flex-shrink-0 z-10 shadow-[0_0_15px_rgba(244,197,27,0.2)]">
                      {step.step}
                    </div>
                    <div className="pt-2">
                      <h3 className="text-xl font-bold text-textLight mb-2">{step.title}</h3>
                      <p className="text-textMuted text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Processable vs Non-Processable */}
          {(details?.processableItems || details?.nonProcessableItems) && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-textLight mb-8">Material Guidelines</h2>
              
              {details?.processableItems && (
                <div className="glass-card p-6 rounded-xl border-green-900/30">
                  <h3 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
                    <CheckCircle2 size={20} /> Can Be Processed
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {details.processableItems.map((item, i) => (
                      <span key={i} className="px-3 py-1 bg-green-900/20 text-green-100 text-sm rounded-full border border-green-900/50">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {details?.nonProcessableItems && (
                <div className="glass-card p-6 rounded-xl border-red-900/30">
                  <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
                    <XCircle size={20} /> Cannot Be Processed
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {details.nonProcessableItems.map((item, i) => (
                      <span key={i} className="px-3 py-1 bg-red-900/20 text-red-100 text-sm rounded-full border border-red-900/50">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>

        {/* Target Facilities & Options */}
        {(details?.targetFacilities || details?.systemOptions) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {details?.targetFacilities && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-xl"
              >
                <h3 className="text-xl font-bold text-textLight mb-6">Target Facilities & Applications</h3>
                <ul className="space-y-3">
                  {details.targetFacilities.map((facility, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                      <ArrowRight className="text-accent flex-shrink-0 mt-0.5" size={16} />
                      {facility}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
            
            {details?.systemOptions && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-card p-8 rounded-xl"
              >
                <h3 className="text-xl font-bold text-textLight mb-6">Available System Options</h3>
                <ul className="space-y-3">
                  {details.systemOptions.map((option, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {option}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        )}

        {/* Specifications Table */}
        {details?.specificationsTable && details.specificationsTable.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-textLight mb-8 flex items-center gap-4">
              Technical Specifications
              <div className="h-px bg-gray-800 flex-grow" />
            </h2>
            <div className="overflow-x-auto glass-card rounded-xl border border-gray-800">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface border-b border-gray-800">
                    <th className="p-4 text-sm font-bold text-textLight uppercase tracking-wider">Model</th>
                    <th className="p-4 text-sm font-bold text-textLight uppercase tracking-wider">Dimensions (W x D x H)</th>
                    <th className="p-4 text-sm font-bold text-textLight uppercase tracking-wider">Power Supply</th>
                    <th className="p-4 text-sm font-bold text-textLight uppercase tracking-wider">Max Power</th>
                    <th className="p-4 text-sm font-bold text-textLight uppercase tracking-wider">Processing Vol (day)</th>
                    <th className="p-4 text-sm font-bold text-textLight uppercase tracking-wider">Weight</th>
                  </tr>
                </thead>
                <tbody>
                  {details.specificationsTable.map((spec, i) => (
                    <tr key={i} className="border-b border-gray-800/50 hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 text-sm text-accent font-semibold">{spec.model}</td>
                      <td className="p-4 text-sm text-gray-300">{spec.dimensions}</td>
                      <td className="p-4 text-sm text-gray-300">{spec.powerSupply}</td>
                      <td className="p-4 text-sm text-gray-300">{spec.maxPower}</td>
                      <td className="p-4 text-sm text-gray-300">{spec.processingVolume}</td>
                      <td className="p-4 text-sm text-gray-300">{spec.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
};

export default MachineDetails;
