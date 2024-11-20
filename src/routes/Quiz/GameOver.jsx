import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

const GameOver=()=>{
    const [quizState, dispatch] = useContext(QuizContext);

    return(
        <div id="gameover">
            <h2>Fim de Jogo!</h2>
            <p><strong>Pontuação:</strong> {quizState.score} pontos</p>
            <p>Você acertou {quizState.correctAnswers} de {quizState.questions.length}{""} perguntas.</p>
            <button onClick={()=> dispatch({type: "NEW_GAME"})}>Reiniciar</button>
        </div>
    )
}

export default GameOver