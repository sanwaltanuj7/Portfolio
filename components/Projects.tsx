export default function Projects() {
  const projects = [
    {
      title: "Role-Based Personalized Learning Pathway Engine",
      tech: "FastAPI, Neo4j, PostgreSQL",
      description:
        "AI-powered platform that identifies skill gaps and generates personalized learning roadmaps.",
      github:
        "https://github.com/sanwaltanuj7/Role_Based_Personalized_Learning_Pathway_Engine",
      demo: "#",
    },
    {
      title: "Cloud Kitchen Market Intelligence",
      tech: "Python, Pandas, SQL, Google Colab, Git & GitHub",
      description:
        "A market intelligence analysis of food delivery restaurants in Nashik using data collected from Zomato.",
      github:
        "https://github.com/sanwaltanuj7/cloud-kitchen-market-intelligence",
      demo: "#",
    },
    {
      title: "Healthcare Data Analysis",
      tech: "Python, Pandas, Power BI",
      description:
        "Data cleaning, EDA and visualization of healthcare datasets.",
      github: "https://github.com/sanwaltanuj7/Healthcare-Data-Analysis",
      demo: "#",
    },
    {
      title: "Celebrity Look-Alike ML App",
      tech: "CNN, Streamlit",
      description:
        "Computer vision application for celebrity face similarity detection.",
      github: "https://github.com/sanwaltanuj7/Celebrity-Look-A-like-Detection",
      demo: "#",
    },
  ];

  return (
    <section className="py-24 px-8 max-w-6xl mx-auto" id="projects">
      <h2 className="text-5xl font-bold mb-12">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="
                        bg-white/5
                        backdrop-blur-md
                        border
                        border-white/10
                        rounded-3xl
                        p-8
                        hover:-translate-y-2
                        hover:border-blue-500
                        transition-all
                        duration-300
                        "
          >
            <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>

            <p className="text-gray-400 mb-3">{project.tech}</p>

            <p className="mb-5">{project.description}</p>

            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
              >
                GitHub
              </a>

              {/* <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition"
              >
                Live Demo
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
