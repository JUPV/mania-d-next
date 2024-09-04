import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/Logo.png'

export default function Header() {
  return (
    <header className="bg-white shadow-md dark:bg-fundo-dark">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="logo">
          <Image
            src={logo}
            alt="Logo Mania D Esfiharia Delivery"
            width={120}
            height={50}
          />
        </div>
        <ul className="menu flex space-x-4">
          <li>
            <Link href="#home">
              <div className="text-gray-700 hover:text-gray-900">Home</div>
            </Link>
          </li>
          <li>
            <Link href="#nossa-historia">
              <div className="text-gray-700 hover:text-gray-900">Nossa História</div>
            </Link>
          </li>
          <li>
            <Link href="#cardapio">
              <div className="text-gray-700 hover:text-gray-900">Cardápio</div>
            </Link>
          </li>
          <li>
            <Link href="#contato">
              <div className="text-gray-700 hover:text-gray-900">Contato</div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
