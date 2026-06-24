"use client";
import Image from "next/image";
export default function Hero() {
  return (
    <section
      id="home"
      className="
  min-h-screen
  flex
  items-center
  pt-24
  md:pt-0
"
    >
      <div className="max-w-6xl mx-auto px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[80vh]">
          {/* Left Side */}
          <div className="max-w-2xl">
            <p className="text-blue-400 text-lg mb-4">👋 Hello, I'm</p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none">
              Tanuj{" "}
              <span
                className="
      bg-gradient-to-r
      from-blue-500
      to-cyan-400
      bg-clip-text
      text-transparent
    "
              >
                Sanwal
              </span>
            </h1>

            <p className="text-gray-400 mt-2 text-lg">
              MCA Data Science • UPES Dehradun
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold mt-5">
              Data Analyst • Backend Developer • AI Enthusiast
            </h2>

            <p className="text-gray-400 mt-6 text-lg max-w-xl">
              Building data-driven applications, analytics dashboards and
              AI-powered solutions using Python, SQL, FastAPI, Machine Learning
              and AWS.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="#projects"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                download
                className="border border-gray-700 px-6 py-3 rounded-xl hover:border-blue-500 transition"
              >
                Download Resume
              </a>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                "Python",
                "SQL",
                "FastAPI",
                "AWS",
                "Power BI",
                "Machine Learning",
              ].map((tech) => (
                <span
                  key={tech}
                  className="
      px-4 py-2
      rounded-full
      bg-blue-500/10
      border
      border-blue-500/20
      "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>
              <Image
                src="/profile.jpg"
                alt="Tanuj"
                width={380}
                height={380}
                className="relative rounded-full border-4 border-blue-500 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
