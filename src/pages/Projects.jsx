import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Doctor Appointment System",
      description:
        "A responsive doctor appointment management system where patients can book appointments and doctors can manage appointments, availability and history.",
      tech: ["React", "JavaScript", "Tailwind CSS"],
      icon: "🩺",
      live: "https://doctor-appointment-system-o0cexu0av.vercel.app/",
      github: "https://github.com/preranachalaune/DoctorAppointmentSystem",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center px-6 py-24 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-indigo-400 font-medium mb-3">
            My Recent Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My Projects
          </h2>

          <div className="w-20 h-1 bg-indigo-500 mx-auto mt-5 rounded-full"></div>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg leading-8">
            Here are some of the projects I have built while learning
            and improving my frontend development skills.
          </p>

        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-indigo-500 hover:-translate-y-2 transition-all duration-300"
            >

              {/* Project Preview */}
              <div className="h-56 bg-gradient-to-br from-indigo-600/30 to-purple-600/20 flex items-center justify-center relative overflow-hidden">

                <div className="absolute inset-0 bg-indigo-500/5 group-hover:bg-indigo-500/10 transition duration-300"></div>

                <div className="text-center relative z-10">

                  <div className="text-7xl mb-4 group-hover:scale-110 transition duration-300">
                    {project.icon}
                  </div>

                  <p className="text-slate-300 font-medium">
                    {project.title}
                  </p>

                </div>

              </div>

              {/* Project Details */}
              <div className="p-7">

                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-indigo-400 transition duration-300">
                  {project.title}
                </h3>

                <p className="text-slate-400 leading-7 mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-7">

                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="px-3 py-1.5 text-sm rounded-full bg-slate-800 text-indigo-300 border border-slate-700"
                    >
                      {technology}
                    </span>
                  ))}

                </div>

                {/* Buttons */}
                <div className="flex gap-4">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 hover:scale-105 transition duration-300 font-medium"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-slate-700 hover:border-indigo-400 hover:text-indigo-400 hover:scale-105 transition duration-300 font-medium"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom Message */}
        <div className="text-center mt-14">

          <p className="text-slate-400">
            More exciting projects coming soon 🚀
          </p>

        </div>

      </div>
    </section>
  );
}

export default Projects;