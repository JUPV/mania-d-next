import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/Logo.png';

export default function Header() {
  return (
    <header className="shadow-md w-full">
      <nav className="flex p-4 w-full items-center">
        <Image src={logo} alt="Logo Mania D Esfiharia Delivery" width={150} height={50} />
        <ul className="flex space-x-4">
          {['Home', 'Nossa História', 'Cardápio', 'Contato'].map((item, index) => (
            <li key={index}>
              <Link href={`#${item.toLowerCase().replace(' ', '-')}`}>
                <div className={`text-gray-50 text-1xl font-bold hover:text-red-600 uppercase`}>{item}</div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
