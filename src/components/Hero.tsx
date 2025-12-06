import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/9875420/pexels-photo-9875420.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2140]/95 via-[#0A2140]/80 to-[#0A2140]/60"></div>
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 sm:pt-32 md:pt-40">
        <img src="/src/assets/pvd_logo_360x130_(white).png" alt="PVD Enginyeria" className="h-20 mx-auto mb-8" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Fotovoltaica & eficiència energètica<br />
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-4 font-light">
          Projectes d'enginyeria claus en mà
        </p>
        <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-3xl mx-auto">
          Disseny  +  Instal·lació  +  Legalització
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('contacte')}
            className="bg-[#FFB800] text-[#0A2140] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#ffc933] transition-all hover:scale-105 flex items-center gap-2 shadow-xl"
          >
Demana pressupost            <ArrowRight size={20} />
          </button>
          <button
            onClick={() => scrollToSection('installacions')}
            className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all flex items-center gap-2"
          >
            <Play size={20} />
            Projectes recents
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#FFB800] mb-2">+50</div>
            <div className="text-white/80 text-sm">Instal·lacions</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#FFB800] mb-2">60%</div>
            <div className="text-white/80 text-sm">Estalvi mitjà</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#FFB800] mb-2">25 anys</div>
            <div className="text-white/80 text-sm">De garantia</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#FFB800] mb-2">100%</div>
            <div className="text-white/80 text-sm">Satisfacció</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
