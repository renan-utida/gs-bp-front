import { FaBoltLightning, FaHand, FaRegFaceFrown } from "react-icons/fa6"
import LogoImg from './../../assets/images/logo.png'
import { Link } from "react-router-dom"


const Error = () => {

    return(
        <main className="px-3 min-[450px]:px-5 sm:px-20 min-h-screen w-full flex flex-col items-center justify-center relative bg-error bg-cover bg-center">
            <div className="absolute inset-0 bg-black/50 bg-gradient-to-b from-black/50 to-black/40"></div>
            <section className="relative flex flex-col items-center gap-10 sm:gap-12 text-white">
                <div className="flex flex-row text-6xl min-[450px]:text-7xl sm:text-8xl md:text-9xl gap-3 min-[450px]:gap-7 sm:gap-10">
                    <FaBoltLightning className='text-yellow-400 transition-all ease-in-out duration-700 hover:scale-125 hover:text-yellow-600'/>
                    <FaRegFaceFrown className="transition-all text-white ease-in-out duration-700 hover:scale-125 hover:text-slate-300"/>
                    <FaHand className="text-[#b38b6d] transition-all ease-in-out duration-700 hover:scale-125 hover:text-[#885c3a]"/>
                </div>
                <div className="flex">
                    <Link className="flex flex-row items-center gap-2 min-[450px]:gap-3 sm:gap-5 md:gap-6 mt-4 text-emerald-500 transition-all duration-1000 ease-in-out hover:text-emerald-700 hover:scale-110" to='/'>
                        <h2 className="font-bold text-4xl min-[450px]:text-5xl sm:text-6xl md:text-7xl ">Bright Path</h2>
                        <img src={LogoImg} alt="Logo Img" className="h-12 min-[450px]:h-16 sm:h-20 md:w-24 w-12 min-[450px]:w-16 sm:w-20 md:h-24"/>
                    </Link>
                </div>
                <div className="flex flex-col items-center">
                    <h3 className="font-bold text-4xl min-[450px]:text-5xl sm:text-6xl md:text-7xl ">404</h3>
                    <p className="my-3 text-lg md:text-xl font-bold">Page Not Found!</p>
                    <p className="text-lgmin-[450px]:text-xl md:text-2xl italic">Parece que você está perdido!</p>
                </div>
            </section>
        </main>
    )
}

export default Error