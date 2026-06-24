export default function Navbar() {
  return (
    <div className="fixed top-4 left-0 right-0 flex justify-center z-50">
      <nav
        className="
        bg-black/40
        backdrop-blur-lg
        border
        border-white/10
        rounded-full
        px-6
        py-3
        shadow-lg
        "
      >
        <div className="flex items-center gap-6 text-sm md:text-base">

          <a
            href="#home"
            className="hover:text-blue-400 transition duration-300"
          >
            Home
          </a>

          <a
            href="#about"
            className="hover:text-blue-400 transition duration-300"
          >
            About
          </a>

          <a
            href="#skills"
            className="hover:text-blue-400 transition duration-300"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="hover:text-blue-400 transition duration-300"
          >
            Projects
          </a>

          <a
            href="#experience"
            className="hover:text-blue-400 transition duration-300"
          >
            Experience
          </a>

          <a
            href="#contact"
            className="hover:text-blue-400 transition duration-300"
          >
            Contact
          </a>

        </div>
      </nav>
    </div>
  );
}