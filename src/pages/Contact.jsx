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
      const response = await fetch("https://formspree.io/f/xyeygond", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

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
    <section
      id="contact"
      className="min-h-screen flex items-center px-6 py-24"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-medium mb-3">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Contact Me
          </h2>

          <div className="w-20 h-1 bg-indigo-500 mx-auto mt-5 rounded-full"></div>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Have a project idea or want to connect with me?
            Feel free to send me a message.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

            <h3 className="text-2xl font-semibold mb-6">
              Let's Connect 🤝
            </h3>

            <p className="text-slate-400 leading-7 mb-8">
              I am always interested in learning new things, working
              on interesting projects and connecting with people.
            </p>

            <div className="mb-6">
              <p className="text-indigo-400 font-medium mb-1">
                Email
              </p>

              <p className="text-slate-300">
                Your Email Here
              </p>
            </div>

            <div className="mb-6">
              <p className="text-indigo-400 font-medium mb-1">
                Location
              </p>

              <p className="text-slate-300">
                Kathmandu, Nepal
              </p>
            </div>

            <div>
              <p className="text-indigo-400 font-medium mb-1">
                Availability
              </p>

              <p className="text-slate-300">
                Open to learning and collaboration
              </p>
            </div>

          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8"
          >

            {/* Name */}
            <div className="mb-5">
              <label className="block text-slate-300 mb-2">
                Your Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="block text-slate-300 mb-2">
                Your Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-slate-300 mb-2">
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Write your message..."
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "Sending..."}
              className="w-full px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition font-medium disabled:opacity-50"
            >
              {status === "Sending..."
                ? "Sending..."
                : "Send Message 🚀"}
            </button>

            {/* Status Message */}
            {status && (
              <p className="text-center text-indigo-400 mt-5">
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