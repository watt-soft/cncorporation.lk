import { ArrowRight, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  title: string;
  image: string;
  category: string;
  description: string;
  features?: string[];
  index?: number;
}

const ProductCard = ({ id, title, image, category, description, features, index = 0 }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10 }}
      className="group bg-surface/80 rounded-2xl overflow-hidden border border-gray-800/60 hover:border-accent/50 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_30px_rgba(244,197,27,0.08)] flex flex-col h-full"
    >
      <Link to={`/import/${id}`} className="flex flex-col h-full cursor-pointer">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          {/* Category badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: 'spring' }}
            className="absolute top-4 left-4 z-20 bg-accent text-primary text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider rounded-full shadow-lg"
          >
            {category}
          </motion.div>

          {/* Image with zoom on hover */}
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent opacity-70" />

          {/* Hover overlay with CTA */}
          <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-10">
            <div className="flex items-center gap-2 text-accent font-semibold text-sm border border-accent/50 px-5 py-2.5 rounded-full scale-95 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
              <Eye size={16} />
              View Details
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-2xl font-bold text-textLight mb-3 group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="text-textMuted text-sm mb-6 flex-grow leading-relaxed">
            {description}
          </p>

          {features && features.length > 0 && (
            <ul className="mb-6 space-y-2.5">
              {features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center text-sm text-gray-300"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3 flex-shrink-0 shadow-[0_0_6px_rgba(244,197,27,0.5)]" />
                  {feature}
                </li>
              ))}
            </ul>
          )}

          <div className="flex items-center text-accent font-semibold text-sm gap-2 mt-auto w-fit uppercase tracking-wider group-hover:text-yellow-400 transition-colors">
            View Full Details
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowRight size={16} />
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
