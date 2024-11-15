import { useState } from "react";

const MenuHamburger = () => {

    // Estado para controlar se o menu está ativo ou não
    const [menuActive, setMenuActive] = useState(false);

    // Função para alternar o estado do menu
    const toggleMenu = () => {
        setMenuActive(!menuActive); // Alterna entre true e false
    };

    return(
        <div className="flex font-bold text-lg items-center">
            <nav id="nav" className={menuActive ? "active" : ""}>
                <button 
                    id="btn-menu" 
                    onClick={toggleMenu} 
                    className="flex px-4 mb-1 border-none bg-none text-white cursor-pointer gap-2"
                >
                    <span 
                        id="hamburger"
                        className="border-t-4 w-[26px] after:content-[''] after:block after:w-[26px] after:h-1 after:bg-current after:mt-1 after:transition after:duration-500 after:relative before:content-[''] before:block before:w-[26px] before:h-1 before:bg-current before:mt-1 before:transition before:duration-500 before:relative"
                    ></span>
                </button>
                <ul id="menu" className="block absolute w-1/4 top-20 left-0 list-none bg-emerald-800 transition-all ease-in duration-300 z-50 h-0 invisible overflow-y-hidden">
                    <li className="p-4">Item 1</li> 
                    <li className="p-4">Item 2</li> 
                    <li className="p-4">Item 3</li> 
                    <li className="p-4">Item 4</li> 
                    <li className="p-4">Item 5</li> 
                    <li className="p-4">Item 6</li>
                </ul>

            </nav>

        </div>
    )
}

export default MenuHamburger