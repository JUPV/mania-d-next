export default function FeedbackSection() {
  return (
    <section className="feedback-section py-20 bg-gray-100 dark:bg-fundo-dark">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="feedback-text text-center md:text-left md:w-1/2">
          <h4 className="text-xl text-red-500 font-bold">FeedBack&apos;s</h4>
          <h1 className="text-3xl font-bold mt-4">Feedback é a bússola que nos guia rumo à excelência.</h1>
          <a
            href="https://wa.link/21m2k4"
            className="mt-8 inline-block bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale Conosco
          </a>
        </div>
        <div className="feedback-carousel md:w-1/2 mt-12 md:mt-0">
          <div className="feedback-card p-4 bg-white rounded-md shadow-lg">
          <p className="text-lg">
            &quot;Quero parabenizar vocês. Estava simplesmente divino, todas muito bem temperadas e saborosas, mas a de <strong>Carne</strong> foi...&quot;
          </p>
          </div>
          {/* Adicione outros cards de feedback aqui */}
        </div>
      </div>
    </section>
  );
}
