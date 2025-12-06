import { Building2, Home, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Portfolio() {
  const installations = [
    {
      image: import.meta.env.VITE_PORTFOLIO_IMAGE_1,
      title: 'Pavelló municipal - Mieres (Girona)',
      type: 'Comunitat energètica',
      power: '100 kW + 52kW emmagatzematge amb limitació d`exportació',
      modules: '308',
      icon: Users,
    },
    {
      image: import.meta.env.VITE_PORTFOLIO_IMAGE_2,
      title: 'Residencial aïllada - Masia a Ripoll (Girona)',
      type: 'Autoconsum',
      power: '8 kW + 30kWh emmagatzematge',
      modules: '22',
      icon: Home,
    },
    {
      image: import.meta.env.VITE_PORTFOLIO_IMAGE_3,
      title: 'Residencial - Masia a Llaés (Girona)',
      type: 'Autoconsum',
      power: '6 kW',
      modules: '12',
      icon: Home,
    },
    {
      image: import.meta.env.VITE_PORTFOLIO_IMAGE_3,
      title: 'Residencial - Ripoll (Girona)',
      type: 'Autoconsum',
      power: '6 kW + backup de protecció contra apagades de xarxa',
      modules: '12',
      icon: Home,
    },
    {
      image: import.meta.env.VITE_PORTFOLIO_IMAGE_3,
      title: 'Residencial - Masia a Ogassa (Girona)',
      type: 'Autoconsum',
      power: '4 kW',
      modules: '12',
      icon: Home,
    },
     {
      image: import.meta.env.VITE_PORTFOLIO_IMAGE_3,
      title: 'Residencial - Montesquiu (Barcelona)',
      type: 'Autoconsum',
      power: '6 kW',
      modules: '12',
      icon: Home,
    },
         {
      image: import.meta.env.VITE_PORTFOLIO_IMAGE_3,
      title: 'Industrial/Residencial - Fusteria (Ripoll)',
      type: 'Industiral',
      power: '10 kW',
      modules: '23',
      icon: Building2,
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = installations.length;

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const currentInstallation = installations[current];

  return (
    <section
      id="installacions"
      className="py-24 bg-gradient-to-b from-white to-[#0A2140]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Els projectes més recents
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Slide principal */}
          <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={currentInstallation.image}
              alt={currentInstallation.title}
              className="w-full h-full object-cover"
            />

            {/* Degradat sobre la imatge */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

            {/* Text sobre el degradat */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-3">
                <currentInstallation.icon className="w-6 h-6 text-[#FFB800]" />
                <span className="text-sm font-semibold uppercase tracking-wide text-white/80">
                  {currentInstallation.type}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {currentInstallation.title}
              </h3>

              <p className="text-sm sm:text-base text-white/85">
                Nº mòduls:{' '}
                <span className="font-semibold text-white">
                  {currentInstallation.modules}
                </span>{' '}
                · Potència nominal:{' '}
                <span className="font-semibold text-[#FFB800]">
                  {currentInstallation.power}
                </span>
              </p>
            </div>
          </div>

          {/* Botons esquerra/dreta */}
          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Puntets de navegació */}
          <div className="flex justify-center gap-2 mt-6">
            {installations.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrent(index)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  index === current
                    ? 'bg-[#FFB800] w-6'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
