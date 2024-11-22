import { FaBoltLightning, FaHand, FaRegFaceFrown } from "react-icons/fa6"
import LogoImg from './../../assets/images/logo.png'
import { Link } from "react-router-dom"


const Error = () => {

    return(
        <main className="px-20 min-h-screen w-full flex flex-col items-center justify-center relative bg-error bg-cover bg-center">
            <div className="absolute inset-0 bg-black/50 bg-gradient-to-b from-black/50 to-black/40"></div>
            <section className="relative flex flex-col items-center gap-12 text-white">
                <div className="flex flex-row text-9xl gap-10">
                    <FaBoltLightning className='text-yellow-400 transition-all ease-in-out duration-700 hover:scale-125 hover:text-yellow-600'/>
                    <FaRegFaceFrown className="transition-all text-white ease-in-out duration-700 hover:scale-125 hover:text-slate-300"/>
                    <FaHand className="text-[#b38b6d] transition-all ease-in-out duration-700 hover:scale-125 hover:text-[#885c3a]"/>
                </div>
                <div className="flex">
                    <Link className="flex flex-row items-center gap-6 mt-4 text-emerald-500 transition-all duration-1000 ease-in-out hover:text-emerald-700 hover:scale-110" to='/'>
                        <h2 className="font-bold text-7xl ">Bright Path</h2>
                        <img src={LogoImg} alt="Logo Img" className="w-24 h-24"/>
                    </Link>
                </div>
                <div className="flex flex-col items-center">
                    <h3 className="font-bold text-7xl ">404</h3>
                    <p className="my-3 text-xl font-bold">Page Not Found!</p>
                    <p className="text-2xl italic">Parece que você está perdido!</p>
                </div>
            </section>
        </main>
    )
}

export default Error