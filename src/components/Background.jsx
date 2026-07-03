import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -100, 80, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
        className="absolute w-96 h-96 bg-cyan-500/20 blur-[130px] rounded-full top-20 left-20"
      />

      <motion.div
        animate={{
          x: [0, -120, 100, 0],
          y: [0, 100, -50, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
        }}
        className="absolute w-[500px] h-[500px] bg-blue-700/20 blur-[150px] rounded-full bottom-10 right-10"
      />
    </div>
  );
};

export default Background;