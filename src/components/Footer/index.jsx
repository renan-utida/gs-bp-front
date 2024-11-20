import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaRegEnvelope, FaWhatsapp, FaYoutube } from 'react-icons/fa6'
import LogoImg from './../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {

    return(
        <footer className="text-white w-full h-auto p-10 sm:px-20 sm:pt-16 bg-[#072b07] border-t-4 border-yellow-500">
            <div className='flex flex-col'>
                <Link to='/' className='flex flex-row items-center gap-5'>
                    <h2 className="text-[33px] sm:text-4xl md:text-5xl lg:text-[54px] font-bold">Bright Path</h2>
                    <img className='w-12 sm:w-14 md:w-16 lg:w-[4.3rem] h-12 sm:h-14 md:h-16 lg:h-[4.3rem]' src={LogoImg} alt="Logo Bright Path" />
                </Link>
                <p className=" mt-3 italic text-lg sm:text-xl md:text-2xl lg:text-[27px]">Com a Bright Path, cada raio de sol é uma oportunidade para transformar vidas.</p>
                <div className='flex flex-col sm:flex-row'>
                    <div className='flex flex-col mt-12 sm:w-1/2'>
                        <h3 className='text-[28px] lg:text-3xl text-green-300 mb-3 sm:mb-4 font-bold'>Links Rápidos</h3>
                        <ul>
                            <li className='mb-2 sm:mb-3'>
                                <Link to='/' className='font-bold text-lg md:text-xl lg:text-2xl transition-colors ease-in-out duration-300 hover:text-green-500'>Home</Link>
                            </li>
                            <li className='mb-2 sm:mb-3'>
                                <Link to='/' className='font-bold text-lg md:text-xl lg:text-2xl transition-colors ease-in-out duration-300 hover:text-green-500'>Cálculo Energético</Link>
                            </li>
                            <li className='mb-2 sm:mb-3'>
                                <Link to='/geracao-energia' className='font-bold text-lg md:text-xl lg:text-2xl transition-colors ease-in-out duration-300 hover:text-green-500'>Geração de Energia</Link>
                            </li>
                            <li className='mb-2 sm:mb-3'>
                                <Link to='/' className='font-bold text-lg md:text-xl lg:text-2xl transition-colors ease-in-out duration-300 hover:text-green-500'>Quiz</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col mt-12 sm:w-1/2'>
                        <h3 className='text-[28px] lg:text-3xl text-green-300 mb-4 sm:mb-5 font-bold'>Follow Us</h3>
                        <ul className='flex flex-row gap-6 md:gap-8 lg:gap-10'>
                            <li>
                                <a href=""><FaInstagram className='w-7 h-7 lg:w-9 lg:h-9 text-white cursor-pointer transition-colors delay-100 ease-in-out hover:text-green-500'/></a>
                            </li>
                            <li>
                                <a href=""><FaFacebook className='w-7 h-7 lg:w-9 lg:h-9 text-white cursor-pointer transition-colors delay-100 ease-in-out hover:text-green-500'/></a>
                            </li>
                            <li>
                                <a href=""><FaYoutube className='w-7 h-7 lg:w-9 lg:h-9 text-white cursor-pointer transition-colors delay-100 ease-in-out hover:text-green-500'/></a>
                            </li>
                            <li>
                                <a href=""><FaGithub className='w-7 h-7 lg:w-9 lg:h-9 text-white cursor-pointer transition-colors delay-100 ease-in-out hover:text-green-500'/></a>
                            </li>
                        </ul>
                        <h3 className='text-[28px] lg:text-3xl max-sm:mt-12 sm:mt-7 text-green-300 mb-4 sm:mb-5 font-bold'>Contact Us</h3>
                        <ul className='flex flex-row gap-6 md:gap-8 lg:gap-10'>
                            <li>
                                <a href=""><FaWhatsapp className='w-7 h-7 lg:w-9 lg:h-9 text-white cursor-pointer transition-colors delay-100 ease-in-out hover:text-green-500'/></a>
                            </li>
                            <li>
                                <a href=""><FaLinkedin className='w-7 h-7 lg:w-9 lg:h-9 text-white cursor-pointer transition-colors delay-100 ease-in-out hover:text-green-500'/></a>
                            </li>
                            <li>
                                <a href=""><FaGoogle className='w-7 h-7 lg:w-9 lg:h-9 text-white cursor-pointer transition-colors delay-100 ease-in-out hover:text-green-500'/></a>
                            </li>
                            <li>
                                <a href=""><FaRegEnvelope className='w-7 h-7 lg:w-9 lg:h-9 text-white cursor-pointer transition-colors delay-100 ease-in-out hover:text-green-500'/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className='text-center text-2xl max-sm:text-lg max-[500px]:text-base text-green-700 italic mt-20 pb-1 font-bold'>@2024 - Todos os direitos reservados</p>
        </footer>
    )
}

export default Footer