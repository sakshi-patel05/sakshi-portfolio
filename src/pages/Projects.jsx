import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";
import ProjectCard from "../components/ui/ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 lg:px-20"
    >
      <SectionTitle
        title="Featured Projects"
        subtitle="My Work"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: .7 }}
        className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;