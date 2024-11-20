import { useContext } from "react"
import { QuizContext } from "../../context/quiz"

const Option=({option, selectOption, answer}) =>{
    const [quizState, dispatch] = useContext(QuizContext);

    // Verifica se a opção foi selecionada e se ela está incorreta
    const isSelected = quizState.answerSelected === option;
    const isCorrect = isSelected && option === answer;
    const isWrong = isSelected && option !== answer;

    return(
        <div 
            className={`option transition-all duration-500 ease-in-out bg-green-700 opacity-100 hover:opacity-85 hover:bg-green-800 rounded-2xl p-4 mb-4 cursor-pointer  ${ isCorrect ? "correct" : ""} ${isWrong ? "wrong" : ""}`}
            onClick={() => !quizState.answerSelected && selectOption()}
        >
            <p className="mt-1 mx-2 text-[19px]">{option}</p>
        </div>
    )
}

export default Option