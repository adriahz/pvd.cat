import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Calculator from './components/Calculator';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Serveis from './components/Serveis';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-0">
        <Hero />          
        <Services />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;