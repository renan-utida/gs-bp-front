import { Link } from "react-router-dom"

const AreaUsuario = () => {

    return(
        <main className="mt-20 min-h-screen w-full flex flex-col items-center relative bg-area-usuario bg-cover bg-center">
            <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/50 to-black/40"></div>
            <section className="relative text-center text-white font-bold mt-10 sombra-area-usuario">
                <h2 className="text-[30px] max-[500px]:text-[34px] min-[400px]:text- min-[500px]:text-4xl lg:text-5xl">Olá, Nome!</h2>
                <p className="max-[400px]:text-[17px] max-[500px]:text-lg max-lg:text-xl max-md:text-[19px] lg:text-2xl xl:text-[28px] max-md:px-5 mt-4 italic">Seja bem vindo à página de usuário, sua página de conscientização!</p>
            </section>
            <section className="relative flex flex-col max-lg:items-center lg:flex-row w-full max-lg:gap-16 max-md:gap-12 gap-20 mt-8 lg:mt-10 sm:px-20">
                <div className="flex flex-col items-center max-sm:w-10/12 max-lg:w-3/4 w-1/2 border-2 border-white rounded-xl p-6 max-[400px]:px-4 text-white bg-green-950/70 shadow-[0px_0px_20px_rgba(255,255,255,0.6)]">
                    <h3 className="text-[23px] min-[500px]:text-2xl md:text-3xl xl:text-4xl text-center font-bold">Calcule seus gastos!</h3>
                    <p className="text-justify mt-3 xl:mt-2 pt-4 xl:pt-3 border-t-2 text-base min-[500px]:text-lg border-white lg:max-xl:mb-2">Na página de cálculo energético, te ajudaremos a descobrir uma média da quantidade de energia elétrica gasta mensalmente, incentivando práticas conscientes.</p>
                    <Link to='/' className="w-full py-3 mt-5 text-center max-md:text-xl text-2xl font-bold bg-green-600 rounded-3xl border-2 border-white transition-colors duration-500 ease-in-out hover:bg-green-800">Iniciar</Link>
                    <h4 className="w-full mt-8 pt-4 border-t-2 border-white font-bold max-[500px]:text-base max-md:text-lg max-lg:text-xl lg:text-[21px] xl:text-2xl">Status do último cálculo feito:</h4>
                    <p className="text-[15px] min-[500px]:text-base md:text-lg lg:text-[17px] xl:text-lg w-full text-green-500 font-bold mt-1">Tudo Ok</p>
                    <p className="text-[15px] min-[500px]:text-base lg:text-[17px] xl:text-lg w-full text-white font-bold mt-1">Resultado: <span className="text-green-500">1000 kWh/mês</span></p>
                </div>
                <div className="flex flex-col items-center max-sm:w-10/12 max-lg:w-3/4 w-1/2 border-2 border-white rounded-xl p-6 max-[400px]:px-4 text-white bg-green-950/70 shadow-[0px_0px_20px_rgba(255,255,255,0.6)]">
                    <h3 className="text-[23px] min-[500px]:text-2xl md:text-[28px] xl:text-[35px] lg:text-[26px] text-center font-bold">Teste seu conhecimento!</h3>
                    <p className="text-justify mt-3 xl:mt-2 pt-4 xl:pt-3 border-t-2 text-base min-[500px]:text-lg lg:text-[17px] xl:text-base border-white lg:max-xl:mb-2">Nesta página, você terá a oportunidade de aprender mais sobre energias renováveis e sustentabilidade enquanto responde a perguntas cuidadosamente elaboradas.</p>
                    <Link to='/quiz' className="w-full py-3 mt-5 text-center max-md:text-xl text-2xl font-bold bg-green-600 rounded-3xl border-2 border-white transition-colors duration-500 ease-in-out hover:bg-green-800">Iniciar</Link>
                    <h4 className="w-full mt-8 pt-4 border-t-2 border-white font-bold max-[500px]:text-base max-md:text-lg max-lg:text-xl lg:text-[21px] xl:text-2xl">Status do último quiz feito:</h4>
                    <p className="text-[15px] min-[500px]:text-base md:text-lg lg:text-[17px] xl:text-lg w-full text-green-500 font-bold mt-1">Está de parabéns! Gabaritou!</p>
                    <p className="text-[15px] min-[500px]:text-base lg:text-[17px] xl:text-lg w-full text-white font-bold mt-1">Resultado: <span className="text-green-500">15/15</span> </p>
                </div>
            </section>
            <section className="relative flex flex-col items-center max-lg:items-center w-full gap-20 mt-6 sm:px-20">
                <div className="my-8 lg:my-10 flex flex-col items-center max-sm:w-10/12 max-lg:w-3/4 w-1/2 border-2 border-white rounded-xl p-6 max-[400px]:px-4 text-white bg-green-950/70 shadow-[0px_0px_20px_rgba(255,255,255,0.6)]">
                    <h3 className="text-xl min-[500px]:text-2xl md:text-[28px] xl:text-[33px] lg:text-[26px] text-center font-bold">Conheça mais nosso projeto!</h3>
                    <p className="text-justify mt-3 xl:mt-2 pt-4 xl:pt-3 border-t-2 text-base min-[500px]:text-lg lg:text-[17px] xl:text-base border-white lg:max-xl:mb-2">Nesta página, você descubrirá tudo sobre a Bright Path e nossos objetivos. Aqui, apresentamos de forma clara e direta a essência do projeto, incluindo nossa missão, visão e valores.</p>
                    <Link to='/sobre' className="w-full py-3 mt-7 text-center text-2xl font-bold bg-green-600 rounded-3xl border-2 border-white transition-colors duration-500 ease-in-out hover:bg-green-800">Descubra</Link>
                </div>
            </section>
        </main>
    )
}

export default AreaUsuario