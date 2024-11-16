import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

import SlideQuiz from './../../assets/images/slide-quiz.png'
import SlideCalculoEnergetico from './../../assets/images/slide-calculo-energetico.png'
import SlideGeracaoEnergia from './../../assets/images/slide-geracao-energia.png'

import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const Slideshow = () => {

    const [slideIndex, setSlideIndex] = useState(1);
    const totalSlides = 3; // Você pode alterar para mais ou menos slides conforme necessário
    let slideInterval;

    // Função para iniciar o autoplay
    const startAutoSlide = () => {
        slideInterval = setInterval(() => {
          nextSlide();
        }, 7000); // Troca a imagem a cada 7 segundos
    };

    // Função para o próximo slide
    const nextSlide = () => {
        setSlideIndex(slideIndex === totalSlides ? 1 : slideIndex + 1);
    };

    // Função para o slide anterior
    const prevSlide = () => {
        setSlideIndex(slideIndex === 1 ? totalSlides : slideIndex - 1);
    };

    // Função para ir diretamente para um slide específico
    const currentSlide = (n) => {
        setSlideIndex(n);
    };

    useEffect(() => {
        startAutoSlide(); // Inicia o autoplay
        return () => clearInterval(slideInterval); // Limpa o intervalo ao desmontar o componente
    }, [slideIndex]);

    // Lista de imagens e títulos (Você pode substituir pelas imagens reais)
    const slides = [
        {
          image: SlideQuiz,
          title: 'Responda ao quiz para verificar seus conhecimentos sobre energia sustentável!',
          subtitle: 'Clique aqui e confira!',
          link: '/',
        },
        {
          image: SlideCalculoEnergetico,
          title: 'Calcule seus gastos energéticos e saiba como você contribui para o nosso planeta!',
          subtitle: 'Clique aqui e confira!',
          link: '/',
        },
        {
          image: SlideGeracaoEnergia,
          title: 'Acompanhe em tempo real a produção de energia em algumas comunidades!',
          subtitle: 'Clique aqui e confira!',
          link: '/',
        }
    ];

    return(
        <section className="w-full h-[calc(100vh-80px)] lg:h-[calc(105vh-80px)] xl:h-[calc(109vh-80px)] relative overflow-hidden">
            {slides.map((slide, index) => ( // Para cada slide da lista "slides", renderiza um componente de Slide com os dados da imagem, título e subtítulo.
                <div 
                    key={index}
                    className={`w-full h-full text-justify relative transition-opacity duration-500 ease-in-out ${slideIndex === index + 1 ? 'opacity-100 visible block' : 'opacity-0 invisible hidden'
                    }`}
                >
                    <Link to={slide.link}>
                        {/* Renderiza a imagem do slide em um link */}
                        <img 
                            src={slide.image} 
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-[1.7s] ease-in-out hover:scale-110" 
                        />
                        {/* Aplica um gradiente sobre a imagem para dar contraste */}
                        <div className='absolute bottom-0 w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0.1)] to-[rgba(0,0,0,1)]'></div>

                        {/* Exibe o título do slide */}
                        <h2 className="absolute bottom-16 sm:bottom-20 lg:bottom-28 xl:bottom-36 left-5 text-white text-3xl leading-10 min-[450px]:text-[34px] sm:text-[39px] lg:text-[44px] xl:text-5xl font-extrabold my-10 mr-10 ml-5">{slide.title}</h2>

                        {/* Exibe o subtítulo do slide */}
                        <p className="absolute bottom-11 lg:bottom-20 xl:bottom-28 left-5 text-white text-lg sm:text-xl italic my-6 mr-10 ml-5">{slide.subtitle}</p>

                        {/* Mostra a numeração do slide, exemplo: "1 / 5" */}
                        <div className='absolute top-3 left-3 text-white text-sm'>{`${index + 1} / ${totalSlides}`}</div>
                    </Link>
                </div>
            ))}

            {/*Botão de Voltar e Avançar Slide, respectivamente*/}
            <a 
                href="#" 
                onClick={prevSlide}
                className="cursor-pointer absolute min-[280px]:top-[33%] min-[380px]:top-[38%] min-[500px]:top-[42%] sm:top-[45%] xl:top-[42%] left-0 text-2xl xl:text-3xl text-black bg-white/50 p-4 xl:p-5 ml-3 rounded-full select-none transition-all ease-in-out duration-300 hover:bg-white/85"
            ><FaAngleLeft /></a>
            <a 
                href="#"
                onClick={nextSlide}
                className="cursor-pointer absolute min-[280px]:top-[33%] min-[380px]:top-[38%] min-[500px]:top-[42%] sm:top-[45%] xl:top-[42%] right-0 text-2xl xl:text-3xl text-black bg-white/50 p-4 xl:p-5 mr-3 rounded-full select-none transition-all ease-in-out duration-300 hover:bg-white/85"
            ><FaAngleRight /></a>

            {/*Pontos abaixo do slide para indicar qual o slide*/}
            <div className="text-center relative bottom-14 lg:bottom-24 xl:bottom-28">

                {slides.map((_, index) => ( // Para cada slide da lista "slides", renderiza um componente (os pontos de navegação). O primeiro argumento (slide) é ignorado com o uso de "_" porque não é necessário neste caso.
                    <div
                        className={`h-5 w-5 xl:h-6 xl:w-6 mx-1 rounded-full inline-block transition-colors duration-500 ease-in-out cursor-pointer hover:bg-gray-700 z-50 
                            ${slideIndex === index + 1 ? 'bg-[#515151]' : 'bg-[#999999]'}
                        `}

                        key={index} 
                        /* Ao clicar em um dot, muda para o slide correspondente */
                        onClick={() => currentSlide(index + 1)} 
                        /* Ativa o estilo especial para o dot do slide atual */
                        $active={slideIndex === index + 1}
                    ></div>
                ))}
            </div>
        </section>
    )
}

export default Slideshow