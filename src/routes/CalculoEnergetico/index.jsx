import { Link } from "react-router-dom";
import ProdutoLinha from "./ProdutoLinha";
import { useState, useEffect } from "react";
import { FaXmark } from "react-icons/fa6";

const produtos = [
    {
        nome: "Secador de cabelo",
        quantidades: ["1", "2", "3", "4", "Não Uso"],
        tempos: [
            { label: "5 min/dia", value: "1/12" },
            { label: "10 min/dia", value: "1/6" },
            { label: "15 min/dia", value: "1/4" },
            { label: "20 min/dia", value: "1/3" },
            { label: "30 min/dia", value: "1/2" },
            { label: "45 min/dia", value: "3/4" },
            { label: "1h/dia", value: "1" },
            { label: "1h 30min/dia", value: "1.5" },
            { label: "2h/dia", value: "2" },
            { label: "3h/dia", value: "3" },
            { label: "4h/dia", value: "4" },
            { label: "5h/dia", value: "5" },
            { label: "6h/dia", value: "6" },
            { label: "8h/dia", value: "8" },
            { label: "10h/dia", value: "10" },
            { label: "12h/dia", value: "12" },
            { label: "16h/dia", value: "16" },
            { label: "18h/dia", value: "18" },
            { label: "20h/dia", value: "20" },
            { label: "O dia todo", value: "24" },
        ],
        potencias: [
            { label: "800W", value: "0.8" },
            { label: "1000W", value: "1" },
            { label: "1200W", value: "1.2" },
            { label: "1400W", value: "1.4" },
            { label: "1500W", value: "1.5" },
            { label: "1800W", value: "1.8" },
            { label: "2000W", value: "2" },
            { label: "2200W", value: "2.2" },
            { label: "2400W", value: "2.4" },
            { label: "2600W", value: "2.6" },
        ]
    },
    {
        nome: "Geladeira",
        quantidades: ["1", "2", "3", "4", "Não Uso"],
        tempos: [
            { label: "5 min/dia", value: "1/12" },
            { label: "10 min/dia", value: "1/6" },
            { label: "15 min/dia", value: "1/4" },
            { label: "20 min/dia", value: "1/3" },
            { label: "30 min/dia", value: "1/2" },
            { label: "45 min/dia", value: "3/4" },
            { label: "1h/dia", value: "1" },
            { label: "1h 30min/dia", value: "1.5" },
            { label: "2h/dia", value: "2" },
            { label: "3h/dia", value: "3" },
            { label: "4h/dia", value: "4" },
            { label: "5h/dia", value: "5" },
            { label: "6h/dia", value: "6" },
            { label: "8h/dia", value: "8" },
            { label: "10h/dia", value: "10" },
            { label: "12h/dia", value: "12" },
            { label: "16h/dia", value: "16" },
            { label: "18h/dia", value: "18" },
            { label: "20h/dia", value: "20" },
            { label: "O dia todo", value: "24" },
        ],
        potencias: [
            { label: "80W", value: "0.08" },
            { label: "100W", value: "0.1" },
            { label: "120W", value: "0.12" },
            { label: "150W", value: "0.15" },
            { label: "180W", value: "0.18" },
            { label: "200W", value: "0.2" },
            { label: "250W", value: "0.25" },
            { label: "300W", value: "0.3" },
            { label: "350W", value: "0.35" },
            { label: "400W", value: "0.4" },
            { label: "450W", value: "0.45" },
        ]
    },
    {
        nome: "Chuveiro Elétrico",
        quantidades: ["1", "2", "3", "4", "Não Uso"],
        tempos: [
            { label: "5 min/dia", value: "1/12" },
            { label: "10 min/dia", value: "1/6" },
            { label: "15 min/dia", value: "1/4" },
            { label: "20 min/dia", value: "1/3" },
            { label: "30 min/dia", value: "1/2" },
            { label: "45 min/dia", value: "3/4" },
            { label: "1h/dia", value: "1" },
            { label: "1h 30min/dia", value: "1.5" },
            { label: "2h/dia", value: "2" },
            { label: "3h/dia", value: "3" },
            { label: "4h/dia", value: "4" },
            { label: "5h/dia", value: "5" },
            { label: "6h/dia", value: "6" },
            { label: "8h/dia", value: "8" },
            { label: "10h/dia", value: "10" },
            { label: "12h/dia", value: "12" },
            { label: "16h/dia", value: "16" },
            { label: "18h/dia", value: "18" },
            { label: "20h/dia", value: "20" },
            { label: "O dia todo", value: "24" },
        ],
        potencias: [
            { label: "3000W", value: "3" },
            { label: "3200W", value: "3.2" },
            { label: "4000W", value: "4" },
            { label: "4500W", value: "4.5" },
            { label: "5000W", value: "5" },
            { label: "5500W", value: "5.5" },
            { label: "6000W", value: "6" },
            { label: "6400W", value: "6.4" },
            { label: "7000W", value: "7" },
            { label: "7500W", value: "7.5" },
        ]
    },
    {
        nome: "Ar Condicionado",
        quantidades: ["1", "2", "3", "4", "Não Uso"],
        tempos: [
            { label: "5 min/dia", value: "1/12" },
            { label: "10 min/dia", value: "1/6" },
            { label: "15 min/dia", value: "1/4" },
            { label: "20 min/dia", value: "1/3" },
            { label: "30 min/dia", value: "1/2" },
            { label: "45 min/dia", value: "3/4" },
            { label: "1h/dia", value: "1" },
            { label: "1h 30min/dia", value: "1.5" },
            { label: "2h/dia", value: "2" },
            { label: "3h/dia", value: "3" },
            { label: "4h/dia", value: "4" },
            { label: "5h/dia", value: "5" },
            { label: "6h/dia", value: "6" },
            { label: "8h/dia", value: "8" },
            { label: "10h/dia", value: "10" },
            { label: "12h/dia", value: "12" },
            { label: "16h/dia", value: "16" },
            { label: "18h/dia", value: "18" },
            { label: "20h/dia", value: "20" },
            { label: "O dia todo", value: "24" },
        ],
        potencias: [
            { label: "750W", value: "0.75" },
            { label: "900W", value: "0.9" },
            { label: "1000W", value: "1" },
            { label: "1200W", value: "1.2" },
            { label: "1500W", value: "1.5" },
            { label: "1700W", value: "1.7" },
            { label: "2000W", value: "2" },
            { label: "2500W", value: "2.5" },
            { label: "3000W", value: "3" },
            { label: "3500W", value: "3.5" },
        ]
    },
    {
        nome: "Fogão Elétrico",
        quantidades: ["1", "2", "3", "4", "Não Uso"],
        tempos: [
            { label: "5 min/dia", value: "1/12" },
            { label: "10 min/dia", value: "1/6" },
            { label: "15 min/dia", value: "1/4" },
            { label: "20 min/dia", value: "1/3" },
            { label: "30 min/dia", value: "1/2" },
            { label: "45 min/dia", value: "3/4" },
            { label: "1h/dia", value: "1" },
            { label: "1h 30min/dia", value: "1.5" },
            { label: "2h/dia", value: "2" },
            { label: "3h/dia", value: "3" },
            { label: "4h/dia", value: "4" },
            { label: "5h/dia", value: "5" },
            { label: "6h/dia", value: "6" },
            { label: "8h/dia", value: "8" },
            { label: "10h/dia", value: "10" },
            { label: "12h/dia", value: "12" },
            { label: "16h/dia", value: "16" },
            { label: "18h/dia", value: "18" },
            { label: "20h/dia", value: "20" },
            { label: "O dia todo", value: "24" },
        ],
        potencias: [
            { label: "1000W", value: "1" },
            { label: "1200W", value: "1.2" },
            { label: "1500W", value: "1.5" },
            { label: "1800W", value: "1.8" },
            { label: "2000W", value: "2" },
            { label: "2500W", value: "2.5" },
            { label: "3000W", value: "3" },
            { label: "3500W", value: "3.5" },
            { label: "4000W", value: "4" },
        ]
    },
    {
        nome: "Microondas",
        quantidades: ["1", "2", "3", "4", "Não Uso"],
        tempos: [
            { label: "5 min/dia", value: "1/12" },
            { label: "10 min/dia", value: "1/6" },
            { label: "15 min/dia", value: "1/4" },
            { label: "20 min/dia", value: "1/3" },
            { label: "30 min/dia", value: "1/2" },
            { label: "45 min/dia", value: "3/4" },
            { label: "1h/dia", value: "1" },
            { label: "1h 30min/dia", value: "1.5" },
            { label: "2h/dia", value: "2" },
            { label: "3h/dia", value: "3" },
            { label: "4h/dia", value: "4" },
            { label: "5h/dia", value: "5" },
            { label: "6h/dia", value: "6" },
            { label: "8h/dia", value: "8" },
            { label: "10h/dia", value: "10" },
            { label: "12h/dia", value: "12" },
            { label: "16h/dia", value: "16" },
            { label: "18h/dia", value: "18" },
            { label: "20h/dia", value: "20" },
            { label: "O dia todo", value: "24" },
        ],
        potencias: [
            { label: "600W", value: "0.6" },
            { label: "700W", value: "0.7" },
            { label: "800W", value: "0.8" },
            { label: "900W", value: "0.9" },
            { label: "1000W", value: "1" },
            { label: "1100W", value: "1.1" },
            { label: "1200W", value: "1.2" },
            { label: "1500W", value: "1.5" },
            { label: "1800W", value: "1.8" },
        ]
    },
    {
        nome: "Televisão",
        quantidades: ["1", "2", "3", "4", "5", "6", "Não Uso"],
        tempos: [
            { label: "5 min/dia", value: "1/12" },
            { label: "10 min/dia", value: "1/6" },
            { label: "15 min/dia", value: "1/4" },
            { label: "20 min/dia", value: "1/3" },
            { label: "30 min/dia", value: "1/2" },
            { label: "45 min/dia", value: "3/4" },
            { label: "1h/dia", value: "1" },
            { label: "1h 30min/dia", value: "1.5" },
            { label: "2h/dia", value: "2" },
            { label: "3h/dia", value: "3" },
            { label: "4h/dia", value: "4" },
            { label: "5h/dia", value: "5" },
            { label: "6h/dia", value: "6" },
            { label: "8h/dia", value: "8" },
            { label: "10h/dia", value: "10" },
            { label: "12h/dia", value: "12" },
            { label: "16h/dia", value: "16" },
            { label: "18h/dia", value: "18" },
            { label: "20h/dia", value: "20" },
            { label: "O dia todo", value: "24" },
        ],
        potencias: [
            { label: "20W", value: "0.02" },
            { label: "30W", value: "0.03" },
            { label: "35W", value: "0.035" },
            { label: "50W", value: "0.05" },
            { label: "70W", value: "0.07" },
            { label: "100W", value: "0.1" },
            { label: "120W", value: "0.12" },
            { label: "150W", value: "0.15" },
            { label: "200W", value: "0.2" },
            { label: "300W", value: "0.3" },
        ]
    },
    {
        nome: "Ferro de Passar",
        quantidades: ["1", "2", "3", "4", "5", "Não Uso"],
        tempos: [
            { label: "5 min/dia", value: "1/12" },
            { label: "10 min/dia", value: "1/6" },
            { label: "15 min/dia", value: "1/4" },
            { label: "20 min/dia", value: "1/3" },
            { label: "30 min/dia", value: "1/2" },
            { label: "45 min/dia", value: "3/4" },
            { label: "1h/dia", value: "1" },
            { label: "1h 30min/dia", value: "1.5" },
            { label: "2h/dia", value: "2" },
            { label: "3h/dia", value: "3" },
            { label: "4h/dia", value: "4" },
            { label: "5h/dia", value: "5" },
            { label: "6h/dia", value: "6" },
            { label: "8h/dia", value: "8" },
            { label: "10h/dia", value: "10" },
            { label: "12h/dia", value: "12" },
            { label: "16h/dia", value: "16" },
            { label: "18h/dia", value: "18" },
            { label: "20h/dia", value: "20" },
            { label: "O dia todo", value: "24" },
        ],
        potencias: [
            { label: "800W", value: "0.8" },
            { label: "1000W", value: "1" },
            { label: "1200W", value: "1.2" },
            { label: "1400W", value: "1.4" },
            { label: "1500W", value: "1.5" },
            { label: "1600W", value: "1.6" },
            { label: "1800W", value: "1.8" },
            { label: "2000W", value: "2" },
            { label: "2200W", value: "2.2" },
            { label: "2400W", value: "2.4" },
        ]
    },
    {
        nome: "Lâmpadas",
        quantidades: ["1", "2", "3", "4", "Não Uso"],
        tempos: [
            { label: "5 min/dia", value: "1/12" },
            { label: "10 min/dia", value: "1/6" },
            { label: "15 min/dia", value: "1/4" },
            { label: "20 min/dia", value: "1/3" },
            { label: "30 min/dia", value: "1/2" },
            { label: "45 min/dia", value: "3/4" },
            { label: "1h/dia", value: "1" },
            { label: "1h 30min/dia", value: "1.5" },
            { label: "2h/dia", value: "2" },
            { label: "3h/dia", value: "3" },
            { label: "4h/dia", value: "4" },
            { label: "5h/dia", value: "5" },
            { label: "6h/dia", value: "6" },
            { label: "8h/dia", value: "8" },
            { label: "10h/dia", value: "10" },
            { label: "12h/dia", value: "12" },
            { label: "16h/dia", value: "16" },
            { label: "18h/dia", value: "18" },
            { label: "20h/dia", value: "20" },
            { label: "O dia todo", value: "24" },
        ],
        potencias: [
            { label: "3W", value: "0.003" },
            { label: "4W", value: "0.004" },
            { label: "5W", value: "0.005" },
            { label: "6W", value: "0.006" },
            { label: "7W", value: "0.007" },
            { label: "9W", value: "0.009" },
            { label: "10W", value: "0.01" },
            { label: "12W", value: "0.012" },
            { label: "15W", value: "0.015" },
            { label: "20W", value: "0.02" },
            { label: "25W", value: "0.025" },
            { label: "40W", value: "0.04" },
            { label: "60W", value: "0.06" },
            { label: "75W", value: "0.075" },
            { label: "100W", value: "0.1" },
            { label: "150W", value: "0.15" },
        ]
    },
    {
        nome: "Máquina de Lavar",
        quantidades: ["1", "2", "3", "4", "Não Uso"],
        tempos: [
            { label: "5 min/dia", value: "1/12" },
            { label: "10 min/dia", value: "1/6" },
            { label: "15 min/dia", value: "1/4" },
            { label: "20 min/dia", value: "1/3" },
            { label: "30 min/dia", value: "1/2" },
            { label: "45 min/dia", value: "3/4" },
            { label: "1h/dia", value: "1" },
            { label: "1h 30min/dia", value: "1.5" },
            { label: "2h/dia", value: "2" },
            { label: "3h/dia", value: "3" },
            { label: "4h/dia", value: "4" },
            { label: "5h/dia", value: "5" },
            { label: "6h/dia", value: "6" },
            { label: "8h/dia", value: "8" },
            { label: "10h/dia", value: "10" },
            { label: "12h/dia", value: "12" },
            { label: "16h/dia", value: "16" },
            { label: "18h/dia", value: "18" },
            { label: "20h/dia", value: "20" },
            { label: "O dia todo", value: "24" },
        ],
        potencias: [
            { label: "250W", value: "3" },
            { label: "300W", value: "5" },
            { label: "400W", value: "10" },
            { label: "500W", value: "20" },
            { label: "600W", value: "40" },
            { label: "700W", value: "900" },
            { label: "800W", value: "80" },
            { label: "1000W", value: "200" },
            { label: "1200W", value: "400" },
        ]
    },
    {
        nome: "Computador",
        quantidades: ["1", "2", "3", "4", "Não Uso"],
        tempos: [
            { label: "5 min/dia", value: "1/12" },
            { label: "10 min/dia", value: "1/6" },
            { label: "15 min/dia", value: "1/4" },
            { label: "20 min/dia", value: "1/3" },
            { label: "30 min/dia", value: "1/2" },
            { label: "45 min/dia", value: "3/4" },
            { label: "1h/dia", value: "1" },
            { label: "1h 30min/dia", value: "1.5" },
            { label: "2h/dia", value: "2" },
            { label: "3h/dia", value: "3" },
            { label: "4h/dia", value: "4" },
            { label: "5h/dia", value: "5" },
            { label: "6h/dia", value: "6" },
            { label: "8h/dia", value: "8" },
            { label: "10h/dia", value: "10" },
            { label: "12h/dia", value: "12" },
            { label: "16h/dia", value: "16" },
            { label: "18h/dia", value: "18" },
            { label: "20h/dia", value: "20" },
            { label: "O dia todo", value: "24" },
        ],
        potencias: [
            { label: "50W", value: "0.05" },
            { label: "100W", value: "0.1" },
            { label: "150W", value: "0.15" },
            { label: "200W", value: "0.2" },
            { label: "250W", value: "0.25" },
            { label: "300W", value: "0.3" },
            { label: "400W", value: "0.4" },
            { label: "500W", value: "0.5" },
        ]
    },
    {
        nome: "Aspirador de Pó",
        quantidades: ["1", "2", "3", "4", "Não Uso"],
        tempos: [
            { label: "5 min/dia", value: "1/12" },
            { label: "10 min/dia", value: "1/6" },
            { label: "15 min/dia", value: "1/4" },
            { label: "20 min/dia", value: "1/3" },
            { label: "30 min/dia", value: "1/2" },
            { label: "45 min/dia", value: "3/4" },
            { label: "1h/dia", value: "1" },
            { label: "1h 30min/dia", value: "1.5" },
            { label: "2h/dia", value: "2" },
            { label: "3h/dia", value: "3" },
            { label: "4h/dia", value: "4" },
            { label: "5h/dia", value: "5" },
            { label: "6h/dia", value: "6" },
            { label: "8h/dia", value: "8" },
            { label: "10h/dia", value: "10" },
            { label: "12h/dia", value: "12" },
            { label: "16h/dia", value: "16" },
            { label: "18h/dia", value: "18" },
            { label: "20h/dia", value: "20" },
            { label: "O dia todo", value: "24" },
        ],
        potencias: [
            { label: "600W", value: "0.6" },
            { label: "800W", value: "0.8" },
            { label: "1000W", value: "1" },
            { label: "1200W", value: "1.2" },
            { label: "1400W", value: "1.4" },
            { label: "1500W", value: "1.5" },
            { label: "1600W", value: "1.6" },
            { label: "1800W", value: "1.8" },
            { label: "2000W", value: "2" },
            { label: "2200W", value: "2.2" },
        ]
    },
    {
        nome: "Lava Louças",
        quantidades: ["1", "2", "3", "4", "Não Uso"],
        tempos: [
            { label: "5 min/dia", value: "1/12" },
            { label: "10 min/dia", value: "1/6" },
            { label: "15 min/dia", value: "1/4" },
            { label: "20 min/dia", value: "1/3" },
            { label: "30 min/dia", value: "1/2" },
            { label: "45 min/dia", value: "3/4" },
            { label: "1h/dia", value: "1" },
            { label: "1h 30min/dia", value: "1.5" },
            { label: "2h/dia", value: "2" },
            { label: "3h/dia", value: "3" },
            { label: "4h/dia", value: "4" },
            { label: "5h/dia", value: "5" },
            { label: "6h/dia", value: "6" },
            { label: "8h/dia", value: "8" },
            { label: "10h/dia", value: "10" },
            { label: "12h/dia", value: "12" },
            { label: "16h/dia", value: "16" },
            { label: "18h/dia", value: "18" },
            { label: "20h/dia", value: "20" },
            { label: "O dia todo", value: "24" },
        ],
        potencias: [
            { label: "1000W", value: "1" },
            { label: "1200W", value: "1.2" },
            { label: "1500W", value: "1.5" },
            { label: "1600W", value: "1.6" },
            { label: "1800W", value: "1.8" },
            { label: "2000W", value: "2" },
            { label: "2200W", value: "2.2" },
            { label: "2500W", value: "2.5" },
            { label: "2600W", value: "2.6" },
            { label: "3000W", value: "3" },
        ]
    },
];

