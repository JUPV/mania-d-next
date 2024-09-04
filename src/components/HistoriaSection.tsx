import Image from 'next/image';
import grocery from '@/assets/grocery.png'
import sobre from '@/assets/sobre.jpg'

export default function HistoriaSection() {
  return (
    <section id="nossa-historia" className="historia py-20 bg-gray-50 dark:bg-fundo-dark">
      <div className="container mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
        <div className="imagem relative w-full md:w-1/2">
          <Image
            src={sobre}
            alt="Mão preparando esfiha"
            layout="responsive"
            width={600}
            height={400}
            className="rounded-md"
          />
          <div className="caixa-sonho absolute bottom-0 left-0 bg-white p-4 rounded-md shadow-lg flex items-center space-x-4">
            <div className="icone">
              <Image src={grocery} alt="Ícone" width={50} height={50} />
            </div>
            <div className="texto-sonho">
              <h3 className="font-bold text-lg">Renasci com um sonho</h3>
              <p>Criei a Mania D Esfiharia para transformar cada mordida em uma celebração de sabor e paixão.</p>
            </div>
          </div>
        </div>
        <div className="conteudo w-full md:w-1/2">
          <h2 className="text-xl font-semibold text-red-500">Nossa História</h2>
          <h1 className="text-3xl font-bold mt-4">Renascendo Sabores: A Paixão que Deu Vida à Mania D Esfiharia</h1>
          <p className="mt-6 text-lg">
            Em novembro de 2022, a vida me deu a chance de retomar um sonho: trabalhar com alimentação. Após o fechamento de meu primeiro estabelecimento, vi a oportunidade de me reinventar, criando a Mania D Esfiharia. O nome reflete o amor e a dedicação em cada receita, com ingredientes frescos e de alta qualidade. Nossa missão é oferecer não apenas comida, mas uma experiência que encanta e traz felicidade em cada mordida.
          </p>
        </div>
      </div>
    </section>
  );
}
