import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { profile } from "../data/profile";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-cyan-500/20 mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-10 flex flex-col md:flex-row justify-between items-center gap-6">

        <div>
          <h2 className="text-2xl font-bold text-cyan-400">
            Sakshi Patel
          </h2>

          <p className="text-gray-400 mt-2">
            Aspiring Full Stack Developer • MERN Stack Learner
          </p>
        </div>

        <div className="flex gap-5 text-2xl">
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>

          <button
            onClick={scrollTop}
            className="hover:text-cyan-400 transition"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>

      <div className="text-center border-t border-cyan-500/10 py-5 text-gray-500">
        © {new Date().getFullYear()} Sakshi Patel. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;