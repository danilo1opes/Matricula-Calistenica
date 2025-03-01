import { useState } from 'react';
import { Youtube, Instagram, Twitter } from 'lucide-react';
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20" id="Contato">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Contato</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nome:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 border-gray-300 rounded-lg border focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 border-gray-300 rounded-lg border focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mensagem:
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition-colors"
              >
                Enviar mensagem
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Comunidade</h3>
              <div className="space-y-4">
                <a
                  href="https://t.me/+8Wt7Ow8MDd0wZjAx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
                >
                  📩 Telegram
                </a>
                <a
                  href="https://www.youtube.com/@Nyx_ontv"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                  Youtube Channel
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Link's sociais</h3>
              <div className="space-y-4">
                <a
                  href="https://x.com/Nyxmusic1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  Twitter
                </a>
                <a
                  href="https://www.instagram.com/danilo1opes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
