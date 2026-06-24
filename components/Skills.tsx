import {
  FaPython,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";

export default function Skills() {
  const skills = [
    { name: "Python", icon: <FaPython /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "PostgreSQL", icon: <FaDatabase /> },
    { name: "MongoDB", icon: <FaDatabase /> },
    { name: "Power BI", icon: <FaDatabase /> },
    { name: "FastAPI", icon: <FaDatabase /> },
    { name: "Neo4j", icon: <FaDatabase /> },
  ];

  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-8 py-24"
    >
      <h2 className="text-5xl font-bold mb-12">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="
            bg-white/5
            border
            border-white/10
            rounded-2xl
            p-6
            flex
            items-center
            gap-4
            "
          >
            <span className="text-3xl text-blue-500">
              {skill.icon}
            </span>

            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}