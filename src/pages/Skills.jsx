function Skills() {
  const skills = [
    { name: "HTML", level: "90%", icon: "🌐" },
    { name: "CSS", level: "85%", icon: "🎨" },
    { name: "JavaScript", level: "80%", icon: "⚡" },
    { name: "React", level: "75%", icon: "⚛️" },
    { name: "Tailwind CSS", level: "85%", icon: "💨" },
    { name: "Git & GitHub", level: "70%", icon: "🔧" },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center px-6 py-24 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 -right-32 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-20 -left-32 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-indigo-400 font-medium mb-3">
            My Technical Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Skills & Technologies
          </h2>

          <div className="w-20 h-1 bg-indigo-500 mx-auto mt-5 rounded-full"></div>

          <p className="text-slate-400 text-lg mt-6 max-w-2xl mx-auto leading-8">
            Technologies and tools I am learning and using to build
            modern, responsive and user-friendly web applications.
          </p>

        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500 hover:-translate-y-1 transition-all duration-300"
            >

              {/* Skill Header */}
              <div className="flex justify-between items-center mb-4">

                <div className="flex items-center gap-3">

                  <span className="text-2xl group-hover:scale-110 transition duration-300">
                    {skill.icon}
                  </span>

                  <h3 className="text-lg font-semibold text-white">
                    {skill.name}
                  </h3>

                </div>

                <span className="text-indigo-400 font-semibold">
                  {skill.level}
                </span>

              </div>

              {/* Progress Bar */}
              <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">

                <div
                  className="h-full bg-indigo-600 rounded-full transition-all duration-1000"
                  style={{ width: skill.level }}
                ></div>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom Message */}
        <div className="text-center mt-14">

          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-indigo-500/10 border border-indigo-500/20">

            <span className="text-xl">
              🚀
            </span>

            <p className="text-indigo-300 font-medium">
              Continuously learning and improving my skills
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;