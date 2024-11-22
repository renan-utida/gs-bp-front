import { useState } from "react";

const ProdutoLinha = ({ nome, quantidades, tempos, potencias, onChange }) => {
    const [quantidade, setQuantidade] = useState(""); // Estado inicial vazio
    const [tempo, setTempo] = useState(""); // Adicionando estados individuais
    const [potencia, setPotencia] = useState("");

    const isNaoUso = quantidade === "Não Uso";

    const handleQuantidadeChange = (e) => {
        const selectedQuantidade = e.target.value;
        setQuantidade(selectedQuantidade);
        onChange(nome, selectedQuantidade, tempo, potencia);

        // Resetar os campos de tempo e potência ao selecionar "Não Uso"
        if (selectedQuantidade === "Não Uso") {
            setTempo("Não Uso");
            setPotencia("Não Uso");
            onChange(nome, selectedQuantidade, "Não Uso", "Não Uso");
        } else {
            setTempo(""); // Liberar as opções
            setPotencia(""); // Liberar as opções
        }
    };

    const handleTempoChange = (e) => {
        const selectedTempo = e.target.value;
        setTempo(selectedTempo);
        onChange(nome, quantidade, selectedTempo, potencia);
    };

    const handlePotenciaChange = (e) => {
        const selectedPotencia = e.target.value;
        setPotencia(selectedPotencia);
        onChange(nome, quantidade, tempo, selectedPotencia);
    };

    return (
        <tr className="flex items-center justify-between w-full text-white border-y-[1px] py-4 sm:py-6 lg:py-8 border-white border-dashed sombra-login ">
            <td className="w-full text-left font-bold text-[10px] min-[400px]:text-[13px] min-[500px]:text-sm sm:text-[19px] md:text-xl lg:text-2xl xl:text-[25px] text-white">{nome}</td>
            <td className="w-full text-left ml-1">
                <select
                    className="text-black text-[10px] min-[400px]:text-sm min-[500px]:text-sm sm:text-[17px] md:text-lg lg:text-xl xl:text-[22px] py-1 sm:py-2 md:py-3 xl:py-4 sm:px-2 xl:px-4 rounded-lg font-bold w-3/5 cursor-pointer"
                    name="quantidade"
                    value={quantidade}
                    onChange={handleQuantidadeChange}
                >
                    <option className="text-[10px] min-[400px]:text-sm min-[500px]:text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px]" value="" disabled>Qntd</option>
                    {quantidades.map((qtd) => (
                        <option className="text-[10px] min-[400px]:text-sm min-[500px]:text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px]" key={qtd} value={qtd}>{qtd}</option>
                    ))}
                </select>
            </td>
            <td className="w-full text-left">
                <select
                    className="text-black text-[10px] min-[400px]:text-sm min-[500px]:text-sm sm:text-[17px] md:text-lg lg:text-xl xl:text-[22px] py-1 sm:py-2 md:py-3 xl:py-4 sm:px-2 xl:px-4 rounded-lg font-bold w-3/5 cursor-pointer"
                    name="tempo"
                    disabled={isNaoUso}
                    value={tempo}
                    onChange={handleTempoChange}
                >
                    <option className="text-[10px] min-[400px]:text-sm min-[500px]:text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] " value="" disabled>Tempo</option>
                    {!isNaoUso && tempos.map((tempo) => (
                        <option className="text-[10px] min-[400px]:text-sm min-[500px]:text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px]" key={tempo.value} value={tempo.value}>{tempo.label}</option>
                    ))}
                    {isNaoUso && <option value="Não Uso">Não Uso</option>}
                </select>
            </td>
            <td className="w-full text-left">
                <select
                    className="text-black text-[10px] min-[400px]:text-sm min-[500px]:text-sm sm:text-[17px] md:text-lg lg:text-xl xl:text-[22px] py-1 sm:py-2 md:py-3 xl:py-4 sm:px-2 xl:px-4 rounded-lg font-bold w-3/5 cursor-pointer"
                    name="potencia"
                    disabled={isNaoUso}
                    value={potencia}
                    onChange={handlePotenciaChange}
                >
                    <option className="text-[10px] min-[400px]:text-sm min-[500px]:text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px]" value="" disabled>Pot.</option>
                    {!isNaoUso && potencias.map((potencia) => (
                        <option className="text-[10px] min-[400px]:text-sm min-[500px]:text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px]" key={potencia.value} value={potencia.value}>{potencia.label}</option>
                    ))}
                    {isNaoUso && <option value="Não Uso">Não Uso</option>}
                </select>
            </td>
        </tr>
    );
};

export default ProdutoLinha;
