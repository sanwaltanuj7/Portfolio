export default function Certifications() {
  const certifications = [
    {
      title: "AWS Cloud Practitioner",
      status: "In Progress",
    },
    {
      title: "Power BI",
      status: "Completed",
    },
    {
      title: "SQL",
      status: "Completed",
    },
    {
      title: "Git & GitHub",
      status: "Completed",
    },
  ];

  return (
    <section
      id="certifications"
      className="max-w-6xl mx-auto px-8 py-24"
    >
      <h2 className="text-5xl font-bold mb-12">
        Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-3xl p-6"
          >
            <h3 className="text-xl font-semibold">
              {cert.title}
            </h3>

            <p className="text-blue-400 mt-2">
              {cert.status}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}