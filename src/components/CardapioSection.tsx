import Image from 'next/image';
import calabresa from '@/assets/calabresa.jpg'
import mussarela from '@/assets/mussarela.jpg'
import frango_catupiry from '@/assets/frango.jpg'
import portuguesa from '@/assets/portuguesa.jpg'
import baiana from '@/assets/baiana.png'
import dois_queijos from '@/assets/dois queijos.jpg'
import calamussa from '@/assets/calamussa.png'
import marguerita from '@/assets/margerita.jpg'
import caipira from '@/assets/caipira.jpg'
import chocolate_cofente from '@/assets/Chocolate confete.jpg'
import doce_leite from '@/assets/doce de leite.jpeg'
import esfiha_carne from '@/assets/esfiha_carne.png'
import esfiha_queijo from '@/assets/Esfiha mussa.png'
import esfiha_frango from '@/assets/esfiha frango.png'
import esfiha_frangocomqueijo from '@/assets/frango com queijo.png'
import esfiha_frangocatupiry from '@/assets/frangoccati.png'
import esfiha_calabresa from '@/assets/calabresa.png'
import esfiha_calabresa_queijo from '@/assets/calabresa 2.png'
import esfiha_calabresa_catupiry from '@/assets/calabresa3.png'
import esfiha_atum from '@/assets/atum.png'
import esfiha_chocolate from '@/assets/chocolate 1.png'
import esfiha_confete from '@/assets/esfiha_confete_chocolate.png'
import esfiha_doce_leite from '@/assets/Esfihadoce de leite.png'

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
          <div className="item text-center">
            <Image src={mussarela} alt="Pizza de Mussarela" width={300} height={200} className="rounded-md" />
            <h3 className="font-bold mt-4">Mussarela</h3>
            <p className="mt-2">Molho, Mussarela e Tomate.</p>
            <p className="font-bold text-red-500 mt-2">R$ 39,00</p>
          </div>
          <div className="item text-center">
            <Image src={frango_catupiry} alt="Pizza de Frango C/Catupiry" width={300} height={200} className="rounded-md" />
            <h3 className="font-bold mt-4">Frango C/Catupiry</h3>
            <p className="mt-2">Molho, Mussarela e Catupiry.</p>
            <p className="font-bold text-red-500 mt-2">R$ 44,00</p>
          </div>
          <div className="item text-center">
            <Image src={portuguesa} alt="Pizza de portuguesa" width={300} height={200} className="rounded-md" />
            <h3 className="font-bold mt-4">Portuguesa</h3>
            <p className="mt-2">Molho, Presunto , Ervilha, Ovo, Cebola e Mussarela. </p>
            <p className="font-bold text-red-500 mt-2">R$ 44,00</p>
          </div>
          <div className="item text-center">
            <Image src={baiana} alt="Pizza de baiana" width={300} height={200} className="rounded-md" />
            <h3 className="font-bold mt-4">Baiana</h3>
            <p className="mt-2">Molho, Calabresa , Ovo, Cebola e Pimenta.</p>
            <p className="font-bold text-red-500 mt-2">R$ 38,00</p>
          </div>
          <div className="item text-center">
            <Image src={dois_queijos} alt="Pizza de dois queijos" width={300} height={200} className="rounded-md" />
            <h3 className="font-bold mt-4">Dois Queijos</h3>
            <p className="mt-2">Molho, Mussarela e Catupiry.</p>
            <p className="font-bold text-red-500 mt-2">R$ 44,00</p>
          </div>
          <div className="item text-center">
            <Image src={calamussa} alt="Pizza de calamussa" width={300} height={200} className="rounded-md" />
            <h3 className="font-bold mt-4">Calamussa</h3>
            <p className="mt-2">Molho, Mussarela,Tomate, Calabresa  e Cebola.</p>
            <p className="font-bold text-red-500 mt-2">R$ 45,00</p>
          </div>
          <div className="item text-center">
            <Image src={marguerita} alt="Pizza de marguerita" width={300} height={200} className="rounded-md" />
            <h3 className="font-bold mt-4">Marguerita</h3>
            <p className="mt-2">Molho, Mussarela, Tomate e Mangerição.</p>
            <p className="font-bold text-red-500 mt-2">R$ 42,00</p>
          </div>
          <div className="item text-center">
            <Image src={caipira} alt="Pizza de caipira" width={300} height={200} className="rounded-md" />
            <h3 className="font-bold mt-4">Caipira</h3>
            <p className="mt-2">Molho, Frago1, Milho e Catupiry.</p>
            <p className="font-bold text-red-500 mt-2">R$ 46,00</p>
          </div>
          {/* Repita para outros itens */}
        </div>
        <h2 className="text-2xl font-semibold mt-16">Pizzas Doces</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          <div className="item text-center">
            <Image src={chocolate_cofente} alt="Pizza de Chocolate e Confetes" width={300} height={200} className="rounded-md" />
            <h3 className="font-bold mt-4">Chocolate C/Confete</h3>
            <p className="mt-2">Chocolate e Confetes.</p>
            <p className="font-bold text-red-500 mt-2">R$ 48,00</p>
          </div>
          <div className="item text-center">
            <Image src={doce_leite} alt="Pizza de Doce de Leite" width={300} height={200} className="rounded-md" />
            <h3 className="font-bold mt-4">Doce de Leite</h3>
            <p className="mt-2">Doce de Leite.</p>
            <p className="font-bold text-red-500 mt-2">R$ 46,00</p>
          </div>
        </div>
        <h2 className="text-2xl font-semibold">Esfihas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          <div className="item-esfihas text-center">
            <Image src={esfiha_carne} alt="Esfiha de Carne" width={300} height={200} className="rounded-md" />
            <h3 className="font-bold mt-4">Esfiha de Carne</h3>
            <p className="mt-2">Carne moida, Cebola e Tomate.</p>
            <p className="font-bold text-red-500 mt-2">R$ 3,50</p>
          </div>
          <div className="item-esfihas text-center">
            <Image src={esfiha_queijo} alt="Esfiha de Queijo" width={300} height={200} className="rounded-md" />
            <h3 className="font-bold mt-4">Esfiha de Mussarela</h3>
            <p className="mt-2">Mussarela e Cheiro verde.</p>
            <p className="font-bold text-red-500 mt-2">R$ 4,00</p>
          </div>
      </div>
      /</div>
    </section>
  );
}
