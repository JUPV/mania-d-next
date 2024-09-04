import Image from 'next/image';
import calabresa from '@/assets/calabresa.jpg'
import esfiha_carne from '@/assets/esfiha_carne.png'


export default function CardapioSection() {
  return (
    <section id="cardapio" className="py-20 dark:bg-fundo-dark">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-center">Mania D Esfiharia - Cardápio</h2>
        <h1 className="text-4xl font-bold text-center mt-4">Explore as melhores Pizzas e Esfihas</h1>
        <p className="text-center mt-6 mb-12">
          Cada pizza e esfiha é uma explosão de sabor que transforma a sua refeição em um momento inesquecível
        </p>

        <h2 className="text-2xl font-semibold">Pizzas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          <div className="item text-center">
            <Image src={calabresa} alt="Pizza de calabresa" width={300} height={200} className="rounded-md" />
            <h3 className="font-bold mt-4">Calabresa</h3>
            <p className="mt-2">Molho, Calabresa e Cebola.</p>
            <p className="font-bold text-red-500 mt-2">R$ 38,00</p>
          </div>
          {/* Repita para outros itens */}
        </div>

        <h2 className="text-2xl font-semibold mt-16">Esfihas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          <div className="item-esfihas text-center">
            <Image src={esfiha_carne} alt="Esfiha de carne moída, cebola e tomate" width={300} height={200} className="rounded-md" />
            <h3 className="font-bold mt-4">Carne</h3>
            <p className="mt-2">Carne moída, Cebola e Tomate.</p>
            <p className="font-bold text-red-500 mt-2">R$ 3,50</p>
          </div>
          {/* Repita para outros itens */}
        </div>
      </div>
    </section>
  );
}
