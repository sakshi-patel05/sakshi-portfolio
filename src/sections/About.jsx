import { motion } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";

const About = () => {
  return (
    <section className="py-24 px-6 lg:px-20" id="about">
      <SectionTitle title="About Me" subtitle="Get To Know Me" />

      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 shadow-[0_0_25px_rgba(0,255,255,0.08)]"
        >
          <h3 className="text-3xl font-bold text-cyan-400 mb-6">
            Aspiring Full Stack Developer
          </h3>

          <p className="text-gray-300 leading-8 mb-5">
            Hi, I'm <span className="text-cyan-400 font-semibold">Sakshi Patel</span>,
            a BCA student with a passion for building modern, responsive and
            user-friendly web applications.
          </p>

          <p className="text-gray-300 leading-8 mb-5">
            Currently, I'm focusing on mastering
            <span className="text-cyan-400 font-semibold">
              {" "}React, JavaScript and Tailwind CSS
            </span>
            while expanding my skills in
            <span className="text-cyan-400 font-semibold">
              {" "}Node.js, Express.js and MongoDB
            </span>
            to become a professional MERN Stack Developer.
          </p>

          <p className="text-gray-300 leading-8">
            I enjoy turning ideas into interactive digital experiences,
            continuously learning new technologies, and solving real-world
            problems through clean and efficient code.
          </p>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-6"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 text-center hover:scale-105 transition duration-300">
            <h2 className="text-4xl font-bold text-cyan-400">2025</h2>
            <p className="text-gray-400 mt-2">Started Web Development</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 text-center hover:scale-105 transition duration-300">
            <h2 className="text-4xl font-bold text-cyan-400">MERN</h2>
            <p className="text-gray-400 mt-2">Learning Full Stack</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 text-center hover:scale-105 transition duration-300">
            <h2 className="text-4xl font-bold text-cyan-400">02+</h2>
            <p className="text-gray-400 mt-2">Projects Completed</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 text-center hover:scale-105 transition duration-300">
            <h2 className="text-4xl font-bold text-cyan-400">∞</h2>
            <p className="text-gray-400 mt-2">Always Learning</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;