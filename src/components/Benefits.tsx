import { TrendingDown, CheckCircle, Award, MapPin } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: TrendingDown,
      title: 'Estalvi garantit',
      description: 'Reducció de fins al 60% de la factura elèctrica des del primer mes',
    },
    {
      icon: CheckCircle,
      title: 'Gestió integral',
      description: 'Projecte, instal·lació, legalització RITSIC i tramitació d\'ajuts inclosos',
    },
    {
      icon: Award,
      title: 'Qualitat professional',
      description: 'Enginyers col·legiats i materials premium (Huawei, Fronius, BYD)',
    },
    {
      icon: MapPin,
      title: 'Servei a tota Catalunya',
      description: 'Instal·lacions residencials, industrials i per a comunitats de veïns',
    },
  ];

  return (
    <section id="beneficis" className="pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2140] mb-4">
            Per què instal·lar plaques solars<br />amb PVD Enginyeria?
          </h2>
          <div className="w-24 h-1 bg-[#FFB800] mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl p-8 hover:bg-[#0A2140] transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-[#FFB800] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <benefit.icon size={32} className="text-[#0A2140]" />
              </div>
              <h3 className="text-xl font-bold text-[#0A2140] mb-3 group-hover:text-white transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-white/90 transition-colors">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
