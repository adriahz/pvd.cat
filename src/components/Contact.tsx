import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

const FORM_ENDPOINT = 'https://formspree.io/f/EL_TEU_ID'; // 👈 SUBSTITUEIX AIXÒ

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    consumption: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nom: formData.name,
          telefon: formData.phone,
          email: formData.email,
          adreca: formData.address,
          consum: formData.consumption,
          missatge: formData.message,
          origen: 'Formulari web PVD Enginyeria',
        }),
      });

      if (res.ok) {
        setStatus('ok');
        setFormData({
          name: '',
          phone: '',
          email: '',
          address: '',
          consumption: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacte" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2140] mb-4">
            Vols començar a estalviar?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Demana el teu estudi personalitzat gratuït i sense compromís
          </p>
          <div className="w-24 h-1 bg-[#FFB800] mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-[#0A2140] mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Joan Garcia"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFB800] focus:outline-none transition-colors bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0A2140] mb-2">
                    Telèfon *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="600 123 456"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFB800] focus:outline-none transition-colors bg-white"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-[#0A2140] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="joan@email.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFB800] focus:outline-none transition-colors bg-white"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-[#0A2140] mb-2">
                  Adreça de la instal·lació *
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Carrer, número, localitat, província"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFB800] focus:outline-none transition-colors bg-white"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-[#0A2140] mb-2">
                  Consum mensual estimat (€)
                </label>
                <select
                  name="consumption"
                  value={formData.consumption}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFB800] focus:outline-none transition-colors bg-white"
                >
                  <option value="">Selecciona el teu consum</option>
                  <option value="0-50">Menys de 50€</option>
                  <option value="50-100">50€ - 100€</option>
                  <option value="100-150">100€ - 150€</option>
                  <option value="150-200">150€ - 200€</option>
                  <option value="200+">Més de 200€</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-[#0A2140] mb-2">
                  Missatge addicional
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Explica'ns qualsevol detall que creguis rellevant..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFB800] focus:outline-none transition-colors bg-white resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-[#FFB800] text-[#0A2140] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#ffc933] transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg disabled:opacity-70 disabled:hover:scale-100"
              >
                <Send size={20} />
                {status === 'sending' ? 'Enviant...' : 'Enviar sol·licitud'}
              </button>

              {status === 'ok' && (
                <p className="text-center text-green-600 text-sm mt-4">
                  Hem rebut la teva sol·licitud. Et contactarem en 24/48 hores.
                </p>
              )}
              {status === 'error' && (
                <p className="text-center text-red-600 text-sm mt-4">
                  Hi ha hagut un error en enviar el formulari. Torna-ho a provar més tard.
                </p>
              )}
            </form>
          </div>

          {/* Columna dreta: info de contacte (sense canvis) */}
          <div className="space-y-6">
            <div className="bg-[#0A2140] rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Contacta'ns directament</h3>

              <div className="space-y-4">
                <a
                  href="tel:+34972604330"
                  className="flex items-start gap-4 group hover:translate-x-2 transition-transform"
                >
                  <div className="w-12 h-12 bg-[#FFB800] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-[#0A2140]" />
                  </div>
                  <div>
                    <div className="text-sm text-white/80 mb-1">Telèfon i Whatsapp</div>
                    <div className="font-semibold group-hover:text-[#FFB800] transition-colors">
                      +34 972 604 330
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:info@pvd.cat"
                  className="flex items-start gap-4 group hover:translate-x-2 transition-transform"
                >
                  <div className="w-12 h-12 bg-[#FFB800] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-[#0A2140]" />
                  </div>
                  <div>
                    <div className="text-sm text-white/80 mb-1">Email</div>
                    <div className="font-semibold group-hover:text-[#FFB800] transition-colors break-all">
                      info@pvd.cat
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFB800] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-[#0A2140]" />
                  </div>
                  <div>
                    <div className="text-sm text-white/80 mb-1">Ctra/Barcelona, 51</div>
                    <div className="font-semibold">RIPOLL (Girona)</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFB800] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-[#0A2140]" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70 mt-1">Visites: 16:00 - 20:00</div>
                    <div className="font-semibold">Horari d'atenció: 9:00 - 18:00</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#FFB800] to-[#ffc933] rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[#0A2140] mb-4">
                Estudi gratuït inclou:
              </h3>
              <ul className="space-y-3 text-[#0A2140]">
                <li className="flex items-start gap-2">
                  <span className="text-[#0A2140] mt-1">✓</span>
                  <span>Anàlisi de consum personalitzat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A2140] mt-1">✓</span>
                  <span>Simulació de producció solar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A2140] mt-1">✓</span>
                  <span>Càlcul d'estalvi i ROI</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A2140] mt-1">✓</span>
                  <span>Pressupost detallat sense compromís</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
