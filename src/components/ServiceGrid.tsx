import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Factory, Leaf, Globe, Car, ArrowRight } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { servicesData } from '../data/servicesData';
import clsx from 'clsx';
import { getAssetPath } from '../utils/assetPath';

const iconMap: Record<string, React.ReactNode> = {
  Factory: <Factory size={32} />,
  Leaf: <Leaf size={32} />,
  Globe: <Globe size={32} />,
  Car: <Car size={32} />,
};

const bgImages: Record<string, string> = {
  s1: getAssetPath('/Industrial_recycling_machine_reveal_202606162256.jpeg'),
  s2: getAssetPath('/export_product_hero.jpeg'),
  s3: getAssetPath('/visa_hero.jpeg'),
  s4: getAssetPath('/import_vehile.jpeg'),
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.92 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const serviceDescriptions: Record<string, string> = {
  s1: 'Direct imports of high-efficiency Japanese recycling and waste-processing machinery, designed for modern industrial sustainability.',
  s2: "Premium coco peat, coir fibre, and organic agricultural products sourced from Sri Lanka's finest crops for global commercial partners.",
  s3: 'End-to-end guidance, documentation, and visa processing services for students and skilled professionals seeking career pathways abroad.',
  s4: 'Precision-engineered Japanese commercial utility vehicles, heavy fleets, and eco-friendly vehicles imported with absolute trust.',
};

// 3D Tilt card wrapper
const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ServiceGrid = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full"
    >
      {servicesData.map((service) => {
        const colSpan =
          service.priority === 'high' ? 'md:col-span-12 lg:col-span-8' :
          service.priority === 'medium' ? 'md:col-span-12 lg:col-span-4' :
          'md:col-span-6 lg:col-span-6';

        const isHigh = service.priority === 'high';

        return (
          <motion.div
            key={service.id}
            variants={cardVariants}
            className={clsx('flex', colSpan)}
          >
            <TiltCard className="w-full">
              <Link
                to={service.path}
                className={clsx(
                  'group relative overflow-hidden rounded-xl border border-gray-800/60 bg-primary flex flex-col justify-between transition-all duration-500 hover:border-accent/60 w-full',
                  isHigh ? 'min-h-[420px] p-8 md:p-10' : 'min-h-[320px] p-6 md:p-8'
                )}
              >
                {/* Background image with overlay */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={bgImages[service.id]}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-700 scale-110 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/80" />
                </div>

                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 z-0" />

                {/* Animated corner accents */}
                <span className="absolute top-0 left-0 w-6 h-[1px] bg-accent/30 group-hover:bg-accent group-hover:w-12 transition-all duration-500 z-10" />
                <span className="absolute top-0 left-0 w-[1px] h-6 bg-accent/30 group-hover:bg-accent group-hover:h-12 transition-all duration-500 z-10" />
                <span className="absolute bottom-0 right-0 w-6 h-[1px] bg-accent/30 group-hover:bg-accent group-hover:w-12 transition-all duration-500 z-10" />
                <span className="absolute bottom-0 right-0 w-[1px] h-6 bg-accent/30 group-hover:bg-accent group-hover:h-12 transition-all duration-500 z-10" />

                {/* Glow orb */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/0 group-hover:bg-accent/10 rounded-full blur-3xl transition-all duration-700 z-0" />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Priority badge for high */}
                  {isHigh && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, type: 'spring' }}
                      className="absolute top-0 right-0 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-[10px] uppercase tracking-wider text-accent font-bold"
                    >
                      Flagship
                    </motion.div>
                  )}

                  {/* Icon */}
                  <motion.div
                    className={clsx(
                      'inline-flex items-center justify-center rounded-xl border border-gray-700/50 bg-primary/80 text-accent mb-6 transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-primary group-hover:shadow-[0_0_25px_rgba(244,197,27,0.3)]',
                      isHigh ? 'w-16 h-16' : 'w-14 h-14'
                    )}
                  >
                    {iconMap[service.icon]}
                  </motion.div>

                  {/* Title */}
                  <h3 className={clsx(
                    'font-bold text-textLight group-hover:text-accent transition-colors mb-3 tracking-tight',
                    isHigh ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
                  )}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-textMuted text-sm leading-relaxed max-w-xl group-hover:text-textLight/80 transition-colors duration-300">
                    {serviceDescriptions[service.id]}
                  </p>
                </div>

                {/* CTA Footer */}
                <div className="relative z-10 flex items-center text-accent font-bold text-xs uppercase tracking-widest gap-2 transition-all duration-300 group-hover:gap-4 mt-8 w-fit">
                  Explore Business Sector
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8 }}
                  >
                    <ArrowRight size={14} />
                  </motion.span>
                </div>
              </Link>
            </TiltCard>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default ServiceGrid;
