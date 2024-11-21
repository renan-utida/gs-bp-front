import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import UsuarioImg from "./../../assets/images/usuario-login.png"
import { FaPowerOff, FaUser } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";

const LoginBtn = ({handleLogout}) => {

    // Estado para controlar se o dropdown está aberto ou fechado
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Estado para armazenar os dados do usuário logado
    const [usuarioDados, setUsuarioDados] = useState(null);

    // Referência para o elemento do dropdown
    const dropdownRef = useRef(null);

    // Função para alternar a visibilidade do dropdown
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Fecha o dropdown se o clique for fora dele
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    // Função para fechar o dropdown ao clicar em um dos links
    const handleMenuItemClick = () => {
        setIsDropdownOpen(false);
    };

    const logout = () => {
        sessionStorage.removeItem("usuario");
        sessionStorage.removeItem("usuarioDados");
        // Adicione qualquer outra chave específica de usuário que esteja no sessionStorage
        window.location.reload(); // Opcional, para garantir que os dados antigos não fiquem na memória
    };

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

    // Adiciona o evento de clique ao montar e remove ao desmontar o componente
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <section ref={dropdownRef}>
            <div onClick={toggleDropdown} className="flex justify-end items-center gap-[10px] mr-3 md:mr-4 cursor-pointer">
                <div className="hidden md:flex flex-col text-end font-bold leading-4">
                    <div className="flex flex-row items-center justify-end my-1 gap-[5px]">
                        <h3 className="text-white text-[19px]">Olá,</h3>
                        <h3 className="text-green-400 text-[21px]">{usuarioDados ? usuarioDados.nome : "Nome"}</h3>
                    </div>
                    <span className="text-sm text-white italic">{usuarioDados ? usuarioDados.email : "email"}</span>
                </div>
                <div className="relative w-12 h-12 bg-green-700 rounded-full overflow-hidden border-[3px] border-green-700">
                    <img src={usuarioDados && usuarioDados.avatar ? usuarioDados.avatar : UsuarioImg} alt="Icone Usuario" className="absolute w-full h-full top-0 left-0 object-cover"/>
                </div>
            </div>
            <div id="login-menu" className={`absolute top-[85px] right-[10px] w-[12rem] min-h-24 bg-white shadow-[0px_0px_35px_rgba(0, 0, 0, 0.5)] opacity-0 invisible transform -translate-y-5 transition-all duration-300 ease-linear ${isDropdownOpen ? "dropdown" :""}`}>
                <ul className="flex flex-col bg-white list-none font-bold">
                    <li className="py-[15px] px-5 bg-white transition-colors duration-200 ease-in-out hover:bg-gray-400">
                        <Link to='/perfil' onClick={handleMenuItemClick} className="text-black flex items-center gap-[10px] cursor-pointer text-base"><FaUser className="w-5 h-5 mr-[0.3rem] mt-[0.1rem] text-black"/>Perfil</Link>
                    </li>
                    <li className="py-[15px] px-5 border-t-[1px] border-black bg-white transition-colors duration-200 ease-in-out hover:bg-gray-400">
                        <Link to="/editar-conta" onClick={handleMenuItemClick} className="text-black flex items-center gap-[10px] cursor-pointer text-base"><FaRegEdit className="w-5 h-5 mr-[0.3rem] mt-[0.1rem] text-black"/>Editar Conta</Link>
                    </li>
                    <li className="py-[15px] px-5 bg-white transition-colors duration-200 ease-in-out hover:bg-gray-400 border-t-[1px] border-red-400">
                        <a onClick={() => { handleLogout(); handleMenuItemClick(); logout();}} className="text-red-600 flex items-center gap-[10px] cursor-pointer text-base"><FaPowerOff className="w-5 h-5 mr-[0.3rem] mt-[0.1rem] text-red-600"/>Sair</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default LoginBtn;