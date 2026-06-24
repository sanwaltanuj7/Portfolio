export default function Learning() {
  return (
    <section className="max-w-6xl mx-auto px-8 py-24">
      <h2 className="text-5xl font-bold mb-12">
        Currently Learning
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
          <h3 className="text-xl font-semibold">
            AWS Cloud Practitioner
          </h3>

          <p className="text-gray-400 mt-3">
            Learning AWS services, cloud concepts,
            IAM, EC2, S3 and cloud architecture.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
          <h3 className="text-xl font-semibold">
            Data Engineering
          </h3>

          <p className="text-gray-400 mt-3">
            Exploring ETL pipelines, data warehousing,
            PostgreSQL and cloud-based data systems.
          </p>
        </div>
      </div>
    </section>
  );
}