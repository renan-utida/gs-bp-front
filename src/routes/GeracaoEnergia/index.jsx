import InfoEnergia from "./InfoEnergia"

const GeracaoEnergia = () => {

    return(
        <main className="mt-20 min-h-screen relative bg-geracao-energia bg-cover bg-center">
            <div className="absolute inset-0 bg-black/50 bg-gradient-to-b from-black/70 to-black/10"></div>
            <section className="relative w-full h-full">
                <div className="flex flex-col pt-8 lg:pt-10 xl:pt-12 text-center px-5 sm:px-8 md:px-10 xl:px-12">
                    <h2     
                        className="text-yellow-500 text-[28px] sm:text-[33px] font-bold md:text-[41px] lg:text-5xl xl:text-6xl"
                        style={{textShadow: '3px 3px 10px rgba(255, 255, 255, 0.38)',}}
                        >
                        Geração de Energia Bright Path!
                    </h2>
                    <p className="text-white italic mt-1 lg:pt-3 px-1 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Verifique a geração de energia em alguns bairros em São Paulo!</p>
                </div>
                <InfoEnergia/>
            </section>
        </main>
    )
} 

export default GeracaoEnergia