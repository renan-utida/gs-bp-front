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
        <main className="mt-20">
            <section>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="input-field">
                        <input 
                            type="text" 
                            placeholder="Usuário ou Email"
                            required 
                            id="usuario"
                            ref={usuario}
                        />
                        <FaUser />
                    </div>
                    <div className="input-field">
                        <input 
                            type={mostrarSenha ? "text" : "password"}
                            placeholder="Senha"
                            id="senha"
                            ref={senha}
                        />
                        <span onClick={() => setMostrarSenha(!mostrarSenha)} >
                            {mostrarSenha ? <FaEye /> : <FaEyeSlash />} {/* Ícone para mostrar/ocultar senha */}
                        </span>
                        <FaLock />
                    </div>

                    <div className="recall-forget">
                        <label>
                            <input type="checkbox" />
                            Lembre de mim
                        </label>
                        <a href="#">Esqueceu sua senha?</a>
                    </div>

                    <button type="submit">Entrar</button>

                    <div className="signup-link">
                        <p>Não possui uma conta?</p>
                        <Link to="/criar-conta">Criar</Link>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default Login