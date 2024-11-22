import { Link } from "react-router-dom";
import ProdutoLinha from "./ProdutoLinha";
import { useState, useEffect } from "react";
import { FaXmark } from "react-icons/fa6";

const produtos = [
    {
        nome: "Secador de cabelo",
        quantidades: ["1", "2", "3", "4", "Não Uso"],
        tempos: [
            { label: "5 min", value: "1/12" },
            { label: "10 min", value: "1/6" },
            { label: "15 min", value: "1/4" },
            { label: "20 min", value: "1/3" },
            { label: "30 min", value: "1/2" },
            { label: "45 min", value: "3/4" },
            { label: "1h", value: "1" },
            { label: "90 min", value: "1.5" },
            { label: "2h", value: "2" },
            { label: "3h", value: "3" },
            { label: "4h", value: "4" },
            { label: "5h", value: "5" },
            { label: "6h", value: "6" },
            { label: "8h", value: "8" },
            { label: "10h", value: "10" },
            { label: "12h", value: "12" },
            { label: "16h", value: "16" },
            { label: "18h", value: "18" },
            { label: "20h", value: "20" },
            { label: "Dia todo", value: "24" },
        ],
        potencias: [
            { label: "800 W", value: "0.08" },
            { label: "1000W", value: "0.1" },
            { label: "1200W", value: "0.12" },
            { label: "1400W", value: "0.14" },
            { label: "1500W", value: "0.15" },
            { label: "1800W", value: "0.18" },
            { label: "2000W", value: "0.2" },
            { label: "2200W", value: "0.22" },
            { label: "2400W", value: "0.24" },
            { label: "2600W", value: "0.26" },
        ]
    },
    {
        nome: "Geladeira",
        quantidades: ["1", "2", "3", "4", "Não Uso"],
        tempos: [
            { label: "5 min", value: "1/12" },
            { label: "10 min", value: "1/6" },
            { label: "15 min", value: "1/4" },
            { label: "20 min", value: "1/3" },
            { label: "30 min", value: "1/2" },
            { label: "45 min", value: "3/4" },
            { label: "1h", value: "1" },
            { label: "90 min", value: "1.5" },
            { label: "2h", value: "2" },
            { label: "3h", value: "3" },
            { label: "4h", value: "4" },
            { label: "5h", value: "5" },
            { label: "6h", value: "6" },
            { label: "8h", value: "8" },
            { label: "10h", value: "10" },
            { label: "12h", value: "12" },
            { label: "16h", value: "16" },
            { label: "18h", value: "18" },
            { label: "20h", value: "20" },
            { label: "Dia todo", value: "24" },
        ],
        potencias: [
            { label: "80  W", value: "0.008" },
            { label: "100 W", value: "0.01" },
            { label: "120 W", value: "0.012" },
            { label: "150 W", value: "0.015" },
            { label: "180 W", value: "0.018" },
            { label: "200 W", value: "0.02" },
            { label: "250 W", value: "0.025" },
            { label: "300 W", value: "0.03" },
            { label: "350 W", value: "0.035" },
            { label: "400 W", value: "0.04" },
            { label: "450 W", value: "0.045" },
        ]
    },
    {
        nome: "Chuveiro Elétrico",
        quantidades: ["1", "2", "3", "4", "Não Uso"],
        tempos: [
            { label: "5 min", value: "1/12" },
            { label: "10 min", value: "1/6" },
            { label: "15 min", value: "1/4" },
            { label: "20 min", value: "1/3" },
            { label: "30 min", value: "1/2" },
            { label: "45 min", value: "3/4" },
            { label: "1h", value: "1" },
            { label: "90 min", value: "1.5" },
            { label: "2h", value: "2" },
            { label: "3h", value: "3" },
            { label: "4h", value: "4" },
            { label: "5h", value: "5" },
            { label: "6h", value: "6" },
            { label: "8h", value: "8" },
            { label: "10h", value: "10" },
            { label: "12h", value: "12" },
            { label: "16h", value: "16" },
            { label: "18h", value: "18" },
            { label: "20h", value: "20" },
            { label: "Dia todo", value: "24" },
        ],
        potencias: [
            { label: "3000W", value: "0.3" },
            { label: "3200W", value: "0.32" },
            { label: "4000W", value: "0.4" },
            { label: "4500W", value: "0.45" },
            { label: "5000W", value: "0.5" },
            { label: "5500W", value: "0.55" },
            { label: "6000W", value: "0.6" },
            { label: "6400W", value: "0.64" },
            { label: "7000W", value: "0.7" },
            { label: "7500W", value: "0.75" },
        ]
    },
    {
        nome: "Ar Condicionado",
        quantidades: ["1", "2", "3", "4", "Não Uso"],
        tempos: [
            { label: "5 min", value: "1/12" },
            { label: "10 min", value: "1/6" },
            { label: "15 min", value: "1/4" },
            { label: "20 min", value: "1/3" },
            { label: "30 min", value: "1/2" },
            { label: "45 min", value: "3/4" },
            { label: "1h", value: "1" },
            { label: "90 min", value: "1.5" },
            { label: "2h", value: "2" },
            { label: "3h", value: "3" },
            { label: "4h", value: "4" },
            { label: "5h", value: "5" },
            { label: "6h", value: "6" },
            { label: "8h", value: "8" },
            { label: "10h", value: "10" },
            { label: "12h", value: "12" },
            { label: "16h", value: "16" },
            { label: "18h", value: "18" },
            { label: "20h", value: "20" },
            { label: "Dia todo", value: "24" },
        ],
        potencias: [
            { label: "750 W", value: "0.075" },
            { label: "900 W", value: "0.09" },
            { label: "1000W", value: "0.1" },
            { label: "1200W", value: "0.12" },
            { label: "1500W", value: "0.15" },
            { label: "1700W", value: "0.17" },
            { label: "2000W", value: "0.2" },
            { label: "2500W", value: "0.25" },
            { label: "3000W", value: "0.3" },
            { label: "3500W", value: "0.35" },
        ]
    },
    {
        nome: "Fogão Elétrico",
        quantidades: ["1", "2", "3", "4", "Não Uso"],
        tempos: [
            { label: "5 min", value: "1/12" },
            { label: "10 min", value: "1/6" },
            { label: "15 min", value: "1/4" },
            { label: "20 min", value: "1/3" },
            { label: "30 min", value: "1/2" },
            { label: "45 min", value: "3/4" },
            { label: "1h", value: "1" },
            { label: "90 min", value: "1.5" },
            { label: "2h", value: "2" },
            { label: "3h", value: "3" },
            { label: "4h", value: "4" },
            { label: "5h", value: "5" },
            { label: "6h", value: "6" },
            { label: "8h", value: "8" },
            { label: "10h", value: "10" },
            { label: "12h", value: "12" },
            { label: "16h", value: "16" },
            { label: "18h", value: "18" },
            { label: "20h", value: "20" },
            { label: "Dia todo", value: "24" },
        ],
        potencias: [
            { label: "1000W", value: "0.1" },
            { label: "1200W", value: "0.12" },
            { label: "1500W", value: "0.15" },
            { label: "1800W", value: "0.18" },
            { label: "2000W", value: "0.2" },
            { label: "2500W", value: "0.25" },
            { label: "3000W", value: "0.3" },
            { label: "3500W", value: "0.35" },
            { label: "4000W", value: "0.4" },
        ]
    },
    {
        nome: "Microondas",
        quantidades: ["1", "2", "3", "4", "Não Uso"],
        tempos: [
            { label: "5 min", value: "1/12" },
            { label: "10 min", value: "1/6" },
            { label: "15 min", value: "1/4" },
            { label: "20 min", value: "1/3" },
            { label: "30 min", value: "1/2" },
            { label: "45 min", value: "3/4" },
            { label: "1h", value: "1" },
            { label: "90 min", value: "1.5" },
            { label: "2h", value: "2" },
            { label: "3h", value: "3" },
            { label: "4h", value: "4" },
            { label: "5h", value: "5" },
            { label: "6h", value: "6" },
            { label: "8h", value: "8" },
            { label: "10h", value: "10" },
            { label: "12h", value: "12" },
            { label: "16h", value: "16" },
            { label: "18h", value: "18" },
            { label: "20h", value: "20" },
            { label: "Dia todo", value: "24" },
        ],
        potencias: [
            { label: "600 W", value: "0.06" },
            { label: "700 W", value: "0.07" },
            { label: "800 W", value: "0.08" },
            { label: "900 W", value: "0.09" },
            { label: "1000W", value: "0.1" },
            { label: "1100W", value: "0.11" },
            { label: "1200W", value: "0.12" },
            { label: "1500W", value: "0.15" },
            { label: "1800W", value: "0.18" },
        ]
    },
    {
        nome: "Televisão",
        quantidades: ["1", "2", "3", "4", "5", "6", "Não Uso"],
        tempos: [
            { label: "5 min", value: "1/12" },
            { label: "10 min", value: "1/6" },
            { label: "15 min", value: "1/4" },
            { label: "20 min", value: "1/3" },
            { label: "30 min", value: "1/2" },
            { label: "45 min", value: "3/4" },
            { label: "1h", value: "1" },
            { label: "90 min", value: "1.5" },
            { label: "2h", value: "2" },
            { label: "3h", value: "3" },
            { label: "4h", value: "4" },
            { label: "5h", value: "5" },
            { label: "6h", value: "6" },
            { label: "8h", value: "8" },
            { label: "10h", value: "10" },
            { label: "12h", value: "12" },
            { label: "16h", value: "16" },
            { label: "18h", value: "18" },
            { label: "20h", value: "20" },
            { label: "Dia todo", value: "24" },
        ],
        potencias: [
            { label: "20  W", value: "0.002" },
            { label: "30  W", value: "0.003" },
            { label: "35  W", value: "0.0035" },
            { label: "50  W", value: "0.005" },
            { label: "70  W", value: "0.007" },
            { label: "100 W", value: "0.01" },
            { label: "120 W", value: "0.012" },
            { label: "150 W", value: "0.015" },
            { label: "200 W", value: "0.02" },
            { label: "300 W", value: "0.03" },
        ]
    },
    {
        nome: "Ferro de Passar",
        quantidades: ["1", "2", "3", "4", "5", "Não Uso"],
        tempos: [
            { label: "5 min", value: "1/12" },
            { label: "10 min", value: "1/6" },
            { label: "15 min", value: "1/4" },
            { label: "20 min", value: "1/3" },
            { label: "30 min", value: "1/2" },
            { label: "45 min", value: "3/4" },
            { label: "1h", value: "1" },
            { label: "90 min", value: "1.5" },
            { label: "2h", value: "2" },
            { label: "3h", value: "3" },
            { label: "4h", value: "4" },
            { label: "5h", value: "5" },
            { label: "6h", value: "6" },
            { label: "8h", value: "8" },
            { label: "10h", value: "10" },
            { label: "12h", value: "12" },
            { label: "16h", value: "16" },
            { label: "18h", value: "18" },
            { label: "20h", value: "20" },
            { label: "Dia todo", value: "24" },
        ],
        potencias: [
            { label: "800 W", value: "0.08" },
            { label: "1000W", value: "0.1" },
            { label: "1200W", value: "0.12" },
            { label: "1400W", value: "0.14" },
            { label: "1500W", value: "0.15" },
            { label: "1600W", value: "0.16" },
            { label: "1800W", value: "0.18" },
            { label: "2000W", value: "0.2" },
            { label: "2200W", value: "0.22" },
            { label: "2400W", value: "0.24" },
        ]
    },
    {
        nome: "Lâmpadas",
        quantidades: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "12", "15", "20", "Não Uso"],
        tempos: [
            { label: "5 min", value: "1/12" },
            { label: "10 min", value: "1/6" },
            { label: "15 min", value: "1/4" },
            { label: "20 min", value: "1/3" },
            { label: "30 min", value: "1/2" },
            { label: "45 min", value: "3/4" },
            { label: "1h", value: "1" },
            { label: "90 min", value: "1.5" },
            { label: "2h", value: "2" },
            { label: "3h", value: "3" },
            { label: "4h", value: "4" },
            { label: "5h", value: "5" },
            { label: "6h", value: "6" },
            { label: "8h", value: "8" },
            { label: "10h", value: "10" },
            { label: "12h", value: "12" },
            { label: "16h", value: "16" },
            { label: "18h", value: "18" },
            { label: "20h", value: "20" },
            { label: "Dia todo", value: "24" },
        ],
        potencias: [
            { label: "3   W", value: "0.0003" },
            { label: "4   W", value: "0.0004" },
            { label: "5   W", value: "0.0005" },
            { label: "6   W", value: "0.0006" },
            { label: "7   W", value: "0.0007" },
            { label: "9   W", value: "0.0009" },
            { label: "10  W", value: "0.001" },
            { label: "12  W", value: "0.0012" },
            { label: "15  W", value: "0.0015" },
            { label: "20  W", value: "0.002" },
            { label: "25  W", value: "0.0025" },
            { label: "40  W", value: "0.004" },
            { label: "60  W", value: "0.006" },
            { label: "75  W", value: "0.075" },
            { label: "100 W", value: "0.01" },
            { label: "150 W", value: "0.015" },
        ]
    },
    {
        nome: "Máquina de Lavar",
        quantidades: ["1", "2", "3", "4", "Não Uso"],
        tempos: [
            { label: "5 min", value: "1/12" },
            { label: "10 min", value: "1/6" },
            { label: "15 min", value: "1/4" },
            { label: "20 min", value: "1/3" },
            { label: "30 min", value: "1/2" },
            { label: "45 min", value: "3/4" },
            { label: "1h", value: "1" },
            { label: "90 min", value: "1.5" },
            { label: "2h", value: "2" },
            { label: "3h", value: "3" },
            { label: "4h", value: "4" },
            { label: "5h", value: "5" },
            { label: "6h", value: "6" },
            { label: "8h", value: "8" },
            { label: "10h", value: "10" },
            { label: "12h", value: "12" },
            { label: "16h", value: "16" },
            { label: "18h", value: "18" },
            { label: "20h", value: "20" },
            { label: "Dia todo", value: "24" },
        ],
        potencias: [
            { label: "250 W", value: "0.025" },
            { label: "300 W", value: "0.03" },
            { label: "400 W", value: "0.04" },
            { label: "500 W", value: "0.05" },
            { label: "600 W", value: "0.06" },
            { label: "700 W", value: "0.07" },
            { label: "800 W", value: "0.08" },
            { label: "1000W", value: "0.1" },
            { label: "1200W", value: "0.12" },
        ]
    },
    {
        nome: "Computador",
        quantidades: ["1", "2", "3", "4", "Não Uso"],
        tempos: [
            { label: "5 min", value: "1/12" },
            { label: "10 min", value: "1/6" },
            { label: "15 min", value: "1/4" },
            { label: "20 min", value: "1/3" },
            { label: "30 min", value: "1/2" },
            { label: "45 min", value: "3/4" },
            { label: "1h", value: "1" },
            { label: "90 min", value: "1.5" },
            { label: "2h", value: "2" },
            { label: "3h", value: "3" },
            { label: "4h", value: "4" },
            { label: "5h", value: "5" },
            { label: "6h", value: "6" },
            { label: "8h", value: "8" },
            { label: "10h", value: "10" },
            { label: "12h", value: "12" },
            { label: "16h", value: "16" },
            { label: "18h", value: "18" },
            { label: "20h", value: "20" },
            { label: "Dia todo", value: "24" },
        ],
        potencias: [
            { label: "50  W", value: "0.005" },
            { label: "100 W", value: "0.01" },
            { label: "150 W", value: "0.015" },
            { label: "200 W", value: "0.02" },
            { label: "250 W", value: "0.025" },
            { label: "300 W", value: "0.03" },
            { label: "400 W", value: "0.04" },
            { label: "500 W", value: "0.05" },
        ]
    },
    {
        nome: "Aspirador de Pó",
        quantidades: ["1", "2", "3", "4", "Não Uso"],
        tempos: [
            { label: "5 min", value: "1/12" },
            { label: "10 min", value: "1/6" },
            { label: "15 min", value: "1/4" },
            { label: "20 min", value: "1/3" },
            { label: "30 min", value: "1/2" },
            { label: "45 min", value: "3/4" },
            { label: "1h", value: "1" },
            { label: "90 min", value: "1.5" },
            { label: "2h", value: "2" },
            { label: "3h", value: "3" },
            { label: "4h", value: "4" },
            { label: "5h", value: "5" },
            { label: "6h", value: "6" },
            { label: "8h", value: "8" },
            { label: "10h", value: "10" },
            { label: "12h", value: "12" },
            { label: "16h", value: "16" },
            { label: "18h", value: "18" },
            { label: "20h", value: "20" },
            { label: "Dia todo", value: "24" },
        ],
        potencias: [
            { label: "600 W", value: "0.06" },
            { label: "800 W", value: "0.08" },
            { label: "1000W", value: "0.1" },
            { label: "1200W", value: "0.12" },
            { label: "1400W", value: "0.14" },
            { label: "1500W", value: "0.15" },
            { label: "1600W", value: "0.16" },
            { label: "1800W", value: "0.18" },
            { label: "2000W", value: "0.2" },
            { label: "2200W", value: "0.22" },
        ]
    },
    {
        nome: "Lava Louças",
        quantidades: ["1", "2", "3", "4", "Não Uso"],
        tempos: [
            { label: "5 min", value: "1/12" },
            { label: "10 min", value: "1/6" },
            { label: "15 min", value: "1/4" },
            { label: "20 min", value: "1/3" },
            { label: "30 min", value: "1/2" },
            { label: "45 min", value: "3/4" },
            { label: "1h", value: "1" },
            { label: "90 min", value: "1.5" },
            { label: "2h", value: "2" },
            { label: "3h", value: "3" },
            { label: "4h", value: "4" },
            { label: "5h", value: "5" },
            { label: "6h", value: "6" },
            { label: "8h", value: "8" },
            { label: "10h", value: "10" },
            { label: "12h", value: "12" },
            { label: "16h", value: "16" },
            { label: "18h", value: "18" },
            { label: "20h", value: "20" },
            { label: "Dia todo", value: "24" },
        ],
        potencias: [
            { label: "1000W", value: "0.1" },
            { label: "1200W", value: "0.12" },
            { label: "1500W", value: "0.15" },
            { label: "1600W", value: "0.16" },
            { label: "1800W", value: "0.18" },
            { label: "2000W", value: "0.2" },
            { label: "2200W", value: "0.22" },
            { label: "2500W", value: "0.25" },
            { label: "2600W", value: "0.26" },
            { label: "3000W", value: "0.3" },
        ]
    },
];

