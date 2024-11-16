import LogoImg from './../../assets/images/logo.png'
import MenuHamburger from './MenuHamburger'

const Nav = () => {

    return(
        <header className="fixed top-0 left-0 w-full h-20 bg-green-900 px-4 shadow-lg z-50">
            <div className='flex flex-row justify-between h-full items-center'>
                <MenuHamburger/>               
                <div className='flex flex-row gap-2 h-full items-center justify-center z-10'>
                    <h1 className="hidden md:block text-[2.5rem] text-white font-bold">Bright Path</h1>
                    <img 
                        className='h-16 w-auto'
                        src={LogoImg} 
                        alt="Logo Bright Path" />
                </div>
                <a href="#" className='px-3 py-2 text-lg sm:px-4 sm:py-2 sm:text-xl border border-white text-white font-bold rounded-lg hover:text-emerald-600 hover:border-emerald-600 transition-colors ease-in-out duration-300'>Login</a>  
            </div>
        </header>
    )
}

export default Nav