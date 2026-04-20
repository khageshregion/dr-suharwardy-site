export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Contact</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full border rounded px-4 py-2" />
        <input type="email" placeholder="Your Email" className="w-full border rounded px-4 py-2" />
        <textarea placeholder="Message" className="w-full border rounded px-4 py-2 h-32"></textarea>
        <button className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700">
          Send
        </button>
      </form>
    </section>
  );
}
