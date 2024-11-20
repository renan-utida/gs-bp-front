import { createContext, useReducer } from "react";

const STAGES = ["Start", "Playing", "End"];

//----------------------------------------------------------------//
// QUIZ
// Perguntas e respostas
const questions = [
    {
        question: "O que é energia renovável? (60 pontos)",
        options: [
            "Energia obtida de fontes que não se esgotam ou que se regeneram rapidamente",
            "Energia gerada exclusivamente por combustíveis fósseis",
            "Energia proveniente de reações nucleares",
            "Energia produzida apenas por grandes hidrelétricas"
        ],
        answer: "Energia obtida de fontes que não se esgotam ou que se regeneram rapidamente",
        points: 60,
    },
    {
        question: "Qual destas fontes é considerada renovável? (50 pontos)",
        options: ["Carvão", "Petróleo", "Vento", "Gás Natural"],
        answer: "Vento",
        points: 50,
    },
    {
        question: "Qual país lidera a produção de energia eólica no mundo atualmente? (85 pontos)",
        options: ["China", "Estados Unidos", "Alemanha", "Índia"],
        answer: "China",
        points: 85,
    },
    {
        question: "O que significa a sigla 'ONU'? (40 pontos)",
        options: [
            "Organização das Nações Unidas",
            "Observatório Nacional de Unidades",
            "Organização Naturalista Unificada",
            "Ordem Nacional Única"
        ],
        answer: "Organização das Nações Unidas",
        points: 40,
    },
    {
        question: "Qual é a principal desvantagem do uso de energia solar? (60 pontos)",
        options: [
            "Custo elevado de instalação inicial",
            "Emissão de poluentes durante a geração de energia",
            "A energia gerada é tóxica para o meio ambiente",
            "Depende exclusivamente de combustíveis fósseis"
        ],
        answer: "Custo elevado de instalação inicial",
        points: 60,
    },
    {
        question: "O que é eficiência energética? (70 pontos)",
        options: [
            "O uso de menos energia para realizar a mesma tarefa ou serviço",
            "O aumento do consumo para obter maior desempenho",
            "A capacidade de consumir combustíveis fósseis com eficiência",
            "Um método de gerar mais calor com menos energia"
        ],
        answer: "O uso de menos energia para realizar a mesma tarefa ou serviço",
        points: 70,
    },
    {
        question: "Qual é o gás mais emitido pelo uso de combustíveis fósseis? (85 pontos)",
        options: ["Oxigênio", "Dióxido de carbono (CO₂)", "Metano (CH₄)", "Óxido nitroso (N₂O)"],
        answer: "Dióxido de carbono (CO₂)",
        points: 85,
    },
    {
        question: "Qual setor consome mais energia elétrica no mundo? (70 pontos)",
        options: ["Residencial", "Indústria", "Agricultura", "Transportes"],
        answer: "Indústria",
        points: 70,
    },
    {
        question: "O que é um painel fotovoltaico? (100 pontos)",
        options: [
            "Um dispositivo que transforma energia solar em energia elétrica",
            "Um tipo de bateria que armazena energia eólica",
            "Uma turbina que converte energia da água em eletricidade",
            "Um aparelho usado para medir consumo elétrico"
        ],
        answer: "Um dispositivo que transforma energia solar em energia elétrica",
        points: 100,
    },
    {
        question: "O que significa a sigla ESG? (90 pontos)",
        options: [
            "Environmental, Social, and Governance",
            "Energy, Sustainability, and Growth",
            "Economic Sustainable Growth",
            "Environmental Safety Goals"
        ],
        answer: "Environmental, Social, and Governance",
        points: 90,
    },
    {
        question: "O que é o efeito estufa? (55 pontos)",
        options: [
            "A retenção de calor na atmosfera devido a gases como CO₂",
            "O resfriamento da atmosfera terrestre por meio de radiação solar",
            "A redução dos gases na atmosfera causados pelo aumento da vegetação",
            "Um fenômeno que torna a Terra mais fria"
        ],
        answer: "A retenção de calor na atmosfera devido a gases como CO₂",
        points: 55,
    },
    {
        question: "Qual é a fonte de energia elétrica mais utilizada no Brasil? (55 pontos)",
        options: [
            "Nuclear",
            "Hidrelétrica",
            "Solar",
            "Eólica"
        ],
        answer: "Hidrelétrica",
        points: 55,
    },
    {
        question: "Qual destes não é considerado um impacto ambiental da energia eólica? (75 pontos)",
        options: [
            "Morte de aves e morcegos",
            "Poluição sonora",
            "Produção de gases de efeito estufa",
            "Alteração do habitat local"
        ],
        answer: "Produção de gases de efeito estufa",
        points: 75,
    },
    {
        question: "Qual é a unidade de medida da energia elétrica? (90 pontos)",
        options: ["Joule", "Watt", "Kilowatt-hora", "Ampere"],
        answer: "Kilowatt-hora",
        points: 90,
    },
    {
        question: "O que é a pegada de carbono? (100 pontos)",
        options: [
            "A quantidade de carbono emitida por indústrias em áreas rurais",
            "A medida da emissão de gases de efeito estufa por uma pessoa ou organização",
            "O total de dióxido de carbono presente na atmosfera",
            "A estimativa de poluentes sólidos em áreas industriais"
        ],
        answer: "A medida da emissão de gases de efeito estufa por uma pessoa ou organização",
        points: 100,
    },
    {
        question: "Qual é o principal benefício das fontes de energia renováveis? (65 pontos)",
        options: [
            "Redução de emissões de gases de efeito estufa",
            "Maior consumo de combustíveis fósseis",
            "Custo mais alto de manutenção",
            "Dependência de recursos não renováveis"
        ],
        answer: "Redução de emissões de gases de efeito estufa",
        points: 65,
    },
    {
        question: "Qual destas fontes de energia é mais sustentável? (50 pontos)",
        options: ["Carvão", "Gás natural", "Energia solar", "Petróleo"],
        answer: "Energia solar",
        points: 50,
    },
    {
        question: "O que significa a sigla COP no contexto ambiental? (90 pontos)",
        options: [
            "Conferência das Partes",
            "Comitê de Organização de Políticas",
            "Controle de Poluição",
            "Certificação de Organizações Públicas"
        ],
        answer: "Conferência das Partes",
        points: 90,
    },
    {
        question: "Qual é a principal desvantagem da energia nuclear? (65 pontos)",
        options: [
            "Risco de acidentes e geração de resíduos radioativos",
            "Alta emissão de gases de efeito estufa",
            "Baixa eficiência na geração de energia",
            "Depende exclusivamente de fontes renováveis"
        ],
        answer: "Risco de acidentes e geração de resíduos radioativos",
        points: 65,
    },
    {
        question: "O que é a transição energética? (60 pontos)",
        options: [
            "A mudança do uso de combustíveis fósseis para fontes renováveis",
            "O aumento do consumo de energia em países em desenvolvimento",
            "A transformação de energia elétrica em energia térmica",
            "A substituição de energias limpas por energias mais acessíveis"
        ],
        answer: "A mudança do uso de combustíveis fósseis para fontes renováveis",
        points: 60,
    },
    {
        question: "Qual destes países é conhecido por sua alta dependência de energia geotérmica? (95 pontos)",
        options: ["Islândia", "China", "Brasil", "Austrália"],
        answer: "Islândia",
        points: 95,
    },
    {
        question: "O que é o Protocolo de Kyoto? (75 pontos)",
        options: [
            "Um acordo internacional para reduzir as emissões de gases de efeito estufa",
            "Um tratado para expandir o uso de energia nuclear",
            "Uma lei que regula o uso de recursos hídricos",
            "Um pacto para limitar a construção de usinas eólicas"
        ],
        answer: "Um acordo internacional para reduzir as emissões de gases de efeito estufa",
        points: 75,
    },
    {
        question: "Qual é o maior desafio do uso de biocombustíveis? (65 pontos)",
        options: [
            "Impacto no uso de terras agrícolas",
            "Baixa disponibilidade de matéria-prima",
            "Alta emissão de gases poluentes",
            "Falta de regulamentação ambiental"
        ],
        answer: "Impacto no uso de terras agrícolas",
        points: 65,
    },
    {
        question: "Qual tecnologia é essencial para o armazenamento de energia renovável? (60 pontos)",
        options: ["Baterias", "Geradores a diesel", "Turbinas hidráulicas", "Transformadores"],
        answer: "Baterias",
        points: 60,
    },
    {
        question: "O que são créditos de carbono? (80 pontos)",
        options: [
            "Certificados negociáveis que representam a redução de emissões de CO₂",
            "Recursos financeiros para subsidiar energia nuclear",
            "Autorizações para aumentar a pegada de carbono",
            "Incentivos para construir usinas hidrelétricas"
        ],
        answer: "Certificados negociáveis que representam a redução de emissões de CO₂",
        points: 80,
    },
    {
        question: "Qual é a vantagem do uso de energia hidrelétrica? (55 pontos)",
        options: [
            "Baixo custo operacional após construção",
            "Emissão constante de gases de efeito estufa",
            "Dependência de combustíveis fósseis",
            "Impacto ambiental reduzido durante construção"
        ],
        answer: "Baixo custo operacional após construção",
        points: 55,
    },
    {
        question: "Qual gás é o maior contribuinte para o efeito estufa? (65 pontos)",
        options: ["Dióxido de carbono (CO₂)", "Oxigênio (O₂)", "Metano (CH₄)", "Óxido nitroso (N₂O)"],
        answer: "Dióxido de carbono (CO₂)",
        points: 65,
    },
    {
        question: "O que significa energia limpa? (60 pontos)",
        options: [
            "Energia gerada com baixo impacto ambiental",
            "Energia produzida exclusivamente por combustíveis fósseis",
            "Energia gerada por fontes poluentes",
            "Energia usada apenas em áreas rurais"
        ],
        answer: "Energia gerada com baixo impacto ambiental",
        points: 60,
    },
    {
        question: "Qual é o principal objetivo do Acordo de Paris? (75 pontos)",
        options: [
            "Conter o aumento da temperatura global em até 2°C",
            "Incentivar o uso de carvão como fonte de energia",
            "Reduzir o custo de energia elétrica global",
            "Promover o uso exclusivo de energia nuclear"
        ],
        answer: "Conter o aumento da temperatura global em até 2°C",
        points: 75,
    },
    {
        question: "Qual destes materiais é comumente usado para fabricar baterias sustentáveis? (55 pontos)",
        options: ["Lítio", "Carvão", "Chumbo", "Óxido de nitrogênio"],
        answer: "Lítio",
        points: 55,
    },
    {
        question: "O que é energia sustentável? (50 pontos)",
        options: [
            "Energia que atende às necessidades atuais sem comprometer as gerações futuras",
            "Energia produzida exclusivamente por fontes fósseis",
            "Energia utilizada apenas em áreas rurais",
            "Energia que sempre é gerada por hidrelétricas"
        ],
        answer: "Energia que atende às necessidades atuais sem comprometer as gerações futuras",
        points: 50,
    },
    {
        question: "Qual fonte de energia é considerada limpa e renovável? (60 pontos)",
        options: ["Carvão mineral", "Energia solar", "Petróleo", "Gás natural"],
        answer: "Energia solar",
        points: 60,
    },
    {
        question: "Qual é o maior benefício da energia eólica? (65 pontos)",
        options: [
            "Geração de energia com baixa emissão de poluentes",
            "Baixo impacto visual e sonoro",
            "Alta geração de resíduos sólidos",
            "Dependência de combustíveis fósseis"
        ],
        answer: "Geração de energia com baixa emissão de poluentes",
        points: 65,
    },
    {
        question: "O que são fontes de energia não renováveis? (40 pontos)",
        options: [
            "Fontes que não se regeneram ou levam milhões de anos para se formar",
            "Fontes que geram energia limpa e sustentável",
            "Fontes utilizadas exclusivamente na geração de energia solar",
            "Fontes que dependem de turbinas hidráulicas"
        ],
        answer: "Fontes que não se regeneram ou levam milhões de anos para se formar",
        points: 40,
    },
    {
        question: "Qual é o principal componente dos biocombustíveis? (55 pontos)",
        options: ["Resíduos orgânicos", "Combustíveis fósseis", "Gás natural", "Carvão mineral"],
        answer: "Resíduos orgânicos",
        points: 55,
    },
    {
        question: "O que é biomassa? (60 pontos)",
        options: [
            "Material orgânico utilizado para a geração de energia",
            "Resíduo sólido proveniente de processos industriais",
            "Energia gerada exclusivamente por água",
            "Um tipo de bateria para armazenamento de energia"
        ],
        answer: "Material orgânico utilizado para a geração de energia",
        points: 60,
    },
    {
        question: "Qual destes países é um dos maiores produtores de energia solar? (70 pontos)",
        options: ["Brasil", "China", "Canadá", "Noruega"],
        answer: "China",
        points: 70,
    },
    {
        question: "Por que a energia geotérmica é considerada renovável? (85 pontos)",
        options: [
            "Porque utiliza o calor natural da Terra, que é inesgotável",
            "Porque depende de combustíveis fósseis",
            "Porque requer tecnologias avançadas para extração",
            "Porque é obtida através de turbinas hidráulicas"
        ],
        answer: "Porque utiliza o calor natural da Terra, que é inesgotável",
        points: 85,
    },
    {
        question: "Qual é o impacto ambiental mais associado a usinas hidrelétricas? (75 pontos)",
        options: [
            "Alagamento de grandes áreas e perda de biodiversidade",
            "Emissão de gases de efeito estufa",
            "Poluição do ar",
            "Produção de resíduos radioativos"
        ],
        answer: "Alagamento de grandes áreas e perda de biodiversidade",
        points: 75,
    },
    {
        question: "O que é o conceito de 'Net Zero'? (90 pontos)",
        options: [
            "Equilibrar as emissões de carbono com sua remoção da atmosfera",
            "Reduzir completamente o uso de fontes renováveis",
            "Eliminar o uso de energias limpas",
            "Aumentar a produção de carvão para suprir a demanda energética"
        ],
        answer: "Equilibrar as emissões de carbono com sua remoção da atmosfera",
        points: 90,
    },
    {
        question: "Qual é o principal objetivo da eficiência energética? (50 pontos)",
        options: [
            "Reduzir o desperdício de energia sem comprometer o desempenho",
            "Aumentar o consumo de energia em áreas rurais",
            "Substituir energia renovável por combustíveis fósseis",
            "Construir mais usinas de carvão"
        ],
        answer: "Reduzir o desperdício de energia sem comprometer o desempenho",
        points: 50,
    },
    {
        question: "Qual dessas fontes de energia gera maior impacto positivo para o meio ambiente? (65 pontos)",
        options: ["Solar", "Carvão", "Petróleo", "Gás natural"],
        answer: "Solar",
        points: 65,
    },
    {
        question: "O que significa o conceito de 'descarbonização'? (80 pontos)",
        options: [
            "Reduzir o uso de combustíveis fósseis em prol de fontes limpas",
            "Aumentar o uso de carvão para geração de energia",
            "Substituir energia eólica por térmica",
            "Eliminar o uso de biocombustíveis"
        ],
        answer: "Reduzir o uso de combustíveis fósseis em prol de fontes limpas",
        points: 80,
    },
    {
        question: "Qual é o principal objetivo do desenvolvimento sustentável? (45 pontos)",
        options: [
            "Atender as necessidades atuais sem comprometer as futuras gerações",
            "Promover o uso exclusivo de combustíveis fósseis",
            "Reduzir o consumo de energia renovável",
            "Aumentar o custo de tecnologias limpas"
        ],
        answer: "Atender as necessidades atuais sem comprometer as futuras gerações",
        points: 45,
    },
    {
        question: "O que é energia de marés? (100 pontos)",
        options: [
            "Energia obtida através do movimento das marés",
            "Energia gerada pela força do vento",
            "Energia proveniente de turbinas hidráulicas",
            "Energia obtida da biomassa"
        ],
        answer: "Energia obtida através do movimento das marés",
        points: 100,
    },
    {
        question: "Qual é a principal barreira para o uso de energia solar em larga escala? (70 pontos)",
        options: [
            "Custo elevado de instalação inicial",
            "Emissão de gases de efeito estufa",
            "Baixa eficiência na geração de energia",
            "Impacto ambiental severo"
        ],
        answer: "Custo elevado de instalação inicial",
        points: 70,
    },
    {
        question: "Qual é a principal característica das turbinas eólicas offshore? (90 pontos)",
        options: [
            "Localizadas em alto-mar, aproveitam ventos mais fortes",
            "Utilizam apenas energia hidráulica para funcionar",
            "São menores que turbinas terrestres",
            "São construídas próximas a áreas urbanas"
        ],
        answer: "Localizadas em alto-mar, aproveitam ventos mais fortes",
        points: 90,
    },
    {
        question: "O que são usinas termossolares? (85 pontos)",
        options: [
            "Usinas que utilizam espelhos para concentrar luz solar e gerar calor",
            "Usinas que geram energia exclusivamente com vento",
            "Instalações que utilizam energia nuclear",
            "Estruturas que convertem biomassa diretamente em eletricidade"
        ],
        answer: "Usinas que utilizam espelhos para concentrar luz solar e gerar calor",
        points: 85,
    },
    {
        question: "Qual destes gases é gerado em maior quantidade por aterros sanitários? (65 pontos)",
        options: ["Metano (CH₄)", "Dióxido de carbono (CO₂)", "Óxido nitroso (N₂O)", "Oxigênio (O₂)"],
        answer: "Metano (CH₄)",
        points: 65,
    },
    {
        question: "O que significa 'desperdício zero' no contexto energético? (50 pontos)",
        options: [
            "Evitar qualquer tipo de perda no consumo ou geração de energia",
            "Usar energia exclusivamente de fontes fósseis",
            "Produzir mais energia do que o necessário",
            "Substituir todas as energias renováveis por não renováveis"
        ],
        answer: "Evitar qualquer tipo de perda no consumo ou geração de energia",
        points: 50,
    }
];

