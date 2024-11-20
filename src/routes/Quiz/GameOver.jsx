import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

const GameOver=()=>{
    const [quizState, dispatch] = useContext(QuizContext);

    return(
        <section className="flex flex-col items-center">
            <h1 className="relative inline-block py-10 sm:py-8 text-green-500 font-bold text-3xl min-[500px]:text-4xl sm:text-5xl">Bright Path Quiz</h1>
            <div id="gameover" className="relative flex flex-col text-center text-white max-w-2xl bg-green-950 border-[3px] border-emerald-400 rounded-3xl mx-4 sm:mx-10 mb-8 py-5 px-5 sm:px-8">
                <h2 className="font-bold text-emerald-500 text-3xl sm:text-4xl italic">Fim de Jogo!</h2>
                <p className="text-lg sm:text-xl mt-10 mb-4"><strong className="font-bold">Pontuação:</strong> {quizState.score} pontos</p>
                <p className="text-lg sm:text-xl mt-3 mb-4">Você acertou {quizState.correctAnswers} de {quizState.questions.length}{""} perguntas.</p>
                <button onClick={()=> dispatch({type: "NEW_GAME"})} className='font-bold text-xl sm:text-2xl cursor-pointer mt-4 mb-2 py-4 px-6 sm:px-8 text-white bg-emerald-600 border-[3px] border-white rounded-3xl hover:text-emerald-400 hover:bg-green-900 hover:border-emerald-400 transition-colors duration-500 ease-in-out'>Reiniciar</button>
            </div>

        </section>
    )
}

export default GameOver