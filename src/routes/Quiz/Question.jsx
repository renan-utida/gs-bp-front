import { useContext, useEffect, useState } from "react";
import { QuizContext } from "../../context/quiz";

import Option from "./Option";

const Question =()=>{
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion];
    const [shuffledOptions, setShuffledOptions] = useState([]);

    useEffect(() => {
        // Use as opções já embaralhadas do estado global
        setShuffledOptions(currentQuestion.options);
    }, [currentQuestion]);

    const onSelectOption = (option) => {
        dispatch({
            type: "CHECK_ANSWER",
            payload: {answer: currentQuestion.answer, option}
        });
    };

    return(
        <div id="question">
            <p className="contagem-perguntas">Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
            <h2>{currentQuestion.question}</h2>
            <div id="options-container">
                {shuffledOptions.map((option) => (
                    <Option 
                        option={option} 
                        key={option} 
                        answer={currentQuestion.answer}
                        selectOption={() => onSelectOption(option)}
                    />
                ))}
            </div>
            {quizState.answerSelected && (
                <button onClick={()=> dispatch({type: "CHANGE_QUESTION"})}>
                    Continuar
                </button>
            )}
        </div>
    )
}

export default Question