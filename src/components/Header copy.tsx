import Image from "next/image"
import logo from '@/assets/Logo.png'

export const Header2 = () => {
  return (
    <header>
      <nav className="flex items-center gap-4 px-10 dark:bg-fundo-dark">
        <div>
          <Image src={logo} alt="logo" width={150}/>
        </div>
        <ul className="flex gap-7 list-none">
          <li className="text-white font-bold text-lg uppercase hover:text-[#ff0015]"><a href="#home">Home</a></li>
          <li className="text-white font-bold text-lg uppercase hover:text-[#ff0015]"><a href="#nossa-historia">Nossa História</a></li>
          <li className="text-white font-bold text-lg uppercase hover:text-[#ff0015]"><a href="#cardapio">Cardápio</a></li>
          <li className="text-white font-bold text-lg uppercase hover:text-[#ff0015]"><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}
