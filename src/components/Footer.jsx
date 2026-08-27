function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <div>
            <h2 className="text-2xl font-bold">
              Prerana<span className="text-indigo-500">.</span>
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              BIT Student & Aspiring Frontend Developer
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">

            <a
              href="#home"
              className="text-slate-400 hover:text-white transition"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-slate-400 hover:text-white transition"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-slate-400 hover:text-white transition"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-slate-400 hover:text-white transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-slate-400 hover:text-white transition"
            >
              Contact
            </a>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-slate-800 text-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Prerana. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer