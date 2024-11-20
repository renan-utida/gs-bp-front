import { useContext} from 'react';
import { QuizContext } from '../../context/quiz';
import { FaBoltLightning, FaQuestion, FaRecycle } from 'react-icons/fa6';
import { PiSolarPanelBold } from 'react-icons/pi';


const Welcome=()=> {
    const [quizState, dispatch] = useContext(QuizContext);

    return(
        <section id="welcome" className='relative mt-5 text-center max-w-2xl text-white'>
            <h2 className='text-[1.9rem] font-bold mb-4 italic'>Seja Bem-Vindo ao nosso Quiz!</h2>
            <p className='text-xl'>Você está preparado para responder 15 perguntas aleatórias relacionadas à <span className='font-bold text-green-300'>Energia Sustentável</span>?</p>
            <h3 className='mt-4 mb-5 text-3xl italic text-green-400  font-bold'>Boa Sorte!</h3>
            <button onClick={()=> dispatch({type: "CHANGE_STATE"})} className='font-bold text-2xl cursor-pointer py-4 px-8 text-white bg-emerald-600 border-[3px] border-white rounded-3xl hover:text-emerald-400 hover:bg-green-900 hover:border-emerald-400 transition-colors duration-500 ease-in-out'>
                Iniciar
            </button>
            <div className='flex flex-row justify-center mt-16 text-white text-5xl gap-10 cursor-pointer transition-all duration-1000 ease-in-out'>
                <PiSolarPanelBold className='hover:text-yellow-500 hover:scale-125'/>
                <FaRecycle className='mx-1 hover:text-green-500 hover:scale-125'/>
                <FaBoltLightning className='hover:text-yellow-300 hover:scale-125'/>
                <FaQuestion className='hover:text-red-600 hover:scale-125'/>
            </div>
        </section>
    )
}

export default Welcome