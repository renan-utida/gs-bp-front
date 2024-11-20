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
            className={`option ${ isCorrect ? "correct" : ""} ${isWrong ? "wrong" : ""}`}
            onClick={() => !quizState.answerSelected && selectOption()}
        >
            <p>{option}</p>
        </div>
    )
}

export default Option