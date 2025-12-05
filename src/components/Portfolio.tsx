import { Building2, Home, Users } from 'lucide-react';

export default function Portfolio() {
  const installations = [
    {
      image:
        'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Instal·lació residencial - Barcelona',
      type: 'Residencial',
      power: '6.5 kW',
      icon: Home,
    },
    {
      image:
        'https://images.pexels.com/photos/9875420/pexels-photo-9875420.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Nau industrial - Sabadell',
      type: 'Industrial',
      power: '45 kW',
      icon: Building2,
    },
        {
      image:
        'https://images.pexels.com/photos/8853507/pexels-photo-8853507.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Comunitat de veïns - Girona',
      type: 'Comunitat',
      power: '18 kW',
      icon: Users,
    },
    {
      image:
        'https://images.pexels.com/photos/8853507/pexels-photo-8853507.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Comunitat de veïns - Girona',
      type: 'Comunitat',
      power: '18 kW',
      icon: Users,
    },
    {
      image:
        'https://images.pexels.com/photos/8853507/pexels-photo-8853507.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Comunitat de veïns - Vic',
      type: 'Comunitat',
      power: '22 kW',
      icon: Users,
    },
    {
      image:
        'https://images.pexels.com/photos/8853507/pexels-photo-8853507.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Comunitat de veïns - Manresa',
      type: 'Comunitat',
      power: '30 kW',
      icon: Users,
    },
  ];

  return (
    <section id="installacions" className="py-24 g-gradient-to-b from-white to-[#0A2140]>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Els projectes més recents
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {installations.map((installation, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative">
                <img
                  src={installation.image}
                  alt={installation.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-lg flex items-center gap-2 shadow">
                  <installation.icon className="w-4 h-4 text-gray-700" />
                  <span className="text-sm font-medium text-gray-700">
                    {installation.type}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#234FA1] transition-colors">
                  {installation.title}
                </h3>

<div className="mt-4 space-y-1 text-left">
  <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
    Nº mòduls: <span className="font-semibold">{installation.modules}</span>
  </p>
  <p className="text-sm text-gray-600 group-hover:text-white/80 transition-colors">
    Potència: <span className="font-semibold">{installation.power}</span>
  </p>
</div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
