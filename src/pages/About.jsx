function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 py-24 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-32 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 -right-32 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10">

        {/* Section Heading */}
        <div className="text-center mb-16">

          <p className="text-indigo-400 font-medium mb-3">
            Get To Know Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About Me
          </h2>

          <div className="w-20 h-1 bg-indigo-500 mx-auto mt-5 rounded-full"></div>

        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              Hello! I'm Prerana 👋
            </h3>

            <p className="text-slate-400 text-lg leading-8">
              I am a Bachelor of Information Technology student with a
              strong interest in web development and modern technologies.
              I enjoy creating clean, responsive and user-friendly websites.
            </p>

            <p className="text-slate-400 text-lg leading-8">
              My main focus is frontend development. I have learned and
              worked with HTML, CSS, JavaScript, React and Tailwind CSS
              while building different projects and applications.
            </p>

            <p className="text-slate-400 text-lg leading-8">
              I believe in continuous learning and improving my skills
              through practical projects, experimentation and solving
              programming problems.
            </p>

            {/* Highlight */}
            <div className="pt-3">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                <span className="text-xl">✨</span>
                <span className="text-indigo-300 font-medium">
                  Always learning. Always building.
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            {/* Education */}
            <div className="group p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500 hover:-translate-y-2 transition-all duration-300">

              <div className="text-3xl mb-4 group-hover:scale-110 transition duration-300">
                🎓
              </div>

              <h4 className="text-xl font-semibold text-white mb-2">
                Education
              </h4>

              <p className="text-slate-400 leading-6">
                Bachelor of Information Technology
              </p>

            </div>

            {/* Frontend */}
            <div className="group p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500 hover:-translate-y-2 transition-all duration-300">

              <div className="text-3xl mb-4 group-hover:scale-110 transition duration-300">
                💻
              </div>

              <h4 className="text-xl font-semibold text-white mb-2">
                Frontend
              </h4>

              <p className="text-slate-400 leading-6">
                Modern & Responsive Web Development
              </p>

            </div>

            {/* Projects */}
            <div className="group p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500 hover:-translate-y-2 transition-all duration-300">

              <div className="text-3xl mb-4 group-hover:scale-110 transition duration-300">
                🚀
              </div>

              <h4 className="text-xl font-semibold text-white mb-2">
                Projects
              </h4>

              <p className="text-slate-400 leading-6">
                Learning Through Real Projects
              </p>

            </div>

            {/* Learning */}
            <div className="group p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500 hover:-translate-y-2 transition-all duration-300">

              <div className="text-3xl mb-4 group-hover:scale-110 transition duration-300">
                📚
              </div>

              <h4 className="text-xl font-semibold text-white mb-2">
                Learning
              </h4>

              <p className="text-slate-400 leading-6">
                Exploring New Technologies
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;