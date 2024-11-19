import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa6";

const Login = () => {

    // Controle da visibilidade da senha
    const [mostrarSenha, setMostrarSenha] = useState(false);

    // Hook - useRef - Pega a referência de um elemento ou componente e guarda
    const usuario = useRef();
    const senha = useRef();

    // Hook - useState - Manipila o estado da variavel
    const [usuarios, setUsuarios] = useState([]);

    // Hook - useNavigate - Ele redireciona para outro componente
    const navigate = useNavigate();

    // Criando a função de validação
    function validate() {
        return usuarios.some(user => 
            (user.usuario === usuario.current.value || user.email === usuario.current.value) &&
            user.senha === senha.current.value
        );
    };

    // Criando a função handleSubmit
    const handleSubmit = (e) => {
        // Previne qualquer alteração no navegador
        e.preventDefault();  
        
        if(validate()){
            // Criando a autenticação
            let token =
                Math.random().toString(16).substring(2)+
                Math.random().toString(16).substring(2)
                sessionStorage.setItem("usuario", usuario.current.value);
                sessionStorage.setItem("senha", token);
                
                navigate("/quiz"); // Redireciona para o quiz
        }else{
            alert("Usuário/Email ou senha inválidos!");
        }
    };

    // Hook - useEffect - Realiza um efeito colateral , no exemplo ele vai
    // até api e tras os dados
    useEffect(() => {
        //Pega a url da api
        fetch("http://localhost:5001/usuarios")

        // Promise
        .then((res) => {
            // Converte os dados em json
            return res.json();
        })

        // Realiza as alterações das variaveis
        .then((res) => {
            setUsuarios(res);
        })
        // Retorna um array vazio
    }, []);

    return(
        <main className="mt-20 min-h-screen flex justify-center items-start relative bg-login bg-cover bg-center sombra-login">
            <div className="absolute inset-0 bg-black/50 bg-gradient-to-b from-black/50 to-black/30"></div>
            <section className="relative bg-white/10 backdrop-blur-[10px] border-2 border-white/80 py-8 sm:py-6 xl:py-8 max-[400px]:px-4 px-6 lg:px-8 rounded-2xl my-12 md:my-14 xl:mt-16 xl:mb-20 mx-auto max-[400px]:w-72 md:min-w-[25rem] lg:min-w-[30rem] xl:min-w-[37rem]">
                <form onSubmit={handleSubmit}>
                    <h1 className="text-4xl sm:text-[40px] md:text-[44px] md:py-2 text-center text-white font-bold">Login</h1>
                    <div className="relative w-full max-[400px]:h-14 h-16 sm:h-[68px] mt-7 mx-auto">
                        <input 
                            type="text" 
                            placeholder="Usuário/Email"
                            required 
                            id="usuario"
                            ref={usuario}
                            className="w-full h-full bg-transparent outline-none border-2 border-white/80 rounded-full max-[400px]:text-[15px] max-sm:text-lg text-xl text-white py-5 px-6 placeholder:text-white pr-12"
                        />
                        <FaUser className="absolute right-6 top-1/2 -translate-y-1/2 text-[19px] sm:text-xl text-white"/>
                    </div>
                    <div className="relative w-full max-[400px]:h-14 h-16 sm:h-[68px] mt-7 mx-auto">
                        <input 
                            type={mostrarSenha ? "text" : "password"}
                            placeholder="Senha"
                            id="senha"
                            ref={senha}
                            className="w-full h-full bg-transparent outline-none border-2 border-white/80 rounded-full max-[400px]:text-[15px] max-sm:text-lg text-xl text-white py-5 px-6 placeholder:text-white pr-24"
                        />
                        <span onClick={() => setMostrarSenha(!mostrarSenha)} >
                            {mostrarSenha ? <FaEye className="absolute top-1/2 -translate-y-1/2 right-14 max-sm:text-xl text-2xl text-white cursor-pointer transition-colors ease-in-out duration-300 hover:text-white/70 select-none"/> : <FaEyeSlash className="absolute top-1/2 -translate-y-1/2 right-14 max-sm:text-xl text-2xl text-white cursor-pointer transition-colors ease-in-out duration-300 hover:text-white/70 select-none"/>} {/* Ícone para mostrar/ocultar senha */}
                        </span>
                        <FaLock className="absolute right-6 top-1/2 -translate-y-1/2 text-[19px] sm:text-xl text-white"/>
                    </div>

                    <div className="flex text-[15px] sm:text-lg mt-3 sm:mt-4 mb-4 sm:mb-5 ml-2">
                        <label className="text-white">
                            <input className="mr-1" type="checkbox" />
                            Lembre de mim
                        </label>
                    </div>

                    <button className="w-full py-4 sm:py-[18px] text-white bg-green-700 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.2)] cursor-pointer text-xl sm:text-2xl font-bold transition-colors duration-700 ease-in-out border-2 border-white hover:bg-green-900 hover:text-white" type="submit">Entrar</button>

                    <a href="#" className="flex flex-col max-sm:text-[15px] text-lg hover:underline items-center mt-3 sm:mt-4 text-green-500 font-bold">Esqueceu sua senha?</a>

                    <div className="flex max-[400px]:gap-2 justify-center gap-2 text-base mt-5 mb-1 text-white">
                        <p className="max-[400px]:text-sm max-sm:text-base text-lg">Não possui uma conta?</p>
                        <Link to="/criar-conta" className="font-bold max-[400px]:text-sm max-sm:text-base text-lg text-yellow-500 hover:underline">Criar</Link>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default Login