import { FaRecycle } from "react-icons/fa6";

const Sobre = () => {
    return (
        <main className="min-h-screen mt-20 items-center relative bg-sobre bg-cover bg-center scroll-padding-top-10 pb-0">
            <div className="absolute inset-0 bg-black/50 bg-gradient-to-b from-black/50 to-black/30"></div>
            <section className="flex flex-col items-center h-full w-full px-4 min-[450px]:px-6 sm:px-10 md:px-14 lg:px-20 relative">
                <div className="my-10 sm:my-14 bg-slate-100/80 backdrop-blur-sm rounded-2xl py-5 px-6 sm:p-8 max-w-5xl w-full  text-center border-8 border-green-700">
                    <div className="flex flex-row items-center justify-center gap-5">
                        <h1 className="text-center font-bold text-[29px] min-[450px]:text-3xl mb-3 sm:mb-5 lg:mb-7 sm:text-4xl md:text-[40px] lg:text-5xl text-green-700">Sobre Nós</h1>
                        <FaRecycle className="text-green-700 text-4xl sm:text-5xl sm:mb-5 lg:mb-7 mb-3"/>
                    </div>
                    <p className="text-base min-[450px]:text-lg mb-4 sm:text-xl xl:text-2xl text-justify indent-8 min-[450px]:indent-11 sm:indent-14 lg:indent-16 xl:indent-20">A Bright Path surgiu com a missão de levar energia sustentável a comunidades carentes, utilizando microgrids alimentados por energia solar. Nosso projeto capta e armazena eletricidade limpa, oferecendo uma alternativa confiável e acessível para locais onde o acesso à eletricidade é limitado ou inexistente. Acreditamos que a energia é um direito básico, e queremos contribuir para um futuro onde todos possam usufruir dela de forma justa e sustentável.</p>
                    <p className="text-base min-[450px]:text-lg mb-4 sm:text-xl xl:text-2xl text-justify indent-8 min-[450px]:indent-11 sm:indent-14 lg:indent-16 xl:indent-20">Nosso site permite que as pessoas acompanhem em tempo real a quantidade de energia que estamos produzindo e armazenando. Além disso, oferecemos ferramentas interativas para ajudar na compreensão e no cálculo do consumo de energia, assim como um quiz educativo sobre sustentabilidade e fontes renováveis. Nossa meta é não só fornecer energia, mas também promover a consciência ambiental e o uso responsável dos recursos naturais.</p>
                    <p className="text-base min-[450px]:text-lg mb-4 sm:text-xl xl:text-2xl text-justify indent-8 min-[450px]:indent-11 sm:indent-14 lg:indent-16 xl:indent-20">Na Bright Path, acreditamos que um mundo sustentável é possível quando todos têm acesso à energia limpa e conhecimento para usá-la de forma consciente. Junte-se a nós nessa jornada de inclusão e transformação.</p>
                    <p className="text-lg min-[450px]:text-xl mb-4 sm:text-2xl xl:text-3xl text-center italic font-bold mt-5 sm:mt-8 lg:mt-10 text-green-700">A Bright Path agradece a sua visita em nosso site!</p>
                </div>
            </section>
        </main>
    );
};

export default Sobre;
