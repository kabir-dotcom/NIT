import { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    setStatus('Thanks! A practitioner will reply within 1 business day.');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="bg-slate-900">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="space-y-6 text-slate-100">
          <h1 className="text-3xl font-semibold text-white">Book a discovery consult</h1>
          <p className="text-sm text-slate-300">
            After you share your story, our clinical director will map out initial steps including lab suggestions,
            detox support, and nervous system care. We respond to all inquiries within 24 hours on weekdays.
          </p>
          <div className="rounded-2xl border border-white/10 bg-white/10 p-6">
            <h2 className="text-lg font-semibold text-white">Clinic Hours</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>Mon-Thu: 9am – 6pm</li>
              <li>Fri: 9am – 3pm</li>
              <li>Virtual consults available worldwide</li>
              <li>Phone: (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-8 shadow-xl shadow-primary-100">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                Full name
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                placeholder="Taylor Immuno"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                placeholder="you@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                How can we help?
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                placeholder="Share your health goals or current diagnoses..."
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-300"
          >
            Submit inquiry
          </button>

          {status && <p className="mt-4 text-center text-sm font-medium text-primary-500">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
