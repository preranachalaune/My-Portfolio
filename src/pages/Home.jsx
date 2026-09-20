import { FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT SIDE */}
        <div className="text-center md:text-left">

          <p className="text-indigo-400 font-medium text-lg mb-4">
            Hello, I'm 👋
          </p>

          {/* Full Name */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Prerana Chalaune
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold text-slate-300 mb-6">
            BIT Student & Aspiring Frontend Developer
          </h2>

          <p className="text-slate-400 text-lg leading-8 max-w-2xl mb-8">
            I am a Bachelor of Information Technology student passionate
            about creating modern, responsive and user-friendly websites
            and applications using modern web technologies.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">

            <Link
              to="/projects"
              className="px-7 py-3 rounded-full bg-indigo-600
              hover:bg-indigo-500 hover:scale-105
              transition duration-300 font-medium"
            >
              View My Projects
            </Link>

            <Link
              to="/contact"
              className="px-7 py-3 rounded-full border border-slate-600
              hover:border-indigo-400 hover:text-indigo-400
              hover:scale-105 transition duration-300 font-medium"
            >
              Contact Me
            </Link>

          </div>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center md:justify-start gap-6 text-2xl">

            {/* GitHub */}
            <a
              href="https://github.com/preranachalaune"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Prerana GitHub"
              className="text-slate-400 hover:text-white
              hover:-translate-y-1 transition duration-300"
            >
              <FaGithub />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/prerna_xettri231/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Prerana Instagram"
              className="text-slate-400 hover:text-pink-400
              hover:-translate-y-1 transition duration-300"
            >
              <FaInstagram />
            </a>

          </div>

        </div>

        {/* RIGHT SIDE - PROFILE */}
        <div className="flex justify-center">

          <div className="relative">

            {/* Outer Glow */}
            <div className="absolute inset-0 bg-indigo-600 rounded-full blur-2xl opacity-30"></div>

            {/* Image */}
            <div className="relative w-64 h-64 md:w-80 md:h-80
              rounded-full overflow-hidden border-4 border-indigo-500
              shadow-2xl"
            >
              <img
                src="/profile.jpeg"
                alt="Prerana Chalaune Profile"
                className="w-full h-full object-cover
                hover:scale-105 transition duration-500"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Home;