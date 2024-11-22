import { Link } from 'react-router-dom'
import CardQuiz from './../../assets/images/card-quiz.png'
import CardCalculoEnergetico from './../../assets/images/card-calculo-energetico.png'
import CardGeracaoEnergia from './../../assets/images/card-geracao-energia.png'

const CardSolucoes = ({ handleRestrictedNavigation }) => {

    return(
        <section className="flex flex-col items-center max-w-full mx-20 max-sm:mx-8 max-[335px]:mx-4">
            <div className="flex flex-col md:flex-row  w-full h-auto px-7 py-7 border-4 border-black rounded-3xl mb-12 lg:mb-16 xl:mb-20 shadow-[0_0_100px_rgba(0,0,0,0.2)] hover:shadow-[0_0_50px_rgba(0,0,0,0.7)] hover:scale-[1.02] transition-all ease-in-out duration-500">
                <div className="relative flex flex-col md:w-1/2 xl:mr-10 xl:ml-5 xl:my-5">
                    <h3 className="text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold text-emerald-600 mb-2 lg:mb-6">Quiz</h3>
                    <p className="mb-5 text-justify text-lg min-[460px]:text-xl italic sm:text-2xl xl:text-[29px] xl:leading-9 ">Quiz composto por 15 perguntas alatórias relacionado à energia sustentável e inovação!</p>
                    <button onClick={() => handleRestrictedNavigation('/quiz')} className="hidden md:block text-center mt-4 w-full py-3 sm:py-4 xl:py-5 text-white font-bold text-xl sm:text-2xl xl:text-3xl bg-green-600 hover:bg-green-700 rounded-3xl border-[3px] border-black transition-colors ease-in-out duration-150 xl:absolute xl:bottom-0">Acessar</button>
                </div>
                <div className="md:w-1/2 md:ml-10 xl:ml-10 xl:mr-5 xl:my-5 flex items-center justify-center">
                    <img 
                        src={CardQuiz} 
                        alt="Imagem Energia Sustentavel" 
                        className="rounded-3xl w-full h-auto max-[380px]:h-40"/>
                </div>
                <button onClick={() => handleRestrictedNavigation('/quiz')} className="block md:hidden text-center mt-4 w-full py-3 sm:py-4 text-white font-bold text-xl sm:text-2xl bg-green-600 hover:bg-green-700 rounded-3xl border-[3px] border-black transition-colors ease-in-out duration-150">Acessar</button>
            </div>

            <div className="flex flex-col md:flex-row  w-full h-auto px-7 py-7 border-4 border-black rounded-3xl mb-12 lg:mb-16 xl:mb-20 shadow-[0_0_100px_rgba(0,0,0,0.2)] hover:shadow-[0_0_50px_rgba(0,0,0,0.7)] hover:scale-[1.02] transition-all ease-in-out duration-500">
                <div className="hidden md:flex md:w-1/2 md:mr-10 xl:mr-10 xl:ml-5 xl:my-5  md:items-center md:justify-center">
                    <img 
                        src={CardCalculoEnergetico}
                        alt="Imagem Calculo Energetico" 
                        className="rounded-3xl w-full"/>
                </div>
                <div className="relative flex flex-col md:w-1/2 xl:mr-10 xl:ml-5 xl:my-5">
                    <h3 className="text-3xl md:text-4xl lg:text-[38px] xl:text-[40px] font-extrabold text-emerald-600 mb-2 lg:mb-6">Cálculo Energético</h3>
                    <p className="mb-5 text-justify text-lg min-[460px]:text-xl italic sm:text-2xl lg:text-[27px] xl:text-[29px] xl:leading-9 ">Calcule seus gastos energéticos durante o dia a dia e saberá o quanto está gastando!</p>
                    <button onClick={() => handleRestrictedNavigation('/calculo-energetico')} className="hidden md:block text-center mt-4 w-full py-3 sm:py-4 xl:py-5 text-white font-bold text-xl sm:text-2xl xl:text-3xl bg-green-600 hover:bg-green-700 rounded-3xl border-[3px] border-black transition-colors ease-in-out duration-150 xl:absolute xl:bottom-0">Acessar</button>
                </div>
                <div className="flex md:hidden items-center justify-center">
                    <img 
                        src={CardCalculoEnergetico}
                        alt="Imagem Calculo Energetico" 
                        className="rounded-3xl w-full h-auto max-[380px]:h-40"/>
                </div>
                <button  onClick={() => handleRestrictedNavigation('/calculo-energetico')} className="block md:hidden text-center mt-4 w-full py-3 sm:py-4 text-white font-bold text-xl sm:text-2xl bg-green-600 hover:bg-green-700 rounded-3xl border-[3px] border-black transition-colors ease-in-out duration-150">Acessar</button>
            </div>

            <div className="flex flex-col md:flex-row  w-full h-auto px-7 py-7 border-4 border-black rounded-3xl mb-12 lg:mb-16 xl:mb-20 shadow-[0_0_100px_rgba(0,0,0,0.2)] hover:shadow-[0_0_50px_rgba(0,0,0,0.7)] hover:scale-[1.02] transition-all ease-in-out duration-500">
                <div className="relative flex flex-col md:w-1/2 xl:mr-10 xl:ml-5 xl:my-5">
                    <h3 className="text-3xl md:text-4xl lg:text-[38px] xl:text-[40px] font-extrabold text-emerald-600 mb-2 lg:mb-6">Geração de Energia</h3>
                    <p className="mb-5 text-justify text-lg min-[460px]:text-xl italic sm:text-2xl lg:text-[27px] xl:text-[29px] xl:leading-9 ">Verifique a geração de energia em algumas cidades em tempo real!</p>
                    <Link to='/geracao-energia' className="hidden md:block text-center mt-4 w-full py-3 sm:py-4 xl:py-5 text-white font-bold text-xl sm:text-2xl xl:text-3xl bg-green-600 hover:bg-green-700 rounded-3xl border-[3px] border-black transition-colors ease-in-out duration-150 xl:absolute xl:bottom-0">Acessar</Link>
                </div>
                <div className="md:w-1/2 md:ml-10 xl:ml-10 xl:mr-5 xl:my-5 flex items-center justify-center">
                    <img 
                        src={CardGeracaoEnergia} 
                        alt="Imagem Geracao de Energia" 
                        className="rounded-3xl w-full h-auto max-[380px]:h-40"/>
                </div>
                <Link to='/geracao-energia' className="block md:hidden text-center mt-4 w-full py-3 sm:py-4 text-white font-bold text-xl sm:text-2xl bg-green-600 hover:bg-green-700 rounded-3xl border-[3px] border-black transition-colors ease-in-out duration-150">Acessar</Link>
            </div>
        </section>
    )
}

export default CardSolucoes