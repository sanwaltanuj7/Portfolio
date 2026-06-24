
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-8 max-w-5xl mx-auto text-center"
    >
      <h2 className="text-5xl font-bold mb-8">
        Let's Connect
      </h2>

      <p className="text-gray-400 text-lg">
        Looking for opportunities in Data Analytics,
        Backend Development and AI Engineering.
      </p>
        <form
  action="https://formspree.io/f/mlgyggpy"
  method="POST"
  className="max-w-2xl mx-auto mt-12 space-y-5"
>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    className="
    w-full
    p-4
    rounded-xl
    bg-white/5
    border
    border-white/10
    focus:border-blue-500
    outline-none
    "
  />

  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
    className="
    w-full
    p-4
    rounded-xl
    bg-white/5
    border
    border-white/10
    focus:border-blue-500
    outline-none
    "
  />

  <textarea
    name="message"
    placeholder="Your Message"
    rows={6}
    required
    className="
    w-full
    p-4
    rounded-xl
    bg-white/5
    border
    border-white/10
    focus:border-blue-500
    outline-none
    "
  />

  <button
    type="submit"
    className="
    w-full
    py-4
    rounded-xl
    bg-blue-600
    hover:bg-blue-700
    font-semibold
    transition
    "
  >
    Send Message
  </button>
</form>
      <div className="flex justify-center gap-8 text-4xl mt-10">
        <a href="mailto:sanwaltanuj7@gmail.com">
          <FaEnvelope />
        </a>

        <a
          href="https://www.linkedin.com/in/tanuj-sanwal-2706421a6/"
          target="_blank"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/sanwaltanuj7"
          target="_blank"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
}