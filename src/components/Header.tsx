export default function Header() {
  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50 
        bg-gradient-to-b from-black/50 to-black/0 
        transition-all duration-300
      "
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <img src="/src/assets/pvd_logo_360x130_(white).png" alt="PVD Enginyeria" className="h-16" />

        <ul className="flex gap-6 text-white">

          <li>
            <a
              href="#contact"
              className="px-4 py-2 bg-yellow-400 text-black rounded"
            >
              Contacta
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
