import { useState } from "react";


const InfoEnergia = () => {
    // Gerencia o estado dos painéis abertos como uma lista
    const [activeIndices, setActiveIndices] = useState([]);

    // Função para alternar o estado do painel
    const togglePanel = (index) => {
        if (activeIndices.includes(index)) {
            // Remove o índice do painel da lista se já estiver aberto
            setActiveIndices(activeIndices.filter(i => i !== index));
        } else {
            // Se já há 2 painéis abertos, remove o primeiro
            if (activeIndices.length === 2) {
                setActiveIndices([activeIndices[1], index]); // Mantém o segundo e adiciona o novo
            } else {
                // Adiciona o índice do painel à lista de abertos
                setActiveIndices([...activeIndices, index]);
            }
        }
    };

    // Lista de Dados e informacoes sobre o bairro para o accordion
    const dadosInfo = [
        {
            bairro: "Vila Antonieta",
            resposta: (
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14627.692017028194!2d-46.5142877!3d-23.571208650000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5d89054bbd65%3A0x2ade63bbcbea4eef!2sVila%20Antonieta%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1731883161357!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div>
                        <div>
                            <h4>Armazenamento</h4>
                            <p></p>
                        </div>
                        <div>
                            <h4>Produção</h4>
                            <p></p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            bairro: "Jardim Helena",
            resposta: (
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19538.641210897782!2d-46.433338638145756!3d-23.48352130645234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce63c9b64e806f%3A0x2c80e9b123be8bca!2sJardim%20Helena%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1731883138396!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div>
                        <div>
                            <h4>Armazenamento</h4>
                            <p></p>
                        </div>
                        <div>
                            <h4>Produção</h4>
                            <p></p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            bairro: "Cidade Tiradentes",
            resposta: (
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58497.5527631613!2d-46.44188647958978!3d-23.600852212001264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6f10f342c2b3%3A0xf14fb542f19c2734!2sCidade%20Tiradentes%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1731883190021!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div>
                        <div>
                            <h4>Armazenamento</h4>
                            <p></p>
                        </div>
                        <div>
                            <h4>Produção</h4>
                            <p></p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            bairro: "Itaim Paulista",
            resposta: (
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7317.745865421224!2d-46.394727799999984!3d-23.5010859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce637db6565759%3A0x1c921e37adf2863c!2sItaim%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1731883209367!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div>
                        <div>
                            <h4>Armazenamento</h4>
                            <p></p>
                        </div>
                        <div>
                            <h4>Produção</h4>
                            <p></p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            bairro: "Vila Formosa",
            resposta: (
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29256.74326365086!2d-46.5408472!3d-23.56510645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5dc4a49e16dd%3A0x51b4f99af24814e1!2sVila%20Formosa%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1731883233914!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div>
                        <div>
                            <h4>Armazenamento</h4>
                            <p></p>
                        </div>
                        <div>
                            <h4>Produção</h4>
                            <p></p>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            bairro: "São Mateus",
            resposta: (
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29248.977625584852!2d-46.48066644999999!3d-23.599949900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce67d20ba38873%3A0x5137128655a7611f!2sS%C3%A3o%20Mateus%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1731883251129!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div>
                        <div>
                            <h4>Armazenamento</h4>
                            <p></p>
                        </div>
                        <div>
                            <h4>Produção</h4>
                            <p></p>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <section className="flex flex-col items-center bg-white max-w-full mx-20 max-sm:mx-8 max-[335px]:mx-4">
            {dadosInfo.map((item, index) => (
                <div key={index} className="flex flex-col">
                    <button
                        className={`p- ${activeIndices.includes(index) ? "active" : ""}`}
                        onClick={() => togglePanel(index)}
                    >
                        {item.bairro}
                        <svg
                            className={`arrow ${activeIndices.includes(index) ? "open" : ""}`}
                            viewBox="0 0 24 24"
                        >
                            <path d="M2.793 15.957a1 1 0 0 0 1.414 0L12 8.164l7.793 7.793a1 1 0 1 0 1.414-1.414L12 5.336l-9.207 9.207a1 1 0 0 0 0 1.414z"></path>
                        </svg>
                    </button>
                    <div
                        className="panel"
                        style={{
                            display: activeIndices.includes(index) ? "block" : "none",
                        }}
                    >
                        {item.resposta}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default InfoEnergia
