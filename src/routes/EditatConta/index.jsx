import { useEffect, useState } from "react";

import { FaRegEdit } from "react-icons/fa"
import { FaEye, FaEyeSlash, FaXmark } from "react-icons/fa6"

import UsuarioImg from "./../../assets/images/usuario-login.png"
import UsuarioImg1 from "./../../assets/images/usuario-login1.png"
import UsuarioImg2 from "./../../assets/images/usuario-login2.png"
import UsuarioImg3 from "./../../assets/images/usuario-login3.png"
import UsuarioImg4 from "./../../assets/images/usuario-login4.png"
import UsuarioImg5 from "./../../assets/images/usuario-login5.png"
import UsuarioImg6 from "./../../assets/images/usuario-login6.png"
import UsuarioImg7 from "./../../assets/images/usuario-login7.png"
import UsuarioImg8 from "./../../assets/images/usuario-login8.png"
import UsuarioImg9 from "./../../assets/images/usuario-login9.png"

const EditarConta = () => {

    const [usuarioDados, setUsuarioDados] = useState(null);
    const [modalConfirmacao, setModalConfirmacao] = useState(false);
    const [modalEdicao, setModalEdicao] = useState(false);
    const [campoParaEditar, setCampoParaEditar] = useState("");
    const [dadoAtual, setDadoAtual] = useState(""); // Novo estado para o dado atual
    const [novoDado, setNovoDado] = useState("");
    const [confirmarNovoDado, setConfirmarNovoDado] = useState(""); // Novo estado para confirmação de senha
    const [mostrarSenhaAtual, setMostrarSenhaAtual] = useState(false); // Controle da visibilidade da senha
    const [mostrarNovaSenha, setMostrarNovaSenha] = useState(false);
    const [mostrarConfirmacaoSenha, setMostrarConfirmacaoSenha] = useState(false);
    const [emailValido, setEmailValido] = useState(true);
    const [nomeValido, setNomeValido] = useState(true);
    const [sobrenomeValido, setSobrenomeValido] = useState(true);
    const [senhaValida, setSenhaValida] = useState(false);
    const [senhaConfirmada, setSenhaConfirmada] = useState(true);
    const [modalEditAvatar, setModalEditAvatar] = useState(false); // Novo estado para o modal de avatar

    // Desativa o scroll enquanto o modal estiver aberto
    useEffect(() => {
        if (modalConfirmacao || modalEdicao || modalEditAvatar) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    
        // Limpeza para restaurar o overflow quando o componente desmonta
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [modalConfirmacao, modalEdicao, modalEditAvatar]);
    
    useEffect(() => {
        const usuarioLogado = sessionStorage.getItem("usuario");
        const usuarioSalvo = JSON.parse(sessionStorage.getItem("usuarioDados"));
        
        // Carrega dados do sessionStorage caso estejam disponíveis
        if (usuarioSalvo) {
            setUsuarioDados(usuarioSalvo);
        } else if (usuarioLogado) {
            const tipo = usuarioLogado.includes("@") ? "email" : "usuario";
            fetch(`http://localhost:5003/usuarios?${tipo}=${usuarioLogado}`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.length > 0) {
                        setUsuarioDados(data[0]);
                        // Armazena os dados do usuário no sessionStorage
                        sessionStorage.setItem("usuarioDados", JSON.stringify(data[0]));
                    }
                })
                .catch((error) => console.error("Erro ao buscar dados do usuário:", error));
        }
    }, []);

    const abrirModalConfirmacao = (campo) => {
        setCampoParaEditar(campo);
        setModalConfirmacao(true);
    };

    const fecharModal = () => {
        setModalConfirmacao(false);
        setModalEdicao(false);
        setModalEditAvatar(false);
    };

    const abrirModalEditAvatar = () => {
        setModalConfirmacao(false);
        setModalEditAvatar(true);
    };

    const abrirModalEdicao = () => {
        setDadoAtual(""); // Limpa o campo do dado atual
        setNovoDado(""); // Limpa o campo do novo dado
        setConfirmarNovoDado(""); // Limpa o campo de confirmação
        setModalConfirmacao(false);
        setModalEdicao(true);
    };

    const capitalizeWords = (str) => {
        return str.replace(/\b\w/g, (char) => char.toUpperCase());
    };

    const handleNovoDadoChange = (e) => {
        const value = e.target.value;
        setNovoDado(value);

        // Validação da senha com os critérios especificados
        const isSenhaValida = value.length >= 8 && /[A-Z]/.test(value) && /\d/.test(value);
        setSenhaValida(isSenhaValida);

        if (campoParaEditar === "email") {
            setEmailValido(value.includes("@"));
        } else if (campoParaEditar === "nome") {
            const isValid = /^[A-Za-zÀ-ÿ\s]+$/.test(value); // Verifica se contém apenas letras e espaços
            setNomeValido(isValid);
            if (isValid) {
                setNovoDado(capitalizeWords(value));
            }
        } else if (campoParaEditar === "sobrenome") {
            const isValid = /^[A-Za-zÀ-ÿ\s]+$/.test(value); // Verifica se contém apenas letras e espaços
            setSobrenomeValido(isValid);
            if (isValid) {
                setNovoDado(capitalizeWords(value));
            }
        }
    };

    const handleConfirmarNovoDadoChange = (e) => {
        const value = e.target.value;
        setConfirmarNovoDado(value);

        // Verificação se a confirmação da senha é igual à nova senha
        setSenhaConfirmada(value === novoDado);
    };

    // Estado para armazenar a imagem selecionada
    const [selectedImage, setSelectedImage] = useState(UsuarioImg);

    // Função para atualizar a imagem selecionada ao clicar em uma imagem de sugestão
    const handleImageSelect = (imgSrc) => {
        setSelectedImage(imgSrc);
    };

    // Função para salvar a imagem selecionada como avatar
    const handleSaveAvatar = () => {
        if (!selectedImage) return;

        // Atualizar o avatar no backend
        fetch(`http://localhost:5002/usuarios/${usuarioDados.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ avatar: selectedImage }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao atualizar o avatar");
            }
            return response.json();
        })
        .then(updatedData => {
            // Atualiza o estado local e sessionStorage com o novo avatar
            setUsuarioDados(prev => ({ ...prev, avatar: selectedImage }));
            sessionStorage.setItem("usuarioDados", JSON.stringify(updatedData));
            
            alert("Avatar atualizado com sucesso!");
            fecharModal(); // Fecha o modal após salvar
        })
        .catch(error => console.error("Erro ao salvar o avatar:", error));
    };

    const handleEditar = () => {

        if (campoParaEditar === "email" && !emailValido) {
            alert("O email deve conter o caractere '@'. Tente novamente!");
            return;
        }

        if (campoParaEditar === "nome" && !nomeValido) {
            alert("O nome deve conter apenas letras. Tente novamente!");
            return;
        }

        if (campoParaEditar === "sobrenome" && !sobrenomeValido) {
            alert("O sobrenome deve conter apenas letras. Tente novamente!");
            return;
        }

        if (campoParaEditar === "senha" && (!senhaValida || !senhaConfirmada)) {
            alert("A senha deve atender aos requisitos ou a confirmação da senha não coincide. Tente novamente!");
            return;
        }

        if (dadoAtual === usuarioDados[campoParaEditar]) {
            
            if (campoParaEditar === "senha" && novoDado !== confirmarNovoDado) {
                alert("As senhas não correspondem. Tente novamente.");
                return;
            }
            
            // Se o dado atual estiver correto, continue com a atualização
            fetch(`http://localhost:5002/usuarios/${usuarioDados.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ [campoParaEditar]: novoDado }),
            })
                .then(response => response.json())
                .then(updatedData => {
                    setUsuarioDados(updatedData); // Atualiza os dados localmente

                    // Armazenar nome diretamente
                    sessionStorage.setItem("nome", updatedData.nome);

                    // Gerar um token para email e usuário
                    let tokenEmail = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
                    let tokenUsuario = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);

                    // Armazenar os tokens no sessionStorage
                    sessionStorage.setItem("email", tokenEmail); // "Criptografando" o email
                    sessionStorage.setItem("usuario", tokenUsuario); // "Criptografando" o usuário
                    
                    sessionStorage.setItem("usuarioDados", JSON.stringify(updatedData));
                    alert(`${campoParaEditar.charAt(0).toUpperCase() + campoParaEditar.slice(1)} alterado com sucesso!`);
                    fecharModal();
                })
                .catch((error) => console.error("Erro ao atualizar os dados:", error));
        } else {
            alert("O dado atual está incorreto. Tente novamente.");
        }
    };

    if (!usuarioDados) return <p>Carregando dados...</p>;

    const { nome, sobrenome, usuario, email, senha, avatar } = usuarioDados;

    return(
        <main className="mt-20 min-h-[calc(100vh-80px)] w-full flex flex-col items-center relative bg-editar-conta bg-cover bg-center sombra-login">
            <div className="absolute inset-0 bg-black/55 bg-gradient-to-b from-black/50 to-black/40"></div>
            <h1 className="relative text-white font-bold mt-7 text-3xl min-[500px]:text-4xl md:text-[40px]">Editar Conta</h1>
            <section className="relative border-4 w-[17rem] min-[500px]:w-80 sm:w-96 md:w-[30rem] min-h-96 py-5 sm:py-8 px-6 sm:px-10 mt-5 mb-20 mx-10 border-emerald-300 rounded-3xl bg-green-950/70 backdrop-blur-sm text-white shadow-[0px_0px_20px_rgba(255,255,255,0.6)]">

                {/* Avatar */}
                <div className="flex flex-col border-b-[1px] border-dashed border-emerald-200">
                    <div>
                        <h2 className="text-lg min-[500px]:text-xl sm:text-2xl font-bold text-emerald-400">Avatar:</h2>
                        <div className="flex flex-col items-center">
                            <img src={usuarioDados.avatar || UsuarioImg} alt="Icone Avatar" className="w-28 min-[500px]:w-[125px] sm:w-[140px] h-28 min-[500px]:h-[125px] sm:h-[140px] rounded-full border-4 border-green-700 object-cover"/>
                        </div>
                    </div>
                    <a onClick={() => abrirModalConfirmacao("avatar")} className="my-[10px] text-center text-base md:text-lg lg:text-xl font-bold text-emerald-300 cursor-pointer transition-colors duration-500 ease-in-out hover:text-emerald-600">Editar Avatar</a>
                </div>

                {/* Nome */}
                <div className="flex justify-between my-[10px] border-b-[1px] border-dashed border-emerald-200">
                    <div>
                        <h2 className="text-base min-[500px]:text-lg sm:text-xl font-bold text-emerald-400">Nome:</h2>
                        <p className="text-white italic text-[19px] min-[500px]:text-xl sm:text-2xl font-bold mt-[10px] mb-[15px]">{nome}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <FaRegEdit onClick={() => abrirModalConfirmacao("nome")} className="text-xl sm:text-2xl cursor-pointer text-green-400 transition-colors duration-500 ease-in-out hover:text-red-600"/>
                    </div>
                </div>

                {/* Sobrenome */}  
                <div className="flex justify-between my-[10px] border-b-[1px] border-dashed border-emerald-200">
                    <div>
                        <h2 className="text-base min-[500px]:text-lg sm:text-xl font-bold text-emerald-400">Sobrenome:</h2>
                        <p className="text-white italic text-[19px] min-[500px]:text-xl sm:text-2xl font-bold mt-[10px] mb-[15px]">{sobrenome}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <FaRegEdit onClick={() => abrirModalConfirmacao("sobrenome")} className="text-xl sm:text-2xl cursor-pointer text-green-400 transition-colors duration-500 ease-in-out hover:text-red-600"/>
                    </div>
                </div>

                {/* Usuario */}
                <div className="flex justify-between my-[10px] border-b-[1px] border-dashed border-emerald-200">
                    <div>
                        <h2 className="text-base min-[500px]:text-lg sm:text-xl font-bold text-emerald-400">Usuário:</h2>
                        <p className="text-white italic text-[19px] min-[500px]:text-xl sm:text-2xl font-bold mt-[10px] mb-[15px]">{usuario}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <FaRegEdit onClick={() => abrirModalConfirmacao("usuario")} className="text-xl sm:text-2xl cursor-pointer text-green-400 transition-colors duration-500 ease-in-out hover:text-red-600"/>
                    </div>
                </div>

                {/* Email */}
                <div className="flex justify-between my-[10px] border-b-[1px] border-dashed border-emerald-200">
                    <div>
                        <h2 className="text-base min-[500px]:text-lg sm:text-xl font-bold text-emerald-400">Email:</h2>
                        <p className="text-white italic text-[19px] min-[500px]:text-xl sm:text-2xl font-bold mt-[10px] mb-[15px]">{email}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <FaRegEdit onClick={() => abrirModalConfirmacao("email")} className="text-xl sm:text-2xl cursor-pointer text-green-400 transition-colors duration-500 ease-in-out hover:text-red-600"/>
                    </div>
                </div>

                {/* Senha */}
                <div className="flex justify-between my-[10px] border-b-[1px] border-dashed border-emerald-200">
                    <div>
                        <h2 className="text-base min-[500px]:text-lg sm:text-xl font-bold text-emerald-400">Senha:</h2>
                        <p className="text-white italic text-[19px] min-[500px]:text-xl sm:text-2xl font-bold mt-[10px] mb-[15px]">{"*".repeat(senha.length)}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <FaRegEdit onClick={() => abrirModalConfirmacao("senha")} className="text-xl sm:text-2xl cursor-pointer text-green-400 transition-colors duration-500 ease-in-out hover:text-red-600"/>
                    </div>
                </div>

            </section>

            {(modalConfirmacao || modalEdicao || modalEditAvatar) && <div onClick={fecharModal} className="fixed top-0 left-0 w-full h-full duration-100 bg-black/60 z-40"></div>}
            {modalConfirmacao && (
                <div className="shadow-modal-conta flex flex-col justify-around fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-950 text-white rounded-3xl p-5 border-[3px] border-white/80 z-50 w-auto min-[400px]:min-w-80 min-[530px]:min-w-[25rem] sm:min-w-[32rem] md:min-w-[34rem] lg:min-w-[39rem] xl:min-w-[45rem]">
                    <FaXmark onClick={fecharModal} className="absolute top-4 right-4 sm:top-3 md:top-4 md:right-4 text-4xl sm:text-5xl cursor-pointer text-yellow-600 transition-colors duration-500 ease-in-out hover:text-yellow-800"/>
                    <h3 className="text-xl sm:text-2xl md:text-[27px] xl:text-[32px] pb-3 sm:pb-4 xl:pb-5 border-b-2 border-green-600 mb-4 text-left font-bold sem-sombra">Gostaria de editar o {campoParaEditar}?</h3>
                    <div className="flex flex-row justify-center gap-3 sm:gap-5 items-center my-4 mx-0">
                        {campoParaEditar === "avatar" ? (
                            <button className="mt-[5px] py-4 sm:py-5 xl:py-6 px-3 sm:px-[15px] md:px-4 xl:px-6 text-lg sm:text-2xl xl:text-[26px] cursor-pointer rounded-xl bg-green-800 border-[1px] sm:border-2 border-white transition-colors duration-300 ease-in-out hover:bg-green-900 font-bold" onClick={abrirModalEditAvatar}>Sim, obrigado!</button>
                        ) : (
                            <button className="mt-[5px] py-4 sm:py-5 xl:py-6 px-3 sm:px-[15px] md:px-4 xl:px-6 text-lg sm:text-2xl xl:text-[26px] cursor-pointer rounded-xl bg-green-800 border-[1px] sm:border-2 border-white transition-colors duration-300 ease-in-out hover:bg-green-900 font-bold" onClick={abrirModalEdicao}>Sim, obrigado!</button>
                        )}
                        <button className="mt-[5px] py-4 sm:py-5 xl:py-6 px-3 sm:px-[15px] md:px-4 xl:px-6 text-lg sm:text-2xl xl:text-[26px] cursor-pointer rounded-xl bg-yellow-600 border-[1px] sm:border-2 border-white transition-colors duration-300 ease-in-out hover:bg-yellow-800 font-bold" onClick={fecharModal}>Não, obrigado!</button>
                    </div>
                </div>
            )}

            {modalEdicao && (
                <div className="shadow-modal-conta flex flex-col justify-around fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-950 text-white rounded-3xl p-5 border-[3px] border-white/80 z-50 min-h-56 min-w-64 min-[400px]:min-w-80 min-[530px]:min-w-[25rem] sm:min-w-[28rem] md:min-w-[34rem] lg:min-w-[39rem] xl:min-w-[45rem]">
                    <FaXmark onClick={fecharModal} className="absolute top-4 right-4 sm:top-3 md:top-4 md:right-4 text-4xl sm:text-5xl cursor-pointer text-yellow-600 transition-colors duration-500 ease-in-out hover:text-yellow-800"/>
                    <h3 className="text-xl sm:text-2xl md:text-[27px] xl:text-[32px] pb-3 sm:pb-4 xl:pb-5 border-b-2 border-green-600 mb-4 text-left font-bold sem-sombra">Editar {campoParaEditar}</h3>
                    <label className="w-full mt-2">{campoParaEditar.charAt(0).toUpperCase() + campoParaEditar.slice(1).toLowerCase()} atual:</label>
                    <div className="relative">
                        <input 
                            type={campoParaEditar === "senha" && !mostrarSenhaAtual ? "password" : "text"}
                            placeholder={`Digite ${campoParaEditar}`} 
                            value={dadoAtual} 
                            onChange={(e) => setDadoAtual(e.target.value)} 
                            className="w-full my-2 py-2 pl-2 pr-14 text-base sm:text-lg border-[1px] border-emerald-600 text-black rounded-lg self-center"
                        />
                        {campoParaEditar === "senha" && (
                            mostrarSenhaAtual ? (
                                <FaEye onClick={() => setMostrarSenhaAtual(false)} className="absolute top-[20px] right-5 text-2xl text-green-700 cursor-pointer transition-colors ease-in-out duration-300 hover:text-green-900 select-none" />
                            ) : (
                                <FaEyeSlash onClick={() => setMostrarSenhaAtual(true)} className="absolute top-[20px] right-5 text-2xl text-green-700 cursor-pointer transition-colors ease-in-out duration-300 hover:text-green-900 select-none"/>
                            )
                        )}
                    </div>
                    <label className="w-full mt-2">Novo {campoParaEditar.charAt(0).toUpperCase() + campoParaEditar.slice(1).toLowerCase()}:</label>
                    <div className="relative">
                        <input 
                            type={campoParaEditar === "senha" && !mostrarNovaSenha ? "password" : "text"}
                            placeholder={`Novo ${campoParaEditar}`} 
                            value={novoDado} 
                            onChange={handleNovoDadoChange}  
                            className="w-full my-2 py-2 pl-2 pr-14 text-base sm:text-lg border-[1px] border-emerald-600 text-black rounded-lg self-center"
                        />
                        {/* Regras*/}
                        {campoParaEditar === "nome" && !nomeValido && (
                            <span className="text-red-600 text-sm mt-1 block">
                                O nome deve conter apenas letras.
                            </span>
                        )}
                        {campoParaEditar === "sobrenome" && !sobrenomeValido && (
                            <span className="text-red-600 text-sm mt-1 block">
                                O sobrenome deve conter apenas letras.
                            </span>
                        )}
                        {campoParaEditar === "email" && !emailValido && (
                            <span className="text-red-600 text-sm mt-1 block">
                                O email deve conter "@"
                            </span>
                        )}
                        {campoParaEditar === "senha" && !senhaValida && (
                            <span className="text-red-600 text-sm block">
                                A senha deve ter pelo menos 8 caracteres e uma letra maiúscula e um número.
                            </span>
                        )}

                        {campoParaEditar === "senha" && (
                            mostrarNovaSenha ? (
                                <FaEye onClick={() => setMostrarNovaSenha(false)} className="absolute top-[20px] right-5 text-2xl text-green-700 cursor-pointer transition-colors ease-in-out duration-300 hover:text-green-900 select-none"/>
                            ) : (
                                <FaEyeSlash onClick={() => setMostrarNovaSenha(true)} className="absolute top-[20px] right-5 text-2xl text-green-700 cursor-pointer transition-colors ease-in-out duration-300 hover:text-green-900 select-none"/>
                            )
                        )}
                    </div>

                    {campoParaEditar === "senha" && (
                        <>
                            <label className="w-full mt-2">Confirmar nova senha:</label>
                            <div className="relative">
                                <input 
                                    type={mostrarConfirmacaoSenha ? "text" : "password"}
                                    placeholder="Confirme a nova senha"
                                    value={confirmarNovoDado}
                                    onChange={handleConfirmarNovoDadoChange}
                                    className="w-full my-2 py-2 pl-2 pr-14 text-base sm:text-lg border-[1px] text-black border-emerald-600 rounded-lg self-center"
                                />
                                {/* Feedback de confirmação de senha */}
                                {!senhaConfirmada && (
                                    <span className="text-red-600 text-sm mt-1 block">
                                        As senhas não coincidem.
                                    </span>
                                )}
                                {mostrarConfirmacaoSenha ? (
                                    <FaEye onClick={() => setMostrarConfirmacaoSenha(false)} className="absolute top-[20px] right-5 text-2xl text-green-700 cursor-pointer transition-colors ease-in-out duration-300 hover:text-green-900 select-none"/>
                                ) : (
                                    <FaEyeSlash onClick={() => setMostrarConfirmacaoSenha(true)} 
                                    className="absolute top-[20px] right-5 text-2xl text-green-700 cursor-pointer transition-colors ease-in-out duration-300 hover:text-green-900 select-none"/>
                                )}
                            </div>
                        </>
                    )}
                    <button onClick={handleEditar} className="my-5 py-[10px] px-[15px] text-lg cursor-pointer rounded-xl bg-green-800 border-[1px] sm:border-2 border-white transition-colors duration-300 ease-in-out hover:bg-green-900 font-bold">Editar</button>
                </div>
            )}

            {modalEditAvatar && <div onClick={fecharModal} className="fixed top-0 left-0 w-full h-full duration-100 bg-black/60 z-40"></div>}
            {modalEditAvatar && (
                <div className="shadow-modal-conta flex flex-col justify-center fixed my-8 sm:my-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-950 text-white rounded-3xl p-5 border-[3px] border-white/80 z-50 min-w-72 min-[400px]:min-w-96 min-[530px]:min-w-[28rem] sm:min-w-[32rem] md:min-w-[36rem] lg:min-w-[42rem] xl:min-w-[50rem]">
                    <FaXmark onClick={fecharModal} className="absolute top-4 right-4 sm:top-3 md:top-4 md:right-4 text-4xl sm:text-5xl cursor-pointer text-yellow-600 transition-colors duration-500 ease-in-out hover:text-yellow-800"/>
                    <h3 className="text-xl sm:text-2xl md:text-[27px] xl:text-[32px] pb-3 sm:pb-4 xl:pb-5 border-b-2 border-green-600 mb-4 text-left font-bold sem-sombra">Selecionar Avatar</h3>
                    <div className="flex flex-col justify-center items-center sm:mt-2 sm:mb-4 mx-auto">
                        <div className="max-sm:w-[120px] max-lg:w-[150px] w-[170px] max-sm:h-[120px] max-lg:h-[150px] h-[170px] bg-white rounded-full relative overflow-hidden border-[6px] border-green-800">
                            <img src={selectedImage} alt="Avatar Perfil" className="absolute w-full h-full object-cover"/>
                        </div>
                        <div className="flex flex-col mt-4 sm:mt-5 md:mt-7 mb-2 sm:mb-3 md:mb-4 mx-0">
                            <h4 className="mb-3 text-lg min-[530px]:text-xl sm:text-[22px] lg:text-2xl fonte-bold text-white/90 font-bold">Sugestões de Avatares</h4>
                            <div className="flex flex-row justify-center items-center gap-3 flex-wrap">
                                <a href="#" onClick={() => handleImageSelect(UsuarioImg)}>
                                    <img src={UsuarioImg} alt="Icone - Avatar" className="max-[400px]:w-12 w-14 sm:w-16 max-[400px]:h-12 h-14 sm:h-16 rounded-full object-cover my-1 mx-0 bg-white border-2 border-green-700 transition-transform duration-500 ease-in-out hover:scale-125"/>
                                </a>
                                <a href="#" onClick={() => handleImageSelect(UsuarioImg1)}>
                                    <img src={UsuarioImg1} alt="Icone - Avatar" className="max-[400px]:w-12 w-14 sm:w-16 max-[400px]:h-12 h-14 sm:h-16 rounded-full object-cover my-1 mx-0 bg-white border-[3px] border-green-700 transition-transform duration-500 ease-in-out hover:scale-125"/>
                                </a>
                                <a href="#" onClick={() => handleImageSelect(UsuarioImg2)}>
                                    <img src={UsuarioImg2} alt="Icone - Avatar" className="max-[400px]:w-12 w-14 sm:w-16 max-[400px]:h-12 h-14 sm:h-16 rounded-full object-cover my-1 mx-0 bg-white border-[3px] border-green-700 transition-transform duration-500 ease-in-out hover:scale-125"/>
                                </a>
                                <a href="#" onClick={() => handleImageSelect(UsuarioImg3)}>
                                    <img src={UsuarioImg3} alt="Icone - Avatar logo Bright Path" className="max-[400px]:w-12 w-14 sm:w-16 max-[400px]:h-12 h-14 sm:h-16 rounded-full object-cover my-1 mx-0 bg-white border-[3px] border-green-700 transition-transform duration-500 ease-in-out hover:scale-125"/>
                                </a>
                                <a href="#" onClick={() => handleImageSelect(UsuarioImg4)}>
                                    <img src={UsuarioImg4} alt="Icone - Avatar Reciclagem" className="max-[400px]:w-12 w-14 sm:w-16 max-[400px]:h-12 h-14 sm:h-16 rounded-full object-cover my-1 mx-0 bg-white border-[3px] border-green-700 transition-transform duration-500 ease-in-out hover:scale-125"/>
                                </a>
                                <a href="#" onClick={() => handleImageSelect(UsuarioImg5)}>
                                    <img src={UsuarioImg5} alt="Icone - Avatar planeta Terra" className="max-[400px]:w-12 w-14 sm:w-16 max-[400px]:h-12 h-14 sm:h-16 rounded-full object-cover my-1 mx-0 bg-white border-[3px] border-green-700 transition-transform duration-500 ease-in-out hover:scale-125"/>
                                </a>
                                <a href="#" onClick={() => handleImageSelect(UsuarioImg6)}>
                                    <img src={UsuarioImg6} alt="Icone - Avatar Sol e Eletricidade" className="max-[400px]:w-12 w-14 sm:w-16 max-[400px]:h-12 h-14 sm:h-16 rounded-full object-cover my-1 mx-0 bg-white border-[3px] border-green-700 transition-transform duration-500 ease-in-out hover:scale-125"/>
                                </a>
                                <a href="#" onClick={() => handleImageSelect(UsuarioImg7)}>
                                    <img src={UsuarioImg7} alt="Icone - Avatar Sustentabilidade Lampada fundo verde" className="max-[400px]:w-12 w-14 sm:w-16 max-[400px]:h-12 h-14 sm:h-16 rounded-full object-cover my-1 mx-0 bg-white border-[3px] border-green-700 transition-transform duration-500 ease-in-out hover:scale-125"/>
                                </a>
                                <a href="#" onClick={() => handleImageSelect(UsuarioImg8)}>
                                    <img src={UsuarioImg8} alt="Icone - Avatar Eletricidade renovavel" className="max-[400px]:w-12 w-14 sm:w-16 max-[400px]:h-12 h-14 sm:h-16 rounded-full object-cover my-1 mx-0 bg-white border-[3px] border-green-700 transition-transform duration-500 ease-in-out hover:scale-125"/>
                                </a>
                                <a href="#" onClick={() => handleImageSelect(UsuarioImg9)}>
                                    <img src={UsuarioImg9} alt="Icone - Avatar Sustentabilidade Lampada fundo branco" className="max-[400px]:w-12 w-14 sm:w-16 max-[400px]:h-12 h-14 sm:h-16 rounded-full object-cover my-1 mx-0 bg-white border-[3px] border-green-700 transition-transform duration-500 ease-in-out hover:scale-125"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center gap-5 items-center my-auto mx-0 border-t-2 border-green-700 pt-4">
                        <button className="mt-[5px] py-[10px] sm:py-3 xl:py-4 px-[15px] sm:px-4 xl:px-6 text-xl sm:text-2xl cursor-pointer rounded-xl bg-green-800 border-[1px] sm:border-2 border-white transition-colors duration-300 ease-in-out hover:bg-green-900 font-bold" onClick={handleSaveAvatar}>Salvar</button>
                        <button className="mt-[5px] py-[10px] sm:py-3 xl:py-4 px-[15px] sm:px-4 xl:px-6 text-xl sm:text-2xl cursor-pointer rounded-xl bg-yellow-600 border-[1px] sm:border-2 border-white transition-colors duration-300 ease-in-out hover:bg-yellow-800 font-bold" onClick={fecharModal}>Fechar</button>
                    </div>
                </div>
            )}
        </main>
    )
}

export default EditarConta