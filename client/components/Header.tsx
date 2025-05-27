import Image from "next/image";

const Header = () => {
    return (
      <header className="bg-black text-white p-4 flex justify-between items-center">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
        <nav>
          <ul className="flex space-x-6">
            <li><a href="/">Inicio</a></li>
            <li><a href="/about">Programas</a></li>
            <li><a href="/participants">Participantes</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </nav>
      </header>
    );
  };

  export default Header;