const CalculoEnergetico = () => {

    const [modalResultados, setModalResultados] = useState(false);

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
        setModalResultados(!modalResultados);
    };

    return (
        <main className="mt-20 px-20 min-h-screen w-full flex flex-col items-center relative bg-calculo-energetico bg-cover bg-center">
            <div className="absolute inset-0 bg-black/35 bg-gradient-to-b from-black/50 to-black/40"></div>
            <div className="relative flex flex-col pt-8 lg:pt-10 xl:pt-12 text-center px-5 sm:px-8 md:px-10 xl:px-12">
                <h2 className="text-yellow-500 text-[28px] sm:text-[33px] font-bold sombra-login md:text-[41px] lg:text-5xl">
                    Cálculo de gasto de energia elétrica
                </h2>
                <p className="text-white italic mt-1 lg:pt-3 px-1 text-base md:text-lg lg:text-xl xl:text-2xl">
                    Por favor, preencha todos os dados dos produtos abaixo para ter acesso ao resultado!
                </p>
            </div>
            <section className="relative text-center text-white my-8 sombra-area-usuario border-4 min-h-96 w-full py-5 sm:py-6 px-6 sm:px-10 mb-20 border-white rounded-3xl bg-green-950/90 backdrop-blur-sm sem-sombra shadow-[0px_0px_10px_rgba(255,255,255,0.6)]">
                <p className="text-lg">* Respostas de acordo com o gasto da residência inteira! *</p>
                <table className="w-full">
                    <thead>
                        <tr className="flex items-center justify-between w-full sombra-login text-green-500 font-bold text-2xl">
                            <th className="w-full text-left py-3">Produto</th>
                            <th className="w-full text-left py-3">Quantidade usada</th>
                            <th className="w-full text-left py-3">Tempo de uso (cada)</th>
                            <th className="w-full text-left py-3">Potência média (cada)</th>
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
                            />
                        ))}
                    </tbody>
                </table>
                <div className="flex flex-row justify-evenly mt-10 mb-5">
                    <button className="mt-[5px] py-[10px] sm:py-3 xl:py-4 px-[15px] sm:px-4 xl:px-6 text-xl sm:text-2xl cursor-pointer rounded-xl bg-green-700 border-[1px] sm:border-2 border-white transition-colors duration-300 ease-in-out hover:bg-green-900 font-bold" onClick={toggleModal}>Ver Resultado</button>
                    <Link to='/area-usuario' className="mt-[5px] py-[10px] sm:py-3 xl:py-4 px-[15px] sm:px-4 xl:px-6 text-xl sm:text-2xl cursor-pointer rounded-xl bg-yellow-600 border-[1px] sm:border-2 border-white transition-colors duration-300 ease-in-out hover:bg-yellow-800 font-bold">Fechar</Link>
                </div>
            </section>
            {modalResultados && <div className="fixed top-0 left-0 w-full h-full duration-100 bg-black/60 z-40" onClick={toggleModal}></div>}
            {modalResultados && (
                <div className="shadow-modal-conta flex flex-col justify-center fixed mt-16 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-950 text-white rounded-3xl p-5 border-[3px] border-white/80 z-50 min-w-72 min-[400px]:min-w-96 min-[530px]:min-w-[28rem] sm:min-w-[32rem] md:min-w-[36rem] lg:min-w-[42rem] xl:min-w-[50rem]">
                    <FaXmark onClick={toggleModal} className="absolute top-4 right-4 sm:top-3 md:top-4 md:right-4 text-4xl sm:text-5xl cursor-pointer text-yellow-600 transition-colors duration-500 ease-in-out hover:text-yellow-800"/>
                    <h3 className="text-xl sm:text-2xl md:text-[27px] xl:text-[32px] pb-3 sm:pb-4 xl:pb-5 border-b-2 border-green-600 mb-4 text-left sem-sombra">Ver Resultados</h3>
                    <div className="flex flex-col justify-center items-center sm:mt-2 sm:mb-4 mx-auto">
                        <div>
                            <h4>Resultado: </h4>
                            <p>Gasto em kWh/mês: </p>
                        </div>
                        <div>
                            <h4>Risco: </h4>
                            <p>Você está gastando mais energia do que devia!</p>
                        </div>
                        <div>
                            <h4>Dicas</h4>
                            <p>Tente economizar mais energia</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center gap-5 items-center my-auto mx-0 border-t-2 border-green-700 pt-4">
                        <button className="mt-[5px] py-[10px] sm:py-3 xl:py-4 px-[15px] sm:px-4 xl:px-6 text-xl sm:text-2xl cursor-pointer rounded-xl bg-emerald-700 border-[1px] sm:border-2 border-white transition-colors duration-300 ease-in-out hover:bg-emerald-900 font-bold">Salvar Dados</button>
                        <button className="mt-[5px] py-[10px] sm:py-3 xl:py-4 px-[15px] sm:px-4 xl:px-6 text-xl sm:text-2xl cursor-pointer rounded-xl bg-yellow-600 border-[1px] sm:border-2 border-white transition-colors duration-300 ease-in-out hover:bg-yellow-800 font-bold" onClick={toggleModal}>Fechar</button>
                    </div>
                </div>
            )}
        </main>
    );
};

export default CalculoEnergetico