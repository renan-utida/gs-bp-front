
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
        <main className="mt-20 min-h-screen flex justify-center items-start relative bg-login bg-cover bg-center sombra-login">
            <section>
                <form onSubmit={handleSubmit}>
                    <h1>Criar Conta</h1>
                    <div>
                        <div className="image-profile-box" onClick={toggleModal}>
                            <img src={usuarios.avatar} alt="Icone de perfil do usuario" />
                            <a className="trocar-imagem-link">
                                <FaImage /><br />Trocar imagem
                            </a>
                        </div>
                        <a className="img-modal-link" onClick={toggleModal}>
                            Alterar Foto de Perfil
                        </a>
                    </div>

                    <div className="input-field">
                        <input 
                            type="text" 
                            name="nome"
                            value={usuarios.nome}
                            onChange={handleNomeChange}
                            placeholder="Nome"
                            required 
                            /* o onChange é utili em situações que é necessários reagir a cada alteração do input */
                        />
                        {/* Regras*/}
                        {!nomeValido && (
                            <span style={{ color: "red", fontSize: "0.9rem", marginTop: "1px", display: "block" }}>
                                O nome deve conter apenas letras.
                            </span>
                        )}
                    </div>
                    <div className="input-field">
                        <input 
                            type="text" 
                            name="sobrenome"
                            value={usuarios.sobrenome}
                            placeholder="Sobrenome"
                            required 
                            /* o onChange é utili em situações que é necessários reagir a cada alteração do input */
                            onChange={handleSobrenomeChange}
                        />
                        {!sobrenomeValido && (
                            <span style={{ color: "red", fontSize: "0.9rem", marginTop: "1px", display: "block" }}>
                                O sobrenome deve conter apenas letras.
                            </span>
                        )}
                    </div>
                    <div className="input-field">
                        <input 
                            type="text" 
                            name="usuario"
                            value={usuarios.usuario}
                            placeholder="Usuário"
                            required 
                            /* o onChange é utili em situações que é necessários reagir a cada alteração do input */
                            onChange={handleChange}
                        />
                        <FaUser/>
                    </div>
                    <div className="input-field">
                        <input 
                            type="email" 
                            name="email"
                            value={usuarios.email}
                            placeholder="Email"
                            required 
                            /* o onChange é utili em situações que é necessários reagir a cada alteração do input */
                            onChange={handleEmailChange}
                        />
                        <MdEmail />
                        {!emailValido && (
                            <span style={{ color: "red", fontSize: "0.9rem", marginTop: "1px", display: "block" }}>
                                O email deve conter "@"
                            </span>
                        )}
                    </div>
                    <div className="input-field">
                        <input 
                            type={mostrarSenha ? "text" : "password"}
                            name="senha"
                            value={usuarios.senha}
                            placeholder="Senha"
                            required
                            /* o onChange é utili em situações que é necessários reagir a cada alteração do input */
                            onChange={handleSenhaChange}
                        />
                        <span onClick={() => setMostrarSenha(!mostrarSenha)} >
                            {mostrarSenha ? <FaEye /> : <FaEyeSlash />} {/* Ícone para mostrar/ocultar senha */}
                        </span>
                        <FaLock/>
                        {senhaValida === false && (
                            <span style={{ color: "red", fontSize: "0.9rem", marginTop: "1px", display: "block" }}>
                                Mínimo 8 caracteres, 1 letra maiúscula e 1 número.
                            </span>
                        )}
                    </div>
                    <div className="input-field">
                        <input 
                            type={mostrarConfirmarSenha ? "text" : "password"}
                            name="confirmarSenha"
                            value={confirmarSenha}
                            placeholder="Confirme sua Senha"
                            required
                            /* o onChange é utili em situações que é necessários reagir a cada alteração do input */
                            onChange={handleConfirmarSenhaChange}
                        />
                        <span onClick={() => setMostrarConfirmarSenha(!mostrarConfirmarSenha)}>
                            {mostrarConfirmarSenha ? <FaEye /> : <FaEyeSlash />} {/* Ícone para mostrar/ocultar confirmação da senha */}
                        </span>
                        <FaLock/>
                        {senhaConfirmada === false && (
                            <span style={{ color: "red", fontSize: "0.9rem", marginTop: "1px", display: "block" }}>
                                As senhas não coincidem.
                            </span>
                        )}
                    </div>
                    <button type="submit">Criar</button>
                </form>
            </section>
            {modalprofile && <div className="fixed top-0 left-0 w-full h-full duration-100 bg-black/40 z-50" onClick={toggleModal}></div>}
            {modalprofile && (
                <div>
                    <FaXmark onClick={toggleModal} />
                    <h3>Selecionar Avatar</h3>
                    <div>
                        <div className="avatar">
                            <img src={selectedImage} alt="Avatar Perfil" />
                        </div>
                        <div className="sugestao-avatar">
                            <h4>Sugestões de Avatares</h4>
                            <div className="sugestao-img">
                                <a href="#" onClick={() => handleImageSelect(UsuarioImg)}>
                                    <img src={UsuarioImg} alt="Icone - Avatar" />
                                </a>
                                <a href="#" onClick={() => handleImageSelect(UsuarioImg1)}>
                                    <img src={UsuarioImg1} alt="Icone - Avatar" />
                                </a>
                                <a href="#" onClick={() => handleImageSelect(UsuarioImg2)}>
                                    <img src={UsuarioImg2} alt="Icone - Avatar" />
                                </a>
                                <a href="#" onClick={() => handleImageSelect(UsuarioImg3)}>
                                    <img src={UsuarioImg3} alt="Icone - Avatar carro formula E desenho" />
                                </a>
                                <a href="#" onClick={() => handleImageSelect(UsuarioImg4)}>
                                    <img src={UsuarioImg4} alt="Icone - Avatar carro formula E desenho dark" />
                                </a>
                                <a href="#" onClick={() => handleImageSelect(UsuarioImg5)}>
                                    <img src={UsuarioImg5} alt="Icone - Avatar formula E" />
                                </a>
                                <a href="#" onClick={() => handleImageSelect(UsuarioImg6)}>
                                    <img src={UsuarioImg6} alt="Icone - Avatar carro formula E" />
                                </a>
                                <a href="#" onClick={() => handleImageSelect(UsuarioImg7)}>
                                    <img src={UsuarioImg7} alt="Icone - Avatar carro formula E" />
                                </a>
                                <a href="#" onClick={() => handleImageSelect(UsuarioImg8)}>
                                    <img src={UsuarioImg8} alt="Icone - Avatar capacete formula E" />
                                </a>
                                <a href="#" onClick={() => handleImageSelect(UsuarioImg9)}>
                                    <img src={UsuarioImg9} alt="Icone - Avatar bandeira chegada formula E" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="save-modal-btn" onClick={handleSaveImage}>Salvar</button>
                        <button className="close-modal-btn" onClick={toggleModal}>Fechar</button>
                    </div>
                </div>
            )}
        </main>
    )
}

export default CriarConta