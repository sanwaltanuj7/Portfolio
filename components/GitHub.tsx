import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

export default function Socials() {
  return (
    <section className="py-24 px-8 max-w-5xl mx-auto">
      <h2 className="text-5xl font-bold mb-12">
        Find Me Online
      </h2>

      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">

        <div className="grid md:grid-cols-2 gap-6">

          {/* GitHub */}
          <a
            href="https://github.com/sanwaltanuj7"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/10 rounded-2xl p-6 hover:border-blue-500 transition"
          >
            <div className="flex items-center gap-4">
              <FaGithub size={35} />
              <div>
                <h3 className="text-2xl font-bold">
                  GitHub
                </h3>
                <p className="text-gray-400">
                  @sanwaltanuj7
                </p>
              </div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/tanuj-sanwal-2706421a6/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/10 rounded-2xl p-6 hover:border-blue-500 transition"
          >
            <div className="flex items-center gap-4">
              <FaLinkedin size={35} />
              <div>
                <h3 className="text-2xl font-bold">
                  LinkedIn
                </h3>
                <p className="text-gray-400">
                  Professional Profile
                </p>
              </div>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/sanwal.tanuj?igsh=Z3hhNTg3azM2bzVw"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/10 rounded-2xl p-6 hover:border-pink-500 transition"
          >
            <div className="flex items-center gap-4">
              <FaInstagram size={35} />
              <div>
                <h3 className="text-2xl font-bold">
                  Instagram
                </h3>
                <p className="text-gray-400">
                  Personal Updates
                </p>
              </div>
            </div>
          </a>

          {/* Twitter/X */}
          <a
            href="https://x.com/t_sanwal"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/10 rounded-2xl p-6 hover:border-cyan-500 transition"
          >
            <div className="flex items-center gap-4">
              <FaXTwitter size={35} />
              <div>
                <h3 className="text-2xl font-bold">
                  X (Twitter)
                </h3>
                <p className="text-gray-400">
                  Tech & AI Updates
                </p>
              </div>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}