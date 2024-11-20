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
        <div id="question" className="relative text-center max-w-3xl bg-green-950 rounded-3xl border-[3px] border-emerald-400 py-5 pb-4 px-8 text-white sem-sombra">
            <p className="mb-5 text-base italic">Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
            <h2 className="mb-6 font-bold text-xl">{currentQuestion.question}</h2>
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
                <button onClick={()=> dispatch({type: "CHANGE_QUESTION"})} className='font-bold text-2xl cursor-pointer my-1 py-4 px-8 text-white bg-emerald-600 border-[3px] border-white rounded-3xl hover:text-emerald-400 hover:bg-green-900 hover:border-emerald-400 transition-colors duration-500 ease-in-out'>
                    Continuar
                </button>
            )}
        </div>
    )
}

export default Question