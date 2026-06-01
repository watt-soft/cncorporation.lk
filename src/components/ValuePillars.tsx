import { ShieldCheck, Recycle, Globe2 } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';

const pillars = [
  {
    id: 1,
    title: 'Japan Technology',
    description: "Precision engineering and unmatched durability from the world's leading manufacturing hub.",
    icon: <ShieldCheck size={36} className="text-accent" />,
    stat: 50,
    statSuffix: '+',
    statLabel: 'Machines Imported',
    ringColor: 'stroke-accent',
  },
  {
    id: 2,
    title: 'Eco Mission',
    description: 'Committed to sustainable commerce and turning waste into valuable environmental resources.',
    icon: <Recycle size={36} className="text-eco" />,
    stat: 100,
    statSuffix: '%',
    statLabel: 'Green Focus',
    ringColor: 'stroke-eco',
  },
  {
    id: 3,
    title: 'Sri Lanka Expertise',
    description: 'Deep local market understanding combined with seamless global logistics and support.',
    icon: <Globe2 size={36} className="text-accent" />,
    stat: 15,
    statSuffix: '+',
    statLabel: 'Years Experience',
    ringColor: 'stroke-accent',
  }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.92 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// Circular progress ring component
const ProgressRing = ({ progress, className }: { progress: number; className: string }) => {
  const circumference = 2 * Math.PI * 38;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width="96" height="96" className="absolute top-0 left-0">
      <circle
        cx="48"
        cy="48"
        r="38"
        fill="none"
        strokeWidth="2"
        className="stroke-gray-800"
      />
      <motion.circle
        cx="48"
        cy="48"
        r="38"
        fill="none"
        strokeWidth="2"
        className={className}
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        whileInView={{ strokeDashoffset: offset }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        transform="rotate(-90 48 48)"
      />
    </svg>
  );
};

const ValuePillars = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      {pillars.map((pillar, index) => (
        <motion.div
          key={pillar.id}
          variants={cardVariants}
          className="glass-card p-8 rounded-2xl flex flex-col items-center text-center hover:border-accent/40 transition-all duration-500 group relative overflow-hidden"
        >
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Connecting line (desktop) */}
          {index < pillars.length - 1 && (
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-8 h-px border-t border-dashed border-gray-700 z-20" />
          )}

          {/* Icon with progress ring */}
          <div className="relative w-24 h-24 flex items-center justify-center mb-6 z-10">
            <ProgressRing
              progress={pillar.stat > 100 ? 100 : pillar.stat}
              className={pillar.ringColor}
            />
            <motion.div
              className="w-16 h-16 rounded-full bg-surface/80 flex items-center justify-center shadow-lg shadow-black/30"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {pillar.icon}
            </motion.div>
          </div>

          {/* Animated stat counter */}
          <AnimatedCounter
            target={pillar.stat}
            suffix={pillar.statSuffix}
            duration={2}
            className="text-4xl font-extrabold text-accent mb-1 relative z-10 drop-shadow-[0_0_15px_rgba(244,197,27,0.3)]"
          />
          <p className="text-textMuted text-xs uppercase tracking-widest mb-5 relative z-10">{pillar.statLabel}</p>

          <h4 className="text-xl font-bold text-textLight mb-4 relative z-10 group-hover:text-accent transition-colors">{pillar.title}</h4>
          <p className="text-textMuted text-sm leading-relaxed relative z-10">
            {pillar.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ValuePillars;
