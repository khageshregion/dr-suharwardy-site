export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-16 px-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Services</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="p-6 bg-white shadow rounded">
          <h3 className="font-semibold">General Consultation</h3>
          <p className="text-gray-600 mt-2">Comprehensive health check-ups and advice.</p>
        </div>
        <div className="p-6 bg-white shadow rounded">
          <h3 className="font-semibold">Specialized Treatment</h3>
          <p className="text-gray-600 mt-2">Tailored medical care for specific conditions.</p>
        </div>
        <div className="p-6 bg-white shadow rounded">
          <h3 className="font-semibold">Preventive Care</h3>
          <p className="text-gray-600 mt-2">Guidance on lifestyle and wellness.</p>
        </div>
      </div>
    </section>
  );
}
