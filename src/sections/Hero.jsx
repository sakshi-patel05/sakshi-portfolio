import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaDownload, FaEye } from "react-icons/fa";
import { profile } from "../data/profile";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-10 px-5 sm:px-8 lg:px-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center w-full">

        {/* Left Content */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <p className="uppercase tracking-[4px] md:tracking-[7px] text-cyan-400 text-xs sm:text-sm mb-4">
            Hello I'm
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>

          <div className="text-lg sm:text-2xl lg:text-3xl mt-5 text-cyan-400 font-semibold min-h-[50px]">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "MERN Stack Developer",
                2000,
                "React Developer",
                2000,
                "Backend Learner",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-300 text-sm sm:text-base leading-7 mt-6 max-w-xl mx-auto lg:mx-0">
            {profile.description}
          </p>

          {/* Buttons */}

          <div className="flex flex-col sm:flex-row gap-4 mt-8">

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl border border-cyan-400 text-cyan-400 font-semibold flex justify-center items-center gap-3 hover:bg-cyan-400 hover:text-black transition"
            >
              <FaEye />
              View Resume
            </a>

            <a
              href="/resume.pdf"
              download
              className="w-full sm:w-auto px-6 py-3 rounded-xl border border-cyan-400 text-cyan-400 font-semibold flex justify-center items-center gap-3 hover:bg-cyan-400 hover:text-black transition"
            >
              <FaDownload />
              Download Resume
            </a>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-3 gap-3 sm:gap-5 mt-10">

            {profile.stats.map((item) => (

              <div
                key={item.title}
                className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-4 text-center"
              >
                <h2 className="text-xl sm:text-3xl font-bold text-cyan-400">
                  {item.number}
                </h2>

                <p className="text-xs sm:text-sm text-gray-400 mt-2">
                  {item.title}
                </p>

              </div>

            ))}

          </div>

        </motion.div>

        {/* Right Image */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative">

            <div className="absolute -inset-4 rounded-full bg-cyan-500 blur-3xl opacity-30 animate-pulse"></div>

            <img
              src="/profile.jpg"
              alt="Sakshi Patel"
              className="relative w-64 sm:w-80 lg:w-[420px] rounded-[30px] border-4 border-cyan-400 shadow-[0_0_60px_rgba(34,211,238,.45)]"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;