import { Calculator as CalcIcon, ArrowRight } from 'lucide-react';
import calculatorImage from '../assets/calculator.jpg';

export default function Calculator() {
  const scrollToContact = () => {
    const element = document.getElementById('contacte');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-[#0A2140] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${calculatorImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-[#FFB800] rounded-full flex items-center justify-center mx-auto mb-6">
            <CalcIcon size={40} className="text-[#0A2140]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quant pots estalviar?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Introdueix el teu consum i et fem un estudi personalitzat gratuït amb simulació de producció i retorn de la inversió
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-sm font-semibold text-[#0A2140] mb-2">
                Consum mensual (€)
              </label>
              <input
                type="number"
                placeholder="150"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFB800] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#0A2140] mb-2">
                Tipus d'habitatge
              </label>
              <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFB800] focus:outline-none transition-colors">
                <option>Casa unifamiliar</option>
                <option>Pis en comunitat</option>
                <option>Nau industrial</option>
                <option>Edifici terciari</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#0A2140] mb-2">
                Província
              </label>
              <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFB800] focus:outline-none transition-colors">
                <option>Barcelona</option>
                <option>Girona</option>
                <option>Tarragona</option>
                <option>Lleida</option>
              </select>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#0A2140] to-[#0A2140]/90 rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-[#FFB800] mb-2">~60%</div>
                <div className="text-white/80 text-sm">Estalvi anual</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#FFB800] mb-2">~7 anys</div>
                <div className="text-white/80 text-sm">Retorn inversió</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#FFB800] mb-2">2.5T CO₂</div>
                <div className="text-white/80 text-sm">Reducció anual</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={scrollToContact}
              className="bg-[#FFB800] text-[#0A2140] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#ffc933] transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg"
            >
              Sol·licitar estudi detallat gratuït
              <ArrowRight size={20} />
            </button>
            <p className="text-gray-500 text-sm mt-4">
              Resposta en menys de 24 hores
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
