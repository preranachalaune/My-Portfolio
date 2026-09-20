function Resume() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Git & GitHub",
    "Responsive Design",
    "VS Code",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white pt-28 pb-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 p-7 sm:p-10 md:p-12 shadow-2xl">

          <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">

            <div>
              <p className="text-indigo-400 font-semibold tracking-widest text-sm uppercase mb-3">
                Resume
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                Prerana Chalaune
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 mt-4">
                BIT Student
                <span className="text-indigo-400 mx-2">•</span>
                Aspiring Frontend Developer
              </p>

              <p className="text-slate-400 leading-7 mt-5 max-w-2xl">
                Motivated Bachelor of Information Technology student
                passionate about frontend development, modern UI design,
                responsive websites and creating user-friendly web
                experiences.
              </p>
            </div>

            <div className="shrink-0">
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-indigo-500/60 shadow-xl shadow-indigo-950/40">
                <img
                  src="/profile.jpeg"
                  alt="Prerana Chalaune"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </section>


        {/* Contact Info */}
        <section className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-indigo-500/60 transition">
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Location
            </p>
            <p className="text-slate-200 mt-2 font-medium">
              Kathmandu, Nepal
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-indigo-500/60 transition">
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Education
            </p>
            <p className="text-slate-200 mt-2 font-medium">
              Bachelor in Information Technology
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-indigo-500/60 transition">
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Focus
            </p>
            <p className="text-slate-200 mt-2 font-medium">
              Frontend Development
            </p>
          </div>

        </section>


        {/* About */}
        <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/50 p-7 sm:p-9">

          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-1 rounded-full bg-indigo-500"></span>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Profile
            </h2>
          </div>

          <p className="text-slate-400 leading-8">
            I am a Bachelor of Information Technology student with an
            interest in frontend development. I enjoy building clean,
            responsive and modern web interfaces using technologies such
            as HTML, CSS, JavaScript, React.js and Tailwind CSS. I am
            continuously improving my technical skills through practical
            projects and real-world development.
          </p>

        </section>


        {/* Education */}
        <section className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/50 p-7 sm:p-9">

          <div className="flex items-center gap-3 mb-8">
            <span className="w-10 h-1 rounded-full bg-indigo-500"></span>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Education
            </h2>
          </div>

          <div className="relative pl-7 border-l-2 border-indigo-500/50">

            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-slate-950"></div>

            <h3 className="text-xl font-semibold">
              Bachelor in Information Technology (BIT)
            </h3>

            <p className="text-indigo-400 mt-2 font-medium">
              Lincoln University affiliated program
            </p>

            <p className="text-slate-500 mt-2">
              Currently pursuing
            </p>

          </div>

        </section>


        {/* Skills */}
        <section className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/50 p-7 sm:p-9">

          <div className="flex items-center gap-3 mb-8">
            <span className="w-10 h-1 rounded-full bg-indigo-500"></span>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Technical Skills
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

            {skills.map((skill) => (
              <div
                key={skill}
                className="group rounded-xl border border-slate-700 bg-slate-800/50 p-4 text-center hover:border-indigo-500 hover:bg-indigo-500/10 transition duration-300"
              >
                <p className="text-slate-300 group-hover:text-indigo-300 font-medium transition">
                  {skill}
                </p>
              </div>
            ))}

          </div>

        </section>


        {/* Projects */}
        <section className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/50 p-7 sm:p-9">

          <div className="flex items-center gap-3 mb-8">
            <span className="w-10 h-1 rounded-full bg-indigo-500"></span>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">

            {/* Project 1 */}
            <div className="group rounded-2xl border border-slate-700 bg-slate-800/40 p-6 hover:border-indigo-500/70 hover:-translate-y-1 transition duration-300">

              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold">
                  StayNest
                </h3>

                <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  React
                </span>
              </div>

              <p className="text-slate-400 leading-7 mt-4">
                Hotel room booking website designed with a modern user
                interface and booking-related features.
              </p>

              <p className="text-sm text-indigo-400 mt-5">
                React.js • Tailwind CSS • JavaScript
              </p>

            </div>


            {/* Project 2 */}
            <div className="group rounded-2xl border border-slate-700 bg-slate-800/40 p-6 hover:border-indigo-500/70 hover:-translate-y-1 transition duration-300">

              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold">
                  Doctor Appointment System
                </h3>

                <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  Web App
                </span>
              </div>

              <p className="text-slate-400 leading-7 mt-4">
                Web application designed to manage doctor and patient
                appointment-related activities.
              </p>

              <p className="text-sm text-indigo-400 mt-5">
                React.js • JavaScript • CSS
              </p>

            </div>

          </div>

        </section>


        {/* Career Objective */}
        <section className="mt-8 rounded-3xl border border-slate-800 bg-gradient-to-r from-indigo-950/30 to-slate-900/50 p-7 sm:p-9">

          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-1 rounded-full bg-indigo-500"></span>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Career Objective
            </h2>
          </div>

          <p className="text-slate-400 leading-8">
            To strengthen my skills in web development, gain practical
            experience through real-world projects and internships, and
            grow as a professional in the field of Information Technology.
          </p>

        </section>


        {/* GitHub */}
        <section className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/50 p-7 sm:p-9">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

            <div>
              <h2 className="text-xl font-semibold">
                Online Portfolio
              </h2>

              <p className="text-slate-500 mt-2">
                GitHub profile and development projects
              </p>
            </div>

            <a
              href="https://github.com/preranachalaune"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition font-semibold"
            >
              GitHub ↗
            </a>

          </div>

        </section>


        {/* Print Button */}
        <div className="flex justify-center mt-10">

          <button
            onClick={() => window.print()}
            className="px-8 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 hover:scale-105 transition duration-300 font-semibold shadow-lg shadow-indigo-950/40"
          >
            Download / Print Resume
          </button>

        </div>

      </div>
    </main>
  );
}

export default Resume;