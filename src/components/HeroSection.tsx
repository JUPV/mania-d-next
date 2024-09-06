export default function HeroSection() {
  return (
    <section id="home" className="hero bg-cover bg-center py-20 flex flex-col gap-6 ml-10">
      <h1 className="text-5xl font-bold text-red-600 max-w-2xl">Mania D Esfiharia – Sabor que Vicia, Tradição que Conquista!</h1>
      <h2 className="text-2xl mt-4 text-white font-bold">Uma fatia de felicidade em cada pedaço.</h2>
      <p className="mt-6 text-lg text-white max-w-2xl">
        Na Mania D Esfiharia, cada mordida é uma experiência autêntica de sabores, feita com ingredientes frescos e uma receita tradicional que conquista corações. Se ainda não provou, prepare-se para se apaixonar!
      </p>
      <a href="#nossa-historia" className="mt-8 inline-block bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded w-80 text-center">
        Conheça a Nossa História
      </a>
    </section>
  );
}
