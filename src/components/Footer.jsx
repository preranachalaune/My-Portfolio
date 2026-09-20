function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Main Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold">
              Prerana Chalaune
              <span className="text-indigo-500">.</span>
            </h2>

            <p className="mt-3 text-slate-400 text-sm max-w-sm">
              BIT Student & Aspiring Frontend Developer passionate
              about creating modern and user-friendly web experiences.
            </p>
          </div>

          {/* GitHub */}
          <a
            href="https://github.com/preranachalaune"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3
            rounded-lg border border-slate-700
            text-slate-300 hover:text-white
            hover:border-indigo-500 hover:bg-indigo-500/10
            transition duration-300"
          >
            <span className="font-semibold">GitHub</span>
            <span>↗</span>
          </a>

        </div>

        {/* Divider */}
        <div className="my-8 border-t border-slate-800"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Prerana Chalaune. All rights reserved.
          </p>

          <p className="text-sm text-slate-500">
            Designed & Built with React
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;