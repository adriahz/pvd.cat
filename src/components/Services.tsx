import { Pencil, Gift, Award, FileCheck, Shield, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Pencil,
      title: 'Enginyeria i projecte tècnic',
      description: 'Estudi de viabilitat, dimensionament i càlcul del projecte al detall.',
    },

    {
      icon: Award,
      title: 'Instal·lació i posta en marxa',
      description: 'Muntatge de components i configuració d´equips, prioritzant sempre materials de màxima qualitat',
    },
    {
      icon: FileCheck,
      title: 'Legalització',
      description: 'Tramitació del bulletí, RITSIC, RAC, sol·licitud del CAU a distribuidora, permisos municipals...',
    },
    {
      icon: Gift,
      title: 'Tramitació d\'ajuts i incentius',
      description: 'Gestió completa dels fons NextGen, bonificacions IBI i ICIO, i altres incentius fiscals',
    },

    {
      icon: Shield,
      title: 'Monitorizació 24/7',
      description: 'Garantia de producte fins a 25 anys, inversors 10 anys, i servei de manteniment disponible',
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contacte');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
<section
  id="serveis"
  className="py-24 bg-gradient-to-b from-white to-[#0A2140]"
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2140] mb-4">
            Què oferim?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Servei integral clau en mà, sense preocupacions
          </p>
          <div className="w-24 h-1 bg-[#FFB800] mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#FFB800]"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#0A2140] to-[#0A2140]/80 rounded-xl flex items-center justify-center mb-6">
                <service.icon size={28} className="text-[#FFB800]" />
              </div>
              <h3 className="text-xl font-bold text-[#0A2140] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

          <div className="bg-gradient-to-br from-[#FFB800] to-[#ffc933] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-bold text-[#0A2140] mb-4">
              I molt més...
            </h3>
            <p className="text-[#0A2140]/80 mb-6">
              Monitorització en temps real, suport tècnic 24/7 i assessorament continu
            </p>
            <button
              onClick={scrollToContact}
              className="bg-[#0A2140] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0A2140]/90 transition-all inline-flex items-center gap-2"
            >
              Demana pressupost
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="bg-green rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
          Instal·lacions amb garantia de qualitat i màxim estalvi energètic         </h3>
          <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
            Treballem amb entitats financeres per oferir-te finançament del 100%
          </p>
          <button
            onClick={scrollToContact}
            className="bg-[#FFB800] text-[#0A2140] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#ffc933] transition-all hover:scale-105 inline-flex items-center gap-2"
          >
            Consulta'ns el teu cas
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
