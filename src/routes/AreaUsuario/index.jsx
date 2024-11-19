import { Link } from "react-router-dom"

const AreaUsuario = () => {

    return(
        <main className="mt-20 min-h-screen w-full flex flex-col items-center relative bg-area-usuario bg-cover bg-center">
            <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-black/50 to-black/40"></div>
            <section className="relative text-center text-white font-bold mt-10 sombra-area-usuario">
                <h2 className="text-5xl">Olá, Nome!</h2>
                <p className="text-[28px] mt-4 italic">Seja bem vindo à página de usuário, sua página de conscientização!</p>
            </section>
            <section className="relative flex w-full gap-20 mt-6 px-20">
                <div className="flex flex-col items-center w-1/2 border-2 border-white rounded-xl p-6 text-white bg-green-950/70 shadow-[0px_0px_30px_rgba(255,255,255,0.6)]">
                    <h3 className="text-[32px] text-center font-bold">Calcule seus gastos!</h3>
                    <p className="text-justify mt-2 pt-3 border-t-2 text-lg border-white">Na página de cálculo energético, te ajudaremos a descobrir uma média da quantidade de energia elétrica gasta mensalmente, incentivando práticas conscientes.</p>
                    <Link to='/' className="w-full py-3 mt-5 text-center text-2xl font-bold bg-green-600 rounded-3xl border-2 border-white transition-colors duration-500 ease-in-out hover:bg-green-800">Iniciar</Link>
                </div>
                <div className="flex flex-col items-center w-1/2 border-2 border-white rounded-xl p-6 text-white bg-green-950/70 shadow-[0px_0px_30px_rgba(255,255,255,0.6)]">
                    <h3 className="text-[32px] text-center font-bold">Teste seu conhecimento!</h3>
                    <p className="text-justify mt-2 pt-3 border-t-2 text-lg border-white">Nesta página, você terá a oportunidade de aprender mais sobre energias renováveis e sustentabilidade enquanto responde a perguntas cuidadosamente elaboradas.</p>
                    <Link to='/' className="w-full py-3 mt-5 text-center text-2xl font-bold bg-green-600 rounded-3xl border-2 border-white transition-colors duration-500 ease-in-out hover:bg-green-800">Iniciar</Link>
                </div>
            </section>
            <div className="relative my-10 flex flex-col items-center md:w-72 lg:w-80 xl:w-[28rem] border-2 border-white rounded-xl px-10 py-6 text-white bg-green-950/70 shadow-[0px_0px_50px_rgba(255,255,255,0.6)]">
                <h3 className="text-[26px] font-bold">Conheça nosso projeto!</h3>
                <Link to='/' className="w-full py-3 mt-5 text-center text-2xl font-bold bg-green-600 rounded-3xl border-2 border-white transition-colors duration-500 ease-in-out hover:bg-green-800">Descubra</Link>
            </div>
        </main>
    )
}

export default AreaUsuario