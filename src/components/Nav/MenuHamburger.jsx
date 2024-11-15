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
                        className="border-t-4 w-9 rounded-sm after:content-[''] after:block after:w-9 after:h-1 after:bg-current after:mt-[6px] after:transition after:duration-500 after:relative after:rounded-md before:content-[''] before:block before:w-9 before:h-1 before:bg-current before:mt-[6px] before:transition before:duration-500 before:relative before:rounded-md"
                    ></span>
                </button>
                <ul id="menu" className="block absolute w-1/2 md:w-1/3 top-20 left-0 list-none bg-green-950 transition-all ease-in duration-300 z-50 h-0 invisible overflow-y-hidden">
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