import { Link } from "react-scroll";
import {
  FaHome,
  FaGraduationCap,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

const navItems = [
  {
    id: "home",
    label: "Home",
    icon: <FaHome />,
  },
  {
    id: "education",
    label: "Education",
    icon: <FaGraduationCap />,
  },
  {
    id: "projects",
    label: "Projects",
    icon: <FaProjectDiagram />,
  },
  {
    id: "contact",
    label: "Contact",
    icon: <FaEnvelope />,
  },
];

const Sidebar = () => {
  return (
    <aside className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-50">
      <div className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl py-6 px-3 flex flex-col items-center gap-6 shadow-[0_0_25px_rgba(34,211,238,.12)]">

        {/* Logo */}
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={200}
          offset={-70}
          className="cursor-pointer"
        >
          <div className="w-12 h-12 rounded-full bg-cyan-400 text-black flex items-center justify-center font-bold text-lg shadow-lg hover:scale-110 transition">
            SP
          </div>
        </Link>

        {/* Navigation */}
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.id}
            spy={true}
            smooth={false}
            // duration={200}
            offset={-70}
            activeClass="active-link"
            className="group relative cursor-pointer transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl border border-transparent flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300">
              <span className="text-xl">{item.icon}</span>
            </div>

            {/* Tooltip */}
            <span className="absolute left-16 top-1/2 -translate-y-1/2 bg-[#0b1220] border border-cyan-500/30 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;