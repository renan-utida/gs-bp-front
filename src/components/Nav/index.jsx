import LogoImg from './../../assets/images/logo.png'
import MenuHamburger from './MenuHamburger'

import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Nav = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();
    const location = useLocation(); // Hook para monitorar a rota atual

    // Função para verificar a autenticação
    const checkAuthentication = () => {
        const usuario = sessionStorage.getItem("usuario");
        if (usuario) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    };

    // Atualiza o estado da autenticação ao carregar o componente, ao mudar de rota ou ao alterar o sessionStorage
    useEffect(() => {
        checkAuthentication();

        // Adiciona um evento para verificar as mudanças no sessionStorage
        window.addEventListener("storage", checkAuthentication);

        // Limpa o evento ao desmontar o componente
        return () => {
            window.removeEventListener("storage", checkAuthentication);
        };
    }, [location]); // O hook useEffect agora monitora mudanças de rota

    // Função de logout
    const handleLogout = () => {
        sessionStorage.removeItem("usuario");
        sessionStorage.removeItem("senha");
        setIsAuthenticated(false);
        alert("Saindo da Sessão");
        navigate("/");
    };

    return(
        <header className="fixed top-0 left-0 w-full h-20 bg-green-900 px-4 shadow-lg z-50 border-b-[3px] border-yellow-500">
            <div className='flex flex-row justify-between h-full items-center'>
                <MenuHamburger
                    isAuthenticated={isAuthenticated}
                    handleLogout={handleLogout}
                />               
                <Link to='/' className='flex flex-row gap-2 h-full items-center justify-center z-10'>
                    <h1 className="hidden md:block text-[2.5rem] text-white font-bold">Bright Path</h1>
                    <img 
                        className='h-16 w-auto'
                        src={LogoImg} 
                        alt="Logo Bright Path" />
                </Link>
                <Link to="/login" className='px-3 py-2 text-lg sm:px-4 sm:py-2 sm:text-xl border border-white text-white font-bold rounded-lg hover:text-emerald-600 hover:border-emerald-600 transition-colors ease-in-out duration-300'>Login</Link>  
            </div>
        </header>
    )
}

export default Nav