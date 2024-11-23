import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import { FaBolt, FaCoins, FaGamepad, FaUser } from "react-icons/fa6";
import { MdLogin, MdLogout } from "react-icons/md";
import { FaCircleInfo } from "react-icons/fa6";

const MenuHamburger = ({isAuthenticated, handleLogout}) => {

    // Estado para controlar se o menu está ativo ou não
    const [menuActive, setMenuActive] = useState(false);

    const navigate = useNavigate();

    // Função para alternar o estado do menu
    const toggleMenu = (event) => {
        event.preventDefault();  // Evita comportamentos indesejados ao clicar
        setMenuActive(!menuActive); // Alterna entre true e false
    };

    // Função para fechar o menu ao clicar em um link
    const closeMenu = () => {
        setMenuActive(false);
    };

    const logout = () => {
        sessionStorage.removeItem("usuario");
        sessionStorage.removeItem("usuarioDados");
        // Adicione qualquer outra chave específica de usuário que esteja no sessionStorage
        window.location.reload(); // Opcional, para garantir que os dados antigos não fiquem na memória
    };

    const handleUserNavigation = () => {
        if (isAuthenticated) {
            navigate("/area-usuario");
            closeMenu();
        } else {
            alert('Você precisa estar logado para acessar esta pagina!')
            navigate("/login");
            closeMenu();
        }
    };

    const handleQuizNavigation = () => {
        if (isAuthenticated) {
            navigate("/quiz");
            closeMenu();
        } else {
            alert('Você precisa estar logado para acessar esta pagina!')
            navigate("/login");
            closeMenu();
        }
    };

    const handleCalculoNavigation = () => {
        if (isAuthenticated) {
            navigate("/calculo-energetico");
            closeMenu();
        } else {
            alert('Você precisa estar logado para acessar esta pagina!')
            navigate("/login");
            closeMenu();
        }
    };

    return(
        <div className="flex font-bold text-lg items-center md:mr-[120px]">
            <nav id="nav" className={menuActive ? "active" : ""}>
                <button 
                    id="btn-menu" 
                    onClick={toggleMenu} 
                    className="flex px-4 mb-1 border-none bg-none text-white cursor-pointer gap-2"
                >
                    <span 
                        id="hamburger"
                        className="border-t-4 w-9 rounded-sm after:content-[''] after:block after:w-9 after:h-1 after:bg-current after:mt-[6px] after:transition after:duration-500 after:relative after:rounded-md before:content-[''] before:block before:w-9 before:h-1 before:bg-current before:mt-[6px] before:transition before:duration-500 before:relative before:rounded-md"
                    ></span>
                </button>
                <ul id="menu" className="block text-white absolute w-3/5 sm:w-1/2 md:w-2/5 lg:w-1/3 top-20 left-0 list-none bg-[#000000] transition-all ease-in duration-300 z-50 h-0 invisible overflow-y-hidden">
                    <li>
                        <Link to='/' onClick={closeMenu} className="py-6 pl-4 pr-2 sm:pr-3 md:pr-4 md:pl-5 flex items-center my-[0.2rem] mx-[0.3rem] border-b border-b-green-700 text-white cursor-pointer hover:bg-green-900">
                            <FaHome className="w-6 min-[500px]:w-7 lg:w-8 h-6 min-[500px]:h-7 lg:h-8 mr-5"/>
                            <p className="mb-[2px] max-[400px]:text-base max-[500px]:text-lg text-xl lg:text-2xl">Página Principal</p>
                        </Link>
                    </li> 
                    <li>
                        <Link to='/geracao-energia' onClick={closeMenu} className="py-6 pl-4 pr-2 sm:pr-3 md:pr-4 md:pl-5 flex items-center my-[0.2rem] mx-[0.3rem] border-b border-b-green-700 text-white cursor-pointer hover:bg-green-900">
                            <FaBolt className="w-6 min-[500px]:w-7 lg:w-8 h-6 min-[500px]:h-7 lg:h-8 mr-5"/>
                            <p className="mb-[2px] max-[400px]:text-base max-[500px]:text-lg text-xl lg:text-2xl">Geração de Energia</p>
                        </Link>
                    </li> 
                    <li>
                        <a onClick={handleUserNavigation} className="py-6 pl-4 pr-2 sm:pr-3 md:pr-4 md:pl-5 flex items-center my-[0.2rem] mx-[0.3rem] border-b border-b-green-700 text-white cursor-pointer hover:bg-green-900">
                            <FaUser className="w-6 min-[500px]:w-7 lg:w-8 h-6 min-[500px]:h-7 lg:h-8 mr-5"/>
                            <p className="mb-[2px] max-[400px]:text-base max-[500px]:text-lg text-xl lg:text-2xl">Área do Usuário</p>
                        </a>
                    </li>
                    <li>
                        <a onClick={handleQuizNavigation} className="py-6 pl-4 pr-2 sm:pr-3 md:pr-4 md:pl-5 flex items-center my-[0.2rem] mx-[0.3rem] border-b border-b-green-700 text-white cursor-pointer hover:bg-green-900">
                            <FaGamepad className="w-6 min-[500px]:w-7 lg:w-8 h-6 min-[500px]:h-7 lg:h-8 mr-5"/>
                            <p className="mb-[2px] max-[400px]:text-base max-[500px]:text-lg text-xl lg:text-2xl">Quiz</p>
                        </a>
                    </li>
                    <li>
                        <a onClick={handleCalculoNavigation} className="py-6 pl-4 pr-2 sm:pr-3 md:pr-4 md:pl-5 flex items-center my-[0.2rem] mx-[0.3rem] border-b border-b-green-700 text-white cursor-pointer hover:bg-green-900">
                            <FaCoins className="w-6 min-[500px]:w-7 lg:w-8 h-6 min-[500px]:h-7 lg:h-8 mr-5"/>
                            <p className="mb-[2px] max-[400px]:text-base max-[500px]:text-lg text-xl lg:text-2xl">Cálculo Energético</p>
                        </a>
                    </li>
                    <li>
                        <Link to="/sobre" onClick={closeMenu} className="py-6 pl-4 pr-2 sm:pr-3 md:pr-4 md:pl-5 flex items-center my-[0.2rem] mx-[0.3rem] border-b border-b-green-700 text-white cursor-pointer hover:bg-green-900">
                            <FaCircleInfo className="w-6 min-[500px]:w-7 lg:w-8 h-6 min-[500px]:h-7 lg:h-8 mr-5"/>
                            <p className="mb-[2px] max-[400px]:text-base max-[500px]:text-lg text-xl lg:text-2xl">Sobre</p>
                        </Link>    
                    </li> 
                    {isAuthenticated ? ( 
                        <li>
                            <a onClick={() => {handleLogout(); closeMenu(); logout();}} className="py-6 pl-4 pr-2 sm:pr-3 md:pr-4 md:pl-5 flex items-center my-[0.2rem] mx-[0.3rem] border-b border-b-green-700 text-white cursor-pointer hover:bg-green-900">
                                <MdLogout className="w-6 min-[500px]:w-7 lg:w-8 h-6 min-[500px]:h-7 lg:h-8 mr-5"/>
                                <p className="mb-[2px] max-[400px]:text-base max-[500px]:text-lg text-xl lg:text-2xl">Sair</p>
                            </a>
                        </li>
                    ) : ( 
                        <li>
                            <Link to="/login" onClick={closeMenu} className="py-6 pl-4 pr-2 sm:pr-3 md:pr-4 md:pl-5 flex items-center my-[0.2rem] mx-[0.3rem] border-b border-b-green-700 text-white cursor-pointer hover:bg-green-900">
                                <MdLogin className="w-6 min-[500px]:w-7 lg:w-8 h-6 min-[500px]:h-7 lg:h-8 mr-5"/>
                                <p className="mb-[2px] max-[400px]:text-base max-[500px]:text-lg text-xl lg:text-2xl">Login</p>
                            </Link>
                        </li> 
                    )}
                </ul>
            </nav>
        </div>
    )
}

export default MenuHamburger