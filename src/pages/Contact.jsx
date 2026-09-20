import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      const response = await fetch(
        "https://formspree.io/f/xyeygond",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("Message sent successfully! 🎉");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="min-h-screen flex items-center px-6 pt-28 pb-20">
      <div className="max-w-6xl mx-auto w-full">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-indigo-400 font-medium mb-3">
            Get In Touch
          </p>

          <h1 className="text-4xl md:text-5xl font-bold">
            Contact Me
          </h1>

          <div className="w-20 h-1 bg-indigo-500 mx-auto mt-5 rounded-full"></div>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto leading-7">
            Have a project idea or want to connect with me?
            Feel free to send me a message.
          </p>

        </div>


        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-8 md:p-10 shadow-xl">

            <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Let's Connect
            </p>

            <h2 className="text-3xl font-bold mb-5">
              Let's Talk 🤝
            </h2>

            <p className="text-slate-400 leading-7 mb-10">
              I am interested in learning new technologies, working
              on interesting projects and connecting with people.
              Feel free to reach out to me.
            </p>


            {/* Email */}
            <div className="mb-7 p-4 rounded-xl bg-slate-800/50 border border-slate-700">

              <p className="text-indigo-400 font-medium mb-2">
                Email
              </p>

              <a
                href="mailto:chalauneprena@gmail.com"
                className="text-slate-200 hover:text-indigo-400 transition break-all underline-offset-4 hover:underline"
              >
                chalauneprena@gmail.com
              </a>

            </div>


            {/* Location */}
            <div className="mb-7 p-4 rounded-xl bg-slate-800/50 border border-slate-700">

              <p className="text-indigo-400 font-medium mb-2">
                Location
              </p>

              <p className="text-slate-300">
                Kathmandu, Nepal
              </p>

            </div>


            {/* Availability */}
            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">

              <p className="text-indigo-400 font-medium mb-2">
                Availability
              </p>

              <p className="text-slate-300">
                Open to Internships, Learning & Collaboration
              </p>

            </div>

          </div>


          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-slate-900/70 border border-slate-800 rounded-3xl p-8 md:p-10 shadow-xl"
          >

            <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Send a Message
            </p>

            <h2 className="text-3xl font-bold mb-8">
              Get In Touch
            </h2>


            {/* Name */}
            <div className="mb-5">

              <label className="block text-slate-300 mb-2 font-medium">
                Your Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
              />

            </div>


            {/* Email */}
            <div className="mb-5">

              <label className="block text-slate-300 mb-2 font-medium">
                Your Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
              />

            </div>


            {/* Message */}
            <div className="mb-6">

              <label className="block text-slate-300 mb-2 font-medium">
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                placeholder="Write your message..."
                required
                className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition resize-none"
              ></textarea>

            </div>


            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "Sending..."}
              className="w-full px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 hover:scale-[1.01] transition duration-300 font-semibold shadow-lg shadow-indigo-950/30 disabled:opacity-50 disabled:hover:scale-100"
            >
              {status === "Sending..."
                ? "Sending..."
                : "Send Message 🚀"}
            </button>


            {/* Status Message */}
            {status && (
              <p className="text-center text-indigo-400 mt-5 font-medium">
                {status}
              </p>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;