import { Link } from "react-router-dom"
import { useState, useEffect} from "react";

const AreaUsuario = () => {

    // Estado para armazenar os dados do usuário logado
    const [usuarioDados, setUsuarioDados] = useState(null);

    // Carrega `usuarioDados` do `sessionStorage` ao montar o componente
    useEffect(() => {
        const usuarioDadosArmazenados = sessionStorage.getItem("usuarioDados");
        if (usuarioDadosArmazenados) {
            setUsuarioDados(JSON.parse(usuarioDadosArmazenados));
        }
    }, []);

    // Atualiza `usuarioDados` quando houver mudanças no `sessionStorage`
    useEffect(() => {
        const handleStorageChange = () => {
            const usuarioDadosAtualizados = sessionStorage.getItem("usuarioDados");
            if (usuarioDadosAtualizados) {
                setUsuarioDados(JSON.parse(usuarioDadosAtualizados));
            }
        };

        window.addEventListener("storage", handleStorageChange);
        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);
    

    // Função para buscar os dados do usuário logado
    useEffect(() => {
        const fetchUsuarioDados = async () => {
            const usuarioLogado = sessionStorage.getItem("usuario");

            if (usuarioLogado) {
                try {
                    // Verifica se o usuário inseriu um email (contém "@" e um domínio)
                    const isEmail = usuarioLogado.includes("@");
                    const queryParam = isEmail ? `email=${usuarioLogado}` : `usuario=${usuarioLogado}`;

                    const response = await fetch(`http://localhost:5002/usuarios?${queryParam}`);
                    const data = await response.json();
                    if (data.length > 0) {
                        setUsuarioDados(data[0]); // Atualiza os dados do usuário no estado
                    }
                } catch (error) {
                    console.error("Erro ao buscar dados do usuário:", error);
                }
            }
        };

        fetchUsuarioDados();
    }, []);

    return(
        <main className="mt-20 min-h-screen w-full flex flex-col items-center relative bg-area-usuario bg-cover bg-center">
            <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/50 to-black/40"></div>
            <section className="relative text-center text-white font-bold mt-10 sombra-area-usuario">
                <h2 className="text-[30px] max-[500px]:text-[34px] min-[400px]:text- min-[500px]:text-4xl lg:text-5xl">Olá, {usuarioDados ? usuarioDados.nome : "Nome"}!</h2>
                <p className="max-[400px]:text-[17px] max-[500px]:text-lg max-lg:text-xl max-md:text-[19px] lg:text-2xl xl:text-[28px] max-md:px-5 mt-4 italic">Seja bem vindo à página de usuário, sua página de conscientização!</p>
            </section>
            <section className="relative flex flex-col max-lg:items-center lg:flex-row w-full max-lg:gap-16 max-md:gap-12 gap-20 mt-8 lg:mt-10 sm:px-20">
                <div className="flex flex-col items-center max-sm:w-10/12 max-lg:w-3/4 w-1/2 border-2 border-white rounded-xl p-6 max-[400px]:px-4 text-white bg-green-950/70 shadow-[0px_0px_20px_rgba(255,255,255,0.6)]">
                    <h3 className="text-[23px] min-[500px]:text-2xl md:text-3xl xl:text-4xl text-center font-bold">Calcule seus gastos!</h3>
                    <p className="text-justify mt-3 xl:mt-2 pt-4 xl:pt-3 border-t-2 text-base min-[500px]:text-lg lg:text-xl xl:text-2xl border-white lg:max-xl:mb-2">Na página de cálculo energético, te ajudaremos a descobrir uma média da quantidade de energia elétrica gasta mensalmente, incentivando práticas conscientes.</p>
                    <Link to='/calculo-energetico' className="w-full py-3 lg:py-5 mt-5 text-center max-md:text-xl text-2xl xl:text-3xl font-bold bg-green-600 rounded-3xl border-2 border-white transition-colors duration-500 ease-in-out hover:bg-green-800">Iniciar</Link>
                </div>
                <div className="flex flex-col items-center max-sm:w-10/12 max-lg:w-3/4 w-1/2 border-2 border-white rounded-xl p-6 max-[400px]:px-4 text-white bg-green-950/70 shadow-[0px_0px_20px_rgba(255,255,255,0.6)]">
                    <h3 className="text-[23px] min-[500px]:text-2xl md:text-[28px] xl:text-[35px] lg:text-[26px] text-center font-bold">Teste seu conhecimento!</h3>
                    <p className="text-justify mt-3 xl:mt-2 pt-4 xl:pt-3 border-t-2 text-base min-[500px]:text-lg lg:text-xl xl:text-2xl border-white lg:max-xl:mb-2">Nesta página, você terá a oportunidade de aprender mais sobre energias renováveis e sustentabilidade enquanto responde a perguntas cuidadosamente elaboradas.</p>
                    <Link to='/quiz' className="w-full py-3 lg:py-5 mt-5 text-center max-md:text-xl text-2xl xl:text-3xl font-bold bg-green-600 rounded-3xl border-2 border-white transition-colors duration-500 ease-in-out hover:bg-green-800">Iniciar</Link>
                </div>
            </section>
            <section className="relative flex flex-col items-center max-lg:items-center w-full gap-20 mt-6 sm:px-20">
                <div className="my-8 lg:my-10 flex flex-col items-center max-sm:w-10/12 max-lg:w-3/4 w-1/2 border-2 border-white rounded-xl p-6 max-[400px]:px-4 text-white bg-green-950/70 shadow-[0px_0px_20px_rgba(255,255,255,0.6)]">
                    <h3 className="text-xl min-[500px]:text-2xl md:text-[28px] xl:text-[33px] lg:text-[26px] text-center font-bold">Conheça mais nosso projeto!</h3>
                    <p className="text-justify mt-3 xl:mt-2 pt-4 xl:pt-3 border-t-2 text-base min-[500px]:text-lg lg:text-xl xl:text-2xl border-white lg:max-xl:mb-2">Nesta página, você descubrirá tudo sobre a Bright Path e nossos objetivos. Aqui, apresentamos de forma clara e direta a essência do projeto, incluindo nossa missão, visão e valores.</p>
                    <Link to='/sobre' className="w-full py-3 lg:py-5 mt-5 text-center max-md:text-xl text-2xl xl:text-3xl font-bold bg-green-600 rounded-3xl border-2 border-white transition-colors duration-500 ease-in-out hover:bg-green-800">Descubra</Link>
                </div>
            </section>
        </main>
    )
}

export default AreaUsuario