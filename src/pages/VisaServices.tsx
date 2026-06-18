import { FileText, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ParticleField from '../components/ParticleField';
import { getAssetPath } from '../utils/assetPath';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const processSteps = [
  { step: '01', title: 'Initial Consultation', desc: 'We assess your profile, goals, and eligibility for Japan visa categories.' },
  { step: '02', title: 'Document Preparation', desc: 'Our team helps compile, verify, and organize all required documentation.' },
  { step: '03', title: 'Application & Interview', desc: 'We submit your application and prepare you for any embassy interviews.' },
  { step: '04', title: 'Visa Approval', desc: 'Track your application status with our support until successful approval.' },
];

const VisaServices = () => {
  return (
    <div className="bg-primary min-h-screen relative overflow-hidden">

      {/* Hero Section */}
      <div className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <img
            src={getAssetPath('/visa_hero.jpeg')}
            alt="Japan Travel"
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
            transition={{ duration: 0.7, delay: 0.3 }}
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
              <span>Visa Services</span>
            </motion.div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="h-1 bg-accent mb-6 rounded-full shadow-[0_0_10px_rgba(244,197,27,0.3)]"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-textLight mb-6">
              Japan Visas & <br />
              <span className="text-accent">Work Permits</span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-textMuted max-w-2xl leading-relaxed"
            >
              Professional facilitation for international students and highly skilled workers seeking to build their future in Japan.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Process Timeline */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-bold uppercase tracking-widest mb-6"
            >
              How It Works
            </motion.span>
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle">A streamlined pathway from consultation to visa approval.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-accent/20 via-accent/40 to-accent/20 z-0" />

            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -8 }}
                className="glass-card p-8 rounded-2xl text-center relative z-10 transition-all duration-300 hover:border-accent/40"
              >
                <motion.div
                  className="w-12 h-12 rounded-full bg-accent text-primary font-extrabold text-lg flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(244,197,27,0.2)]"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {step.step}
                </motion.div>
                <h3 className="text-lg font-bold text-textLight mb-3">{step.title}</h3>
                <p className="text-textMuted text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >

            {/* Student Visas */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 } }}
              className="glass-card p-10 md:p-14 rounded-2xl hover:border-accent/40 transition-all duration-500 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 bg-primary/80 rounded-xl flex items-center justify-center mb-8 border border-gray-700/50 shadow-lg relative z-10 group-hover:shadow-[0_0_20px_rgba(244,197,27,0.15)]"
              >
                <FileText className="text-accent" size={32} />
              </motion.div>
              <h2 className="text-3xl font-bold text-textLight mb-6 relative z-10 group-hover:text-accent transition-colors">Student Visas</h2>
              <p className="text-textMuted mb-8 leading-relaxed relative z-10">
                We assist ambitious students in securing study visas for top educational destinations in Japan. Our experts guide you through documentation, financial proofs, and interview preparation.
              </p>
              <ul className="space-y-4 mb-10 relative z-10">
                {['University Application Support', 'Document Verification', 'Visa Interview Prep'].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3 text-sm text-gray-300"
                  >
                    <CheckCircle2 className="text-accent flex-shrink-0" size={18} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Work Permits */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 } }}
              className="glass-card p-10 md:p-14 rounded-2xl hover:border-accent/40 transition-all duration-500 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 bg-primary/80 rounded-xl flex items-center justify-center mb-8 border border-gray-700/50 shadow-lg relative z-10 group-hover:shadow-[0_0_20px_rgba(244,197,27,0.15)]"
              >
                <Briefcase className="text-accent" size={32} />
              </motion.div>
              <h2 className="text-3xl font-bold text-textLight mb-6 relative z-10 group-hover:text-accent transition-colors">Professional Work Permits</h2>
              <p className="text-textMuted mb-8 leading-relaxed relative z-10">
                For skilled professionals exploring career paths in Japan, we provide end-to-end work permit facilitation, ensuring compliance with immigration laws.
              </p>
              <ul className="space-y-4 mb-10 relative z-10">
                {['Employer Sponsorship Coordination', 'Compliance & Legal Checks', 'Pre-departure Briefings'].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3 text-sm text-gray-300"
                  >
                    <CheckCircle2 className="text-accent flex-shrink-0" size={18} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-textLight mb-6">
              Ready to Start Your <span className="text-accent">Japan Journey</span>?
            </h2>
            <p className="text-textMuted text-lg max-w-xl mx-auto mb-8">
              Get in touch with our visa specialists for a free initial consultation.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="/contact" className="btn-primary inline-flex items-center gap-2 text-lg">
                Contact Us <ArrowRight size={20} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VisaServices;
