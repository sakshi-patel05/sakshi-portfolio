import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";
import SkillCard from "../components/ui/SkillCard";
import { skillCategories } from "../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-6 lg:px-20"
    >
      <SectionTitle
        title="My Skills"
        subtitle="Technologies I Work With"
      />

      <div className="space-y-14">

        {skillCategories.map((category) => (

          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >

            <h3 className="text-2xl font-bold text-cyan-400 mb-8">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

              {category.skills.map((skill) => (

                <SkillCard
                  key={skill.name}
                  Icon={skill.icon}
                  name={skill.name}
                />

              ))}

            </div>

          </motion.div>

        ))}

      </div>
    </section>
  );
};

export default Skills;