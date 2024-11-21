import { FaEye, FaEyeSlash } from "react-icons/fa6";

import { useState, useEffect, useRef } from "react";

const Perfil = () => {

    const [usuarioDados, setUsuarioDados] = useState(null);
    const [senhaVisivel, setSenhaVisivel] = useState(false);

    useEffect(() => {
        const fetchUsuarioDados = async () => {
            const usuarioLogado = sessionStorage.getItem("usuario");
            if (usuarioLogado) {
                const usuarioDadosArmazenados = sessionStorage.getItem("usuarioDados");
                if (usuarioDadosArmazenados) {
                    setUsuarioDados(JSON.parse(usuarioDadosArmazenados));
                } else {
                    try {
                        const isEmail = usuarioLogado.includes("@");
                        const queryParam = isEmail ? `email=${usuarioLogado}` : `usuario=${usuarioLogado}`;
                        const response = await fetch(`http://localhost:5002/usuarios?${queryParam}`);
                        const data = await response.json();
                        if (data.length > 0) {
                            setUsuarioDados(data[0]);
                            sessionStorage.setItem("usuarioDados", JSON.stringify(data[0]));
                        }
                    } catch (error) {
                        console.error("Erro ao buscar dados do usuário:", error);
                    }
                }
            }
        };

        fetchUsuarioDados();
    }, []);

    const toggleSenhaVisivel = () => {
        setSenhaVisivel(prevVisivel => !prevVisivel);
    };

    if (!usuarioDados) return <p>Carregando dados...</p>;

    const { avatar, nome, sobrenome, email, usuario, senha } = usuarioDados;

    return (
        <main className="mt-20 min-h-[calc(100vh-80px)] w-full flex flex-col items-center bg-area-usuario relative bg-cover bg-center">
            <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/50 to-black/40"></div>
            <section className="relative rounded-3xl border-4 border-emerald-300 bg-green-950/70 shadow-[0px_0px_15px_rgba(255,255,255,0.6)] backdrop-blur-sm text-white w-[30rem] min-h-96 mx-10 py-5 px-10 my-auto flex flex-col sombra-login">
                <h2 className="text-center mt-1 mb-2 text-3xl font-bold">Informações de Perfil</h2>
                <div className="flex flex-row mt-5">
                    <div className="flex flex-col justify-between items-center grow-0 mr-5">
                        <img className="w-[120px] h-[120px] rounded-full mr-[5px] border-[3px] border-green-700 bg-white" src={avatar} alt="Icone - Avatar"/> {/*Aqui vai a Imagem */}
                        <h4 className="text-xl mt-2 font-bold text-white">{usuario}</h4>
                    </div>
                    <div className="flex flex-col justify-between grow-[1] ml-2">
                        <h3 className="text-xl font-bold text-emerald-400">Nome:</h3>
                        <p className="text-white italic text-2xl font-bold">{nome}</p>{/*Aqui vai o nome*/}
                        <h3 className="text-xl font-bold text-emerald-400">Sobrenome:</h3>
                        <p className="text-white italic text-2xl font-bold">{sobrenome}</p>{/*Aqui vai o sobrenome*/}
                    </div>
                </div>
                <div className="flex flex-col mt-4 pt-4 border-t-[1px] border-dashed border-emerald-300">
                    <h3 className="text-xl font-bold text-emerald-400">Email:</h3>
                    <p className="text-white italic text-2xl font-bold pt-1 pb-4">{email}</p>{/*Aqui vai o email*/}
                    <h3 className="text-xl font-bold text-emerald-400">Senha:</h3>
                    <div className="flex flex-row justify-between">
                        <p className="text-white italic text-2xl font-bold pt-1 pb-4">{senhaVisivel ? senha : "*".repeat(senha.length)}</p>
                        {senhaVisivel ? (
                            <FaEye className="mt-2 text-[26px] text-emerald-400 cursor-pointer transition-colors duration-500 ease-in-out hover:text-emerald-600" onClick={toggleSenhaVisivel} />
                        ) : (
                            <FaEyeSlash className="mt-2 text-[26px] text-emerald-400 cursor-pointer transition-colors duration-500 ease-in-out hover:text-emerald-600" onClick={toggleSenhaVisivel} />
                        )}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Perfil





  