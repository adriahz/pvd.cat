import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Marta Puig',
      location: 'Barcelona',
      rating: 5,
      text: 'Excel·lent servei des del primer moment. Ens van fer un estudi detallat, el pressupost era tancat i sense sorpreses, i la instal·lació va ser ràpida i neta. Ja estem estalviant més del 50% a la factura!',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Jordi Mas',
      location: 'Sabadell',
      rating: 5,
      text: 'Professionals de debò. Vam instal·lar plaques a la nau industrial i van gestionar tots els permisos i ajuts. El retorn de la inversió serà en menys de 6 anys. Molt contents amb el servei.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Anna Soler',
      location: 'Girona',
      rating: 5,
      text: 'La millor decisió que hem pres. A més de l\'estalvi econòmic, estem contribuint al medi ambient. L\'aplicació de monitorització és fantàstica, veiem la producció en temps real. Totalment recomanable!',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2140] mb-4">
            Els nostres clients<br />ens recomanen
          </h2>
          <div className="w-24 h-1 bg-[#FFB800] mx-auto mt-6"></div>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-[#FFB800]"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-[#FFB800] text-[#FFB800]" />
                  ))}
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonials[currentIndex].text}"
                </p>

                <div>
                  <div className="font-bold text-[#0A2140] text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentIndex].location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-[#0A2140] rounded-full flex items-center justify-center text-white hover:bg-[#0A2140]/90 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-[#FFB800] w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-[#0A2140] rounded-full flex items-center justify-center text-white hover:bg-[#0A2140]/90 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
