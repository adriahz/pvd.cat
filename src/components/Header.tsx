import { useState, useEffect } from 'react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        bg-gradient-to-b from-black/50 to-black/0
        transition-all duration-300
        ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
      `}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <img src={import.meta.env.VITE_LOGO_IMAGE} alt="PVD Enginyeria" className="h-16" />

        <ul className="flex gap-6 text-white">

          <li>
            <a
              href="#contact"
              className="px-4 py-2 bg-yellow-400 text-black rounded"
            >
              Contacta'ns
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
