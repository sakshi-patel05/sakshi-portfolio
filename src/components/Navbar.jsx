import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Top Navbar */}
    <header className="fixed top-0 left-0 right-0 z-[999] lg:hidden bg-[#070B14]/90 backdrop-blur-lg border-b border-cyan-500/20">
  <div className="max-w-screen-xl mx-auto flex items-center justify-between px-5 py-4">
    <h1 className="text-cyan-400 text-xl font-bold">
      Sakshi
    </h1>

    <button
      onClick={() => setOpen(!open)}
      className="flex items-center justify-center w-11 h-11 rounded-lg hover:bg-cyan-500/10 transition"
    >
      {open ? (
        <FaTimes className="text-cyan-400 text-2xl" />
      ) : (
        <FaBars className="text-cyan-400 text-2xl" />
      )}
    </button>
  </div>
</header>
      {/* Overlay */}
      {open && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-[#070B14] border-l border-cyan-500/20 z-50 transform transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >

        <div className="flex justify-between items-center p-6 border-b border-cyan-500/20">

          <h2 className="text-xl font-bold text-cyan-400">
            Menu
          </h2>

          <button
            onClick={closeMenu}
            className="text-2xl text-cyan-400"
          >
            <FaTimes />
          </button>

        </div>

        <nav className="flex flex-col p-6 gap-6 text-lg">

  <a
    href="#home"
    onClick={closeMenu}
    className="cursor-pointer hover:text-cyan-400 transition"
  >
    🏠 Home
  </a>

  <a
    href="#education"
    onClick={closeMenu}
    className="cursor-pointer hover:text-cyan-400 transition"
  >
    🎓 Education
  </a>

  <a
    href="#projects"
    onClick={closeMenu}
    className="cursor-pointer hover:text-cyan-400 transition"
  >
    🚀 Projects
  </a>

  <a
    href="#contact"
    onClick={closeMenu}
    className="cursor-pointer hover:text-cyan-400 transition"
  >
    📞 Contact
  </a>

  <hr className="border-cyan-500/20" />

  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-cyan-400"
    onClick={closeMenu}
  >
    📄 View Resume
  </a>

  <a
    href="/resume.pdf"
    download
    className="hover:text-cyan-400"
    onClick={closeMenu}
  >
    ⬇ Download Resume
  </a>

</nav>
      </div>
    </>
  );
};

export default Navbar;