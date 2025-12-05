import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Quant puc estalviar amb plaques solars?',
      answer: 'L\'estalvi mitjà és del 50-60% de la factura elèctrica, depenent del teu consum, la ubicació i l\'orientació de la teulada. Amb els preus actuals de l\'electricitat, el retorn de la inversió sol estar entre 6-8 anys, i la instal·lació dura més de 25 anys.',
    },
    {
      question: 'Quina és la vida útil d\'una instal·lació fotovoltaica?',
      answer: 'Els panells solars tenen una garantia de producció de 25 anys i poden durar més de 30-35 anys amb un manteniment adequat. Els inversors solen tenir garanties de 10-12 anys i una vida útil de 15-20 anys.',
    },
    {
      question: 'Puc instal·lar plaques si tinc teulada de teules, sandwich o fibrociment?',
      answer: 'Sí! Treballem amb tots els tipus de teulada: àrab, plana, sandwich, fibrociment, xapa, etc. Utilitzem sistemes de fixació específics per a cada tipus garantint l\'estanqueïtat i la seguretat estructural. El nostre equip tècnic avalua cada cas de forma personalitzada.',
    },
    {
      question: 'Com funciona la compensació d\'excedents?',
      answer: 'L\'energia que produeixes i no consumeixes es bolca a la xarxa elèctrica. La comercialitzadora et compensa aquests excedents descomptant-los de la factura a preu de pool (preu majorista). És un sistema automàtic que gestiona la teva distribuidora elèctrica.',
    },
    {
      question: 'Necessito bateria per emmagatzemar energia?',
      answer: 'No és imprescindible. La majoria d\'instal·lacions residencials funcionen connectades a la xarxa amb compensació d\'excedents. Les bateries són recomanables si vols maximitzar l\'autoconsum, tens tarifa sense compensació o vols tenir autonomia energètica.',
    },
    {
      question: 'Quins permisos i tràmits cal fer?',
      answer: 'Nosaltres ens encarreguem de tot: projecte tècnic, llicència d\'obres (si cal), permisos municipals, certificat elèctric, inscripció al RITSIC, tramitació amb la distribuidora i contracte de compensació. Tu no t\'has de preocupar de res.',
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2140] mb-4">
            Preguntes freqüents
          </h2>
          <p className="text-xl text-gray-600">
            Tot el que necessites saber sobre instal·lacions fotovoltaiques
          </p>
          <div className="w-24 h-1 bg-[#FFB800] mx-auto mt-6"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-[#0A2140] text-lg pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={24}
                  className={`text-[#FFB800] flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
