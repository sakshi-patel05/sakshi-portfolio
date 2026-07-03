import { motion } from "framer-motion";

const SkillCard = ({ Icon, name }) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.05,
      }}
      transition={{ duration: .3 }}
      className="
      bg-white/5
      border
      border-cyan-500/20
      backdrop-blur-xl
      rounded-2xl
      p-6
      flex
      flex-col
      items-center
      justify-center
      gap-4
      hover:border-cyan-400
      hover:shadow-[0_0_30px_rgba(34,211,238,.25)]
      transition-all
      "
    >
      <Icon className="text-5xl text-cyan-400" />

      <h3 className="font-semibold">
        {name}
      </h3>
    </motion.div>
  );
};

export default SkillCard;