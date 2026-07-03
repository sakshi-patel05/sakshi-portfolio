import { motion } from "framer-motion";

const ContactCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <motion.a
      href={item.link}
      target={item.title !== "Phone" && item.title !== "Email" ? "_blank" : ""}
      rel="noreferrer"
      whileHover={{ y: -8 }}
      className="flex items-center gap-5 p-6 rounded-2xl bg-white/5 border border-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,.2)] transition-all"
    >
      <div className="w-14 h-14 rounded-full bg-cyan-500/10 flex items-center justify-center">
        <Icon className="text-2xl text-cyan-400" />
      </div>

      <div>
        <h4 className="font-semibold">{item.title}</h4>
        <p className="text-gray-400 text-sm">{item.value}</p>
      </div>
    </motion.a>
  );
};

export default ContactCard;