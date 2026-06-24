export default function Experience() {
  const experiences = [
    {
      year: "2026",
      role: "Backend Development Intern",
      company: "Xebia",
      description:
        "Built APIs and contributed to the Role-Based Personalized Learning Pathway Engine using FastAPI, PostgreSQL and Neo4j.",
    },
    {
      year: "2025",
      role: "Data Analyst Intern",
      company: "MedTourEasy",
      description:
        "Performed data cleaning, exploratory analysis and Power BI dashboard development for healthcare datasets.",
    },
  ];

  return (
    <section
      id="experience"
      className="max-w-5xl mx-auto px-8 py-24"
    >
      <h2 className="text-5xl font-bold mb-16">
        Experience
      </h2>

      <div className="relative border-l-2 border-blue-500 ml-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="mb-12 ml-8"
          >
            <div className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full"></div>

            <p className="text-blue-400 font-bold">
              {exp.year}
            </p>

            <h3 className="text-2xl font-semibold mt-2">
              {exp.role}
            </h3>

            <p className="text-gray-400">
              {exp.company}
            </p>

            <p className="mt-3 text-gray-300">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}