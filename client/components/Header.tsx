import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
      <header className="bg-black text-white p-4 flex justify-between items-center sticky top-0 z-10">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
        <nav>
          <menu className="flex space-x-6">
            <Link href="/">Inicio</Link>
            <Link href="/programs">Programas</Link>
            <Link href="/participants">Participantes</Link>
          </menu>
        </nav>
      </header>
    );
  };

  export default Header;