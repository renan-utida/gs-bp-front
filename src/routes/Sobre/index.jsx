const Sobre = () => {
    return (
        <main className="min-h-screen mt-20 items-center relative bg-sobre bg-cover bg-center scroll-padding-top-10 pb-0">
            <div className="absolute inset-0 bg-black/50 bg-gradient-to-b from-black/50 to-black/30"></div>
            <section className="flex flex-col items-center h-full w-full relative">
                <div className=" my-32 bg-white rounded-2xl p-8 max-w-3xl w-full sm:w-4/5 md:w-3/4 lg:w-2/3 text-center shadow-lg">
                    <h1 className="text-center font-bold text-4xl mb-4 text-xl sm:text-3xl md:text-4xl lg:text-5xl">Sobre Nós</h1>
                    <p className="text-xl mb-4 sm:text-lg md:text-xl lg:text-xl">O Bright Path surgiu com a missão de levar energia sustentável a comunidades carentes, utilizando microgrids alimentados por energia solar. Nosso projeto capta e armazena eletricidade limpa, oferecendo uma alternativa confiável e acessível para locais onde o acesso à eletricidade é limitado ou inexistente. Acreditamos que a energia é um direito básico, e queremos contribuir para um futuro onde todos possam usufruir dela de forma justa e sustentável.</p>
                    <p className="text-xl mb-4 sm:text-lg md:text-xl lg:text-xl">Nosso site permite que as pessoas acompanhem em tempo real a quantidade de energia que estamos produzindo e armazenando. Além disso, oferecemos ferramentas interativas para ajudar na compreensão e no cálculo do consumo de energia, assim como um quiz educativo sobre sustentabilidade e fontes renováveis. Nossa meta é não só fornecer energia, mas também promover a consciência ambiental e o uso responsável dos recursos naturais.</p>
                    <p className="text-xl sm:text-lg md:text-xl lg:text-xl">No Bright Path, acreditamos que um mundo sustentável é possível quando todos têm acesso à energia limpa e conhecimento para usá-la de forma consciente. Junte-se a nós nessa jornada de inclusão e transformação.</p>
                </div>
            </section>
        </main>
    );
};

export default Sobre;