const calcularConsumoEnergetico = (quantidade, tempo, potencia) => {
    return quantidade * tempo * potencia * 31; // Consumo em kWh por mês
};

const CalculoEnergetico = () => {

    const [modalResultados, setModalResultados] = useState(false);
    const [valoresProdutos, setValoresProdutos] = useState({});

    // Desativa o scroll enquanto o modal estiver aberto
    useEffect(() => {
        if (modalResultados) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    
        // Limpeza para restaurar o overflow quando o componente desmonta
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [modalResultados]);

    const toggleModal = () => {
        if (todosCamposPreenchidos()) {
            setModalResultados(!modalResultados);
        } else {
            alert("Atenção, todos os espaços devem ser preenchidos!");
        }
    };

    const handleProdutoChange = (nome, quantidade, tempo, potencia) => {
        setValoresProdutos((prev) => ({
            ...prev,
            [nome]: { quantidade, tempo, potencia },
        }));
    };

    const calcularTotalConsumo = () => {
        return Object.values(valoresProdutos).reduce((total, { quantidade, tempo, potencia }) => {
            const qtd = parseFloat(quantidade);
            const tmp = parseFloat(tempo);
            const ptn = parseFloat(potencia);

            if (!isNaN(qtd) && !isNaN(tmp) && !isNaN(ptn)) {
                return total + calcularConsumoEnergetico(qtd, tmp, ptn);
            }
            return total;
        }, 0);
    };

    const totalConsumo = calcularTotalConsumo();

    const todosCamposPreenchidos = () => {
        return produtos.every(produto => {
            const valores = valoresProdutos[produto.nome] || {};
            if (valores.quantidade && valores.quantidade === "Não Uso"){
                return true;
            }
            return valores.quantidade && valores.tempo && valores.potencia;
        });
    };

    // Definindo cores e mensagens
    let colorClass = "text-green-500";
    let bgClass = "bg-green-950"
    let borderClass = 'border-green-600'
    let riscoMessage = "Parabéns! Você está gastando energia abaixo do esperado!";
    let dicasMessage = "Excelente! Continue assim e incentive mais pessoas a economizarem energia, assim como você!";

    if (totalConsumo > 650) {
        colorClass = "text-red-500";
        bgClass = 'bg-red-950';
        borderClass = 'border-red-600'
        riscoMessage = "Perigo! Você está gastando muito mais energia do que devia!";
        dicasMessage = "Atenção! Procure economizar mais energia, para juntos cuidarmos melhor do nosso Planeta!";
    } else if (totalConsumo > 300) {
        colorClass = "text-yellow-500";
        bgClass = 'bg-yellow-900';
        borderClass = 'border-yellow-600'
        riscoMessage = "Cuidado! Você está consumindo energia em um nível moderado-alto.";
        dicasMessage = "Você está no caminho! Se economizar um pouco mais de energia, você poderá contribuir melhor para o meio ambiente!";
    }    

    return (
        <main className="mt-20 px-2 min-[500px]:px-4 md:px-10 lg:px-20 xl:px-24 min-h-screen w-full flex flex-col items-center relative bg-calculo-energetico bg-cover bg-center">
            <div className="absolute inset-0 bg-black/35 bg-gradient-to-b from-black/50 to-black/40"></div>
            <div className="relative flex flex-col pt-6 sm:pt-8 lg:pt-9 xl:pt-10 text-center px-5 sm:px-8 md:px-10 xl:px-12">
                <h2 className="text-yellow-500 text-2xl min-[450px]:text-3xl sm:text-4xl font-bold sombra-login lg:text-5xl xl:text-[52px]">
                    Cálculo de gasto de energia elétrica
                </h2>
                <p className="min-[600px]:mt-3 text-white italic mt-1 lg:pt-3 px-1 text-sm min-[450px]:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl">
                    Por favor, preencha todos os dados dos produtos abaixo para ter acesso ao resultado!
                </p>
            </div>
            <section className="relative text-center text-white my-4 sm:my-6 lg:my-8 sombra-area-usuario border-4 min-h-96 w-full py-5 sm:py-6 px-4 sm:px-10 mb-20 border-white rounded-3xl bg-green-950/90 backdrop-blur-sm sem-sombra shadow-[0px_0px_10px_rgba(255,255,255,0.6)]">
                <p className="text-xs min-[400px]:text-sm min-[500px]:text-base md:text-lg lg:text-xl xl:text-[22px] sm:mb-1 lg:mb-2">* Respostas de acordo com o gasto da residência inteira! <br/> (1 a 3 pessoas) *</p>
                <table className="w-full">
                    <thead>
                        <tr className="flex items-center justify-between w-full sombra-login text-green-500 font-bold text-xs min-[400px]:text-sm min-[500px]:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-[25px] sm:gap-1">
                            <th className="w-full text-left py-3">Produto</th>
                            <th className="w-full text-left py-3">Quantidade usada</th>
                            <th className="w-full text-left py-3">Tempo por Dia (cada)</th>
                            <th className="w-full text-left py-3">Potência Média (cada)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map((produto, index) => (
                            <ProdutoLinha
                                key={index}
                                nome={produto.nome}
                                quantidades={produto.quantidades}
                                tempos={produto.tempos}
                                potencias={produto.potencias}
                                onChange={handleProdutoChange}
                            />
                        ))}
                    </tbody>
                </table>
                <div className="flex flex-row justify-center gap-10 mt-5 sm:mt-10 xl:mt-14 mb-2 sm:mb-5 xl:mb-7">
                    <button className=" py-3 sm:py-4 md:py-5 lg:py-6 xl:py-8 text-[13px] min-[400px]:text-base min-[500px]:text-lg sm:text-xl lg:text-2xl xl:text-[28px] cursor-pointer rounded-xl bg-green-700 border-[1px] sm:border-2 border-white transition-colors duration-300 w-5/12 ease-in-out hover:bg-green-900 font-bold flex items-center justify-center" onClick={toggleModal}>Ver Resultado</button>
                    <Link to='/area-usuario' className="py-3 sm:py-4 md:py-5 lg:py-6 xl:py-8 text-[13px] min-[400px]:text-base min-[500px]:text-lg sm:text-xl lg:text-2xl xl:text-[28px] cursor-pointer rounded-xl bg-yellow-600 border-[1px] sm:border-2 border-white transition-colors w-5/12 duration-300 ease-in-out hover:bg-yellow-800 font-bold flex items-center justify-center">Fechar</Link>
                </div>
            </section>
            {modalResultados && <div className="fixed top-0 left-0 w-full h-full duration-100 bg-black/60 z-40" onClick={toggleModal}></div>}
            {modalResultados && (
                <section className={`shadow-modal-conta flex flex-col justify-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${bgClass} text-white rounded-3xl p-5 border-[3px] border-white/80 z-50 min-w-72 min-[400px]:min-w-96 min-[530px]:min-w-[28rem] sm:min-w-[32rem] md:min-w-[36rem] lg:min-w-[42rem] xl:min-w-[50rem]`}>
                    <div className={`flex flex-row w-full border-b-2 ${borderClass} pb-3 sm:pb-4 xl:pb-5`}>
                        <FaXmark onClick={toggleModal} className="absolute top-4 right-4 sm:top-3 md:top-4 md:right-4 text-4xl sm:text-[42px] xl:text-5xl cursor-pointer text-yellow-600 transition-colors duration-500 ease-in-out hover:text-yellow-800"/>
                        <h3 className="text-xl min-[530px]:text-2xl sm:text-2xl md:text-3xl xl:text-[32px] text-left font-bold sem-sombra">Ver Resultado</h3>
                    </div>
                    <div className="flex flex-col w-full my-4 sm:my-5 lg:my-7">
                        <div className="flex flex-col items-start">
                            <h4 className={`font-bold text-lg min-[400px]:text-xl min-[530px]:text-2xl md:text-[27px] lg:text-3xl ${colorClass}`}>Resultado (Gasto em kWh/mês): </h4>
                            <p className="text-justify mb-1 text-xl min-[400px]:text-xl min-[530px]:text-2xl lg:text-3xl mt-2">{totalConsumo.toFixed(2)} kWh / mês</p>
                        </div>
                        <div className="flex flex-col items-start mt-3">
                            <h4 className={`font-bold text-lg min-[400px]:text-xl min-[530px]:text-2xl md:text-[27px] lg:text-3xl ${colorClass}`}>Risco: </h4>
                            <p className="text-justify mb-1 text-xl min-[400px]:text-xl min-[530px]:text-2xl lg:text-3xl mt-2">{riscoMessage}</p>
                        </div>
                        <div className="flex flex-col items-start mt-3">
                            <h4 className={`font-bold text-lg min-[400px]:text-xl min-[530px]:text-2xl md:text-[27px] lg:text-3xl ${colorClass}`}>Dica(s):</h4>
                            <p className="text-justify mb-1 text-xl min-[400px]:text-xl min-[530px]:text-2xl lg:text-3xl mt-2">{dicasMessage}</p>
                        </div>
                    </div>
                    <div className={`flex flex-row justify-center gap-5 items-center mb-4 mx-0 border-t-2 ${borderClass} pt-8`}>
                        <button className="py-3 sm:py-4 md:py-5 lg:py-6 xl:py-8 text-[13px] min-[400px]:text-base min-[500px]:text-lg sm:text-xl lg:text-2xl xl:text-3xl cursor-pointer rounded-xl bg-emerald-700 border-[1px] sm:border-2 border-white transition-colors duration-300 w-5/12 ease-in-out hover:bg-emerald-900 font-bold flex items-center justify-center" onClick={toggleModal}>Voltar</button>
                        <Link to='/area-usuario' className="py-3 sm:py-4 md:py-5 lg:py-6 xl:py-8 text-[13px] min-[400px]:text-base min-[500px]:text-lg sm:text-xl lg:text-2xl xl:text-3xl cursor-pointer rounded-xl bg-yellow-600 border-[1px] sm:border-2 border-white transition-colors w-5/12 duration-300 ease-in-out hover:bg-yellow-800 font-bold flex items-center justify-center">Sair</Link>
                    </div>
                </section>
            )}
        </main>
    );
};

export default CalculoEnergetico