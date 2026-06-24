export default function Stats() {
  const stats = [
    { number: "4+", label: "Projects" },
    { number: "2", label: "Internships" },
    { number: "MCA", label: "Data Science" },
    { number: "1000+", label: "Records Analyzed" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-8 py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="
                backdrop-blur-md
                bg-white/5
                border
                border-white/10
                rounded-3xl
                p-8
                text-center
                hover:scale-105
                transition
                "
          >
            <h3 className="text-4xl font-bold text-blue-500">{stat.number}</h3>

            <p className="text-gray-400 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
