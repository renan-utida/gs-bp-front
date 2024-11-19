
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

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
import { FaEye, FaEyeSlash, FaImage, FaLock, FaUser, FaXmark } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"

// Criando um array com os avatares
const avatares = [
    UsuarioImg,
    UsuarioImg1,
    UsuarioImg2,
    UsuarioImg3,
    UsuarioImg4,
    UsuarioImg5,
    UsuarioImg6,
    UsuarioImg7,
    UsuarioImg8,
    UsuarioImg9,
];

const CriarConta = () => {

    //Hook- useParams- serve para receber da rota ou gerar o codigo
    let {id} = useParams();

    //Hook - useState - Manipula o estado da variavel
    const [usuarios,setUsuarios]= useState({
        id,
        usuario: '',
        nome: '',
        sobrenome: '',
        email: '',
        senha: '',
        avatar: UsuarioImg // Estado inicial da imagem de perfil
    });

    // Estados para confirmação de senha
    const [confirmarSenha, setConfirmarSenha] = useState("");  // Estado para confirmação da senha

    // Estados de validação
    const [nomeValido, setNomeValido] = useState(true);
    const [sobrenomeValido, setSobrenomeValido] = useState(true);
    const [emailValido, setEmailValido] = useState(true);
    const [senhaValida, setSenhaValida] = useState(false);
    const [senhaConfirmada, setSenhaConfirmada] = useState(true);

    // Controle da visibilidade da senha
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);


    // Função para atualizar os campos do usuário
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuarios((prevUsuarios) => ({ ...prevUsuarios, [name]: value }));
    };

    // Função para validar o nome
    const handleNomeChange = (e) => {
        const value = e.target.value;
        handleChange(e);
        setNomeValido(/^[A-Za-zÀ-ÿ\s]+$/.test(value)); // Apenas letras e espaços
    };

    // Função para validar o sobrenome
    const handleSobrenomeChange = (e) => {
        const value = e.target.value;
        handleChange(e);
        setSobrenomeValido(/^[A-Za-zÀ-ÿ\s]+$/.test(value)); // Apenas letras e espaços
    };

    // Função para validar o email
    const handleEmailChange = (e) => {
        const value = e.target.value;
        handleChange(e);
        setEmailValido(value.includes("@")); // Verifica se contém "@"
    };

    // Função para validar a senha
    const handleSenhaChange = (e) => {
        const value = e.target.value;
        handleChange(e);
        // Exibir erro apenas se o usuário começou a digitar algo
        if (value.length > 0) {
            setSenhaValida(value.length >= 8 && /[A-Z]/.test(value) && /\d/.test(value));
        } else {
            setSenhaValida(true); // Para que a mensagem de erro não apareça com o campo vazio
        }
    };

    // Função para validar a confirmação da senha
    const handleConfirmarSenhaChange = (e) => {
        const value = e.target.value;
        setConfirmarSenha(value);
        if (value.length > 0) {
            setSenhaConfirmada(value === usuarios.senha);
        }
    };

    //Hook- useNavigate- Redireciona para outro componente
    const navigate = useNavigate();

    //criando a variavel metodo para criar e alterar
    let metodo = "post";
    if(id){
        metodo = 'put';
    }

    //criando a função handleSubmit
    const handleSubmit=(e)=>{
        //previne que ocorra qualquer modificação no form ex. load
        e.preventDefault();

        // Verificação de senha
        if (usuarios.senha !== confirmarSenha) {
            alert("As senhas não coincidem. Por favor, tente novamente.");
            return;
        }

        // Verifica se todos os campos estão preenchidos corretamente
        if (nomeValido && sobrenomeValido && emailValido && senhaValida && senhaConfirmada) {

            // Envia os dados ao backend
            fetch(`http://localhost:5001/usuarios/${id ? id :''}`,{
                method:metodo,
                headers: {
                    'Content-type':'application/json',
                },
                //prepara para receber os dados em json
                body:JSON.stringify(usuarios),
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erro ao criar a conta.');
                }
                return response.json();
            })
            .then((data) => {
                // Salva apenas o nome do usuário no sessionStorage e navega para a página desejada
                sessionStorage.setItem("usuario", usuarios.usuario);
                
                alert("Conta criada com sucesso!");

                // Redireciona para a página de cadastrar produto
                navigate("/quiz");
            })
            .catch((error) => {
                console.error(error);
                alert('Erro ao criar a conta. Tente novamente.');
            });
        } else {
            alert("Por favor, preencha todos os campos corretamente.");
        }
    };
    
    //Hook- useEffect - realiza o efeito colateral ele carrega os usuarios cadastrados
    useEffect(()=>{
        if(id){
            fetch(`http://localhost:5001/usuarios/${id}`)
                .then((resp)=>{
                    return resp.json();
                })
                .then((data)=>{
                    setUsuarios(data);
                });
        }
    },[id]);  

    const [modalprofile, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modalprofile);
    };

    // Estado para armazenar a imagem selecionada
    const [selectedImage, setSelectedImage] = useState(UsuarioImg);

    // Função para atualizar a imagem selecionada ao clicar em uma imagem de sugestão
    const handleImageSelect = (imgSrc) => {
        setSelectedImage(imgSrc);
    };

    // Função para salvar a imagem selecionada como avatar
    const handleSaveImage = () => {
        setUsuarios((prevUsuarios) => ({ ...prevUsuarios, avatar: selectedImage }));
        alert("Imagem atualizada com sucesso!");
        toggleModal(); // Fecha o modal após salvar
    };

    // Desativa o scroll enquanto o modal estiver aberto
    useEffect(() => {
        if (modalprofile) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    
        // Limpeza para restaurar o overflow quando o componente desmonta
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [modalprofile]);

    return (
        <main className="mt-20 min-h-screen flex justify-center items-start relative bg-criar-conta bg-cover bg-center sombra-login">
            <div className="absolute inset-0 bg-black/50 bg-gradient-to-b from-black/60 to-black/40"></div>
            <section className="relative bg-white/10 backdrop-blur-[10px] border-4 border-yellow-500/80 py-8 sm:py-6 xl:py-8 max-[400px]:px-4 px-6 lg:px-8 rounded-2xl my-8 md:my-10 xl:mt-12 xl:mb-16 mx-auto max-[400px]:w-72 max-[500px]:w-[24rem] min-[501px]:min-w-[27rem] md:min-w-[32rem] lg:min-w-[35rem] xl:min-w-[38rem]">
                <form onSubmit={handleSubmit}>
                    <h1 className="text-4xl sm:text-[40px] md:text-[44px] md:py-2 text-center text-white font-bold">Criar Conta</h1>
                    <div className="flex flex-col items-center mt-2">
                        <div className="image-profile-box my-[10px] mx-auto max-md:w-[120px] max-lg:w-[140px] w-[150px] max-md:h-[120px] max-lg:h-[140px] h-[150px] bg-white rounded-full relative overflow-hidden cursor-pointer border-[6px] border-green-700" onClick={toggleModal}>
                            <img src={usuarios.avatar} alt="Icone de perfil do usuario" className="absolute w-full h-full top-0 left-0 object-cover transition-all duration-300 ease-in-out" />
                            <a className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white py-[5px] px-[10px] rounded-md text-center sm:text-sm font-bold opacity-0 transition-opacity duration-300 ease-in-out flex justify-center max-sm:text-xs">
                                <FaImage className="absolute w-5 h-4 text-white"/><br />Trocar imagem
                            </a>
                        </div>
                        <a className="text-base md:text-lg text-green-400 flex flex-row gap-[5px] cursor-pointer font-bold transition-colors duration-200 ease-linear hover:text-green-600/90" onClick={toggleModal}>
                            Alterar Foto de Perfil
                        </a>
                    </div>

                    <div className="relative w-full max-[400px]:h-14 h-16 sm:h-[68px] mt-7 mx-auto">
                        <input 
                            type="text" 
                            name="nome"
                            value={usuarios.nome}
                            onChange={handleNomeChange}
                            placeholder="Nome"
                            required 
                            /* o onChange é utili em situações que é necessários reagir a cada alteração do input */
                            className="w-full h-full bg-transparent outline-none border-2 border-white/80 rounded-full max-[400px]:text-[15px] max-sm:text-lg text-xl text-white py-5 px-6 placeholder:text-white pr-12"
                        />
                        {/* Regras*/}
                        {!nomeValido && (
                            <span className="text-red-600 text-[10px] min-[401px]:text-sm sm:text-[15px] lg:text-[17px] text-center block mt-[2px] sm:mt-[1px] lg:mt-[2px] mb-10">
                                O nome deve conter apenas letras.
                            </span>
                        )}
                    </div>
                    <div className="relative w-full max-[400px]:h-14 h-16 sm:h-[68px] mt-7 mx-auto">
                        <input 
                            type="text" 
                            name="sobrenome"
                            value={usuarios.sobrenome}
                            placeholder="Sobrenome"
                            required 
                            /* o onChange é utili em situações que é necessários reagir a cada alteração do input */
                            onChange={handleSobrenomeChange}
                            className="w-full h-full bg-transparent outline-none border-2 border-white/80 rounded-full max-[400px]:text-[15px] max-sm:text-lg text-xl text-white py-5 px-6 placeholder:text-white pr-12"
                        />
                        {!sobrenomeValido && (
                            <span className="text-red-600 text-[10px] min-[401px]:text-sm sm:text-[15px] lg:text-[17px] text-center block mt-[2px] sm:mt-[1px] lg:mt-[2px] mb-10">
                                O sobrenome deve conter apenas letras.
                            </span>
                        )}
                    </div>
                    <div className="relative w-full max-[400px]:h-14 h-16 sm:h-[68px] mt-7 mx-auto">
                        <input 
                            type="text" 
                            name="usuario"
                            value={usuarios.usuario}
                            placeholder="Usuário"
                            required 
                            /* o onChange é utili em situações que é necessários reagir a cada alteração do input */
                            onChange={handleChange}
                            className="w-full h-full bg-transparent outline-none border-2 border-white/80 rounded-full max-[400px]:text-[15px] max-sm:text-lg text-xl text-white py-5 px-6 placeholder:text-white pr-12"
                        />
                        <FaUser className="absolute right-6 top-1/2 -translate-y-1/2 text-[19px] sm:text-xl text-white"/>
                    </div>
                    <div className="relative w-full max-[400px]:h-14 h-16 sm:h-[68px] mt-7 mx-auto">
                        <input 
                            type="email" 
                            name="email"
                            value={usuarios.email}
                            placeholder="Email"
                            required 
                            /* o onChange é utili em situações que é necessários reagir a cada alteração do input */
                            onChange={handleEmailChange}
                            className="w-full h-full bg-transparent outline-none border-2 border-white/80 rounded-full max-[400px]:text-[15px] max-sm:text-lg text-xl text-white py-5 px-6 placeholder:text-white pr-12"
                        />
                        <MdEmail className="absolute right-6 top-1/2 -translate-y-1/2 text-[19px] sm:text-xl text-white"/>
                        {!emailValido && (
                            <span className="text-red-600 text-[10px] min-[401px]:text-sm sm:text-[15px] lg:text-[17px] text-center block mt-[2px] sm:mt-[1px] lg:mt-[2px] mb-10">
                                O email deve conter "@"
                            </span>
                        )}
                    </div>
                    <div className="relative w-full max-[400px]:h-14 h-16 sm:h-[68px] mt-7 mx-auto">
                        <input 
                            type={mostrarSenha ? "text" : "password"}
                            name="senha"
                            value={usuarios.senha}
                            placeholder="Senha"
                            required
                            /* o onChange é utili em situações que é necessários reagir a cada alteração do input */
                            onChange={handleSenhaChange}
                            className="w-full h-full bg-transparent outline-none border-2 border-white/80 rounded-full max-[400px]:text-[15px] max-sm:text-lg text-xl text-white py-5 px-6 placeholder:text-white pr-24"
                        />
                        <span onClick={() => setMostrarSenha(!mostrarSenha)} >
                            {mostrarSenha ? <FaEye className="absolute top-1/2 -translate-y-1/2 right-14 max-sm:text-xl text-2xl text-white cursor-pointer transition-colors ease-in-out duration-300 hover:text-white/70 select-none"/> : <FaEyeSlash className="absolute top-1/2 -translate-y-1/2 right-14 max-sm:text-xl text-2xl text-white cursor-pointer transition-colors ease-in-out duration-300 hover:text-white/70 select-none"/>} {/* Ícone para mostrar/ocultar senha */}
                        </span>
                        <FaLock className="absolute right-6 top-1/2 -translate-y-1/2 text-[19px] sm:text-xl text-white"/>
                        {senhaValida === false && (
                            <span className="text-red-600 text-[10px] min-[401px]:text-sm sm:text-[15px] lg:text-[17px] text-center block mt-[2px] sm:mt-[1px] lg:mt-[2px] mb-10">
                                Mínimo 8 caracteres, 1 maiúscula e 1 número.
                            </span>
                        )}
                    </div>
                    <div className="relative w-full max-[400px]:h-14 h-16 sm:h-[68px] mt-7 mx-auto">
                        <input 
                            type={mostrarConfirmarSenha ? "text" : "password"}
                            name="confirmarSenha"
                            value={confirmarSenha}
                            placeholder="Confirme sua Senha"
                            required
                            /* o onChange é utili em situações que é necessários reagir a cada alteração do input */
                            onChange={handleConfirmarSenhaChange}
                            className="w-full h-full bg-transparent outline-none border-2 border-white/80 rounded-full max-[400px]:text-[15px] max-sm:text-lg text-xl text-white py-5 px-6 placeholder:text-white pr-24"
                        />
                        <span onClick={() => setMostrarConfirmarSenha(!mostrarConfirmarSenha)}>
                            {mostrarConfirmarSenha ? <FaEye className="absolute top-1/2 -translate-y-1/2 right-14 max-sm:text-xl text-2xl text-white cursor-pointer transition-colors ease-in-out duration-300 hover:text-white/70 select-none" /> : <FaEyeSlash className="absolute top-1/2 -translate-y-1/2 right-14 max-sm:text-xl text-2xl text-white cursor-pointer transition-colors ease-in-out duration-300 hover:text-white/70 select-none"/>} {/* Ícone para mostrar/ocultar confirmação da senha */}
                        </span>
                        <FaLock className="absolute right-6 top-1/2 -translate-y-1/2 text-[19px] sm:text-xl text-white"/>
                        {senhaConfirmada === false && (
                            <span className="text-red-600 text-[10px] min-[401px]:text-sm sm:text-[15px] lg:text-[17px] text-center block mt-[2px] sm:mt-[1px] lg:mt-[2px] mb-10">
                                As senhas não coincidem.
                            </span>
                        )}
                    </div>
                    <button className="w-full mt-8 py-4 sm:py-[18px] text-white bg-green-700 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.2)] cursor-pointer text-xl sm:text-2xl font-bold transition-colors duration-700 ease-in-out border-2 border-white hover:bg-green-900 hover:text-white" type="submit" >Criar</button>
                </form>
            </section>
            {modalprofile && <div className="fixed top-0 left-0 w-full h-full duration-100 bg-black/60 z-40" onClick={toggleModal}></div>}
            {modalprofile && (
                <div className="shadow-modal-conta flex flex-col justify-center fixed mt-16 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-950 text-white rounded-3xl p-5 border-[3px] border-white/80 z-50 min-w-72 min-[400px]:min-w-96 min-[530px]:min-w-[28rem] sm:min-w-[32rem] md:min-w-[36rem] lg:min-w-[42rem] xl:min-w-[50rem]">
                    <FaXmark onClick={toggleModal} className="absolute top-4 right-4 sm:top-3 md:top-4 md:right-4 text-4xl sm:text-5xl cursor-pointer text-yellow-600 transition-colors duration-500 ease-in-out hover:text-yellow-800"/>
                    <h3 className="text-xl sm:text-2xl md:text-[27px] xl:text-[32pxs] pb-3 sm:pb-4 xl:pb-5 border-b-2 border-green-600 mb-4 text-left sem-sombra">Selecionar Avatar</h3>
                    <div className="flex flex-col justify-center items-center sm:mt-2 sm:mb-4 mx-auto">
                        <div className="max-sm:w-[120px] max-lg:w-[150px] w-[170px] max-sm:h-[120px] max-lg:h-[150px] h-[170px] bg-white rounded-full relative overflow-hidden border-[6px] border-green-800">
                            <img src={selectedImage} alt="Avatar Perfil" className="absolute w-full h-full object-cover"/>
                        </div>
                        <div className="flex flex-col mt-4 sm:mt-5 md:mt-7 mb-2 sm:mb-3 md:mb-4 mx-0">
                            <h4 className="mb-3 text-lg min-[530px]:text-xl sm:text-2xl xl:text-3xl fonte-bold text-white/90 font-bold">Sugestões de Avatares</h4>
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
                        <button className="mt-[5px] py-[10px] sm:py-3 xl:py-4 px-[15px] sm:px-4 xl:px-6 text-xl sm:text-2xl cursor-pointer rounded-xl bg-green-800 border-[1px] sm:border-2 border-white transition-colors duration-300 ease-in-out hover:bg-green-900 font-bold" onClick={handleSaveImage}>Salvar</button>
                        <button className="mt-[5px] py-[10px] sm:py-3 xl:py-4 px-[15px] sm:px-4 xl:px-6 text-xl sm:text-2xl cursor-pointer rounded-xl bg-yellow-600 border-[1px] sm:border-2 border-white transition-colors duration-300 ease-in-out hover:bg-yellow-800 font-bold" onClick={toggleModal}>Fechar</button>
                    </div>
                </div>
            )}
        </main>
    )
}

export default CriarConta