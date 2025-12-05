import { Search, FileText, Wrench, Activity } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Estudi de viabilitat',
      description: 'Analitzem el teu consum i fem una simulació de producció adaptada a les teves necessitats',
    },
    {
      icon: FileText,
      number: '02',
      title: 'Enginyeria',
      description: 'Disseny tècnic i dimensionament del projecte definitiu.',
    },
    {
      icon: Wrench,
      number: '03',
      title: 'Instal·lació i legalització',
      description: 'Instal·lació certificada per professionals i tramitació de la legalització',
    },
    {
      icon: Activity,
      number: '04',
      title: 'Monitorització contínua',
      description: 'Accés a monitorització en temps real i suport tècnic permanent',
    },
  ];

  return (
    <section id="com-funciona" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2140] mb-4">
            Quins passos seguirem?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Del primer contacte a començar a estalviar en 4 passos senzills
          </p>
          <div className="w-24 h-1 bg-[#FFB800] mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-[60%] w-full h-0.5 bg-gradient-to-r from-[#FFB800] to-transparent"></div>
              )}

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative z-10">
                <div className="absolute -top-6 left-8">
                  <span className="text-6xl font-bold text-[#FFB800]/20">{step.number}</span>
                </div>

                <div className="w-16 h-16 bg-[#0A2140] rounded-2xl flex items-center justify-center mb-6 mt-4">
                  <step.icon size={32} className="text-[#FFB800]" />
                </div>

                <h3 className="text-xl font-bold text-[#0A2140] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