const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
    score: 0,
    answerSelected: false,
    correctAnswers: 0,
};

const quizReducer = (state, action) => {

    switch (action.type) {
        case "CHANGE_STATE":
            const shuffledQuestions = questions
                .map((question) => ({
                    ...question,
                    options: question.options.sort(() => Math.random() - 0.5),
                }))
                .sort(() => Math.random() - 0.5)
                .slice(0, 15); // Seleciona apenas as primeiras 15 perguntas embaralhadas

            return {
                ...state,
                gameStage: STAGES[1],
                questions: shuffledQuestions,
            };

        case "CHANGE_QUESTION":
            const nextQuestion = state.currentQuestion + 1;
            let endGame = nextQuestion >= state.questions.length; // Verifica se atingiu a última pergunta

            return{
                ...state,
                currentQuestion: nextQuestion,
                gameStage: endGame ? STAGES[2] : state.gameStage,
                answerSelected: false,
            };

        case "NEW_GAME":
            // Reseta o jogo e reordena as perguntas
            const resetState = {
                ...initialState,
                questions: state.questions.sort(() => Math.random() - 0.5),
            };
            return resetState;

        case "CHECK_ANSWER":
            if(state.answerSelected) return state;

            const answer = action.payload.answer;
            const option = action.payload.option;
            let correctAnswer = 0; 
            let incrementCorrectAnswers = 0; // campo para contar acertos

            // Adiciona a pontuação se a resposta estiver correta
            if (answer === option) {
                correctAnswer = state.questions[state.currentQuestion].points;
                incrementCorrectAnswers = 1;
            }

            return {
                ...state,
                score: state.score + correctAnswer,
                answerSelected: option,
                correctAnswers: state.correctAnswers + incrementCorrectAnswers,
            };

        default:
            return state;
    }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer, initialState);

    return(
        <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
    )
        
};