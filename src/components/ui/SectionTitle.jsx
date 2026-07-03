import { motion } from "framer-motion";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-14"
    >
      <p className="uppercase tracking-[6px] text-cyan-400 text-sm mb-2">
        {subtitle}
      </p>

      <h2 className="text-4xl lg:text-5xl font-bold">
        {title}
      </h2>

      <div className="w-24 h-1 bg-cyan-400 rounded-full mx-auto mt-4"></div>
    </motion.div>
  );
};

export default SectionTitle;