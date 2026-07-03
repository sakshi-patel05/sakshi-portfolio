import { motion } from "framer-motion";

const TimelineCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -60 : 60,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative"
    >
      <div className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,.2)] transition-all">

        <span className="text-cyan-400 font-semibold">
          {item.year}
        </span>

        <h3 className="text-2xl font-bold mt-2">
          {item.title}
        </h3>

        <h4 className="text-gray-400 mt-1">
          {item.institute}
        </h4>

        <p className="text-gray-300 mt-4 leading-7">
          {item.description}
        </p>

      </div>
    </motion.div>
  );
};

export default TimelineCard;