import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4 }}
      className="group overflow-hidden rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,.25)]"
    >
      {/* Image */}

      <div className="relative overflow-hidden h-56">

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>

      </div>

      {/* Content */}

      <div className="p-6">

        <h2 className="text-2xl font-bold mb-3">
          {project.title}
        </h2>

        <p className="text-gray-400 leading-7">
          {project.description}
        </p>

        {/* Tech */}

        <div className="flex flex-wrap gap-2 mt-5">

          {project.technologies.map((tech) => (

            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm"
            >
              {tech}
            </span>

          ))}

        </div>

        {/* Buttons */}

        <div className="flex gap-4 mt-8">

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex justify-center items-center gap-2 bg-cyan-400 text-black font-semibold py-3 rounded-xl hover:scale-105 transition"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex justify-center items-center gap-2 border border-cyan-400 text-cyan-400 py-3 rounded-xl hover:bg-cyan-400 hover:text-black transition"
          >
            <FaGithub />
            Code
          </a>

        </div>

      </div>
    </motion.div>
  );
};

export default ProjectCard;