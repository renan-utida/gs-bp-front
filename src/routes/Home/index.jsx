import CardSolucoes from "./CardsSolucoes.jsx"
import Slideshow from "./Slideshow.jsx"

const Home = () => {

    return(
        <main className="pt-20">
            <Slideshow />
            <h2 className="mx-7 text-center text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-5xl py-14 xl:py-20 font-extrabold text-green-600">Explore Nossas Soluções Sustentáveis!</h2>
            <CardSolucoes/>
        </main>
    )
}

export default Home