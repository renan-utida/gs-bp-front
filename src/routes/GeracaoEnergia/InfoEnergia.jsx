import { useState } from "react";
import { FaBoltLightning, FaLocationDot, FaWhmcs } from "react-icons/fa6";


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
            dado: (
                <div className="flex flex-col md:flex-row w-full">
                    <div className="hidden md:block md:w-3/5 md:min-h-64 lg:min-h-72 xl:min-h-[22rem] p-5 xl:p-6">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14627.692017028194!2d-46.5142877!3d-23.571208650000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5d89054bbd65%3A0x2ade63bbcbea4eef!2sVila%20Antonieta%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1731883161357!5m2!1spt-BR!2sbr"
                            className="w-full h-full border-[1px] border-black rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all ease-in-out duration-700 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.7)]"
                            allowFullScreen
                            loading = "lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="flex flex-col my-4 md:w-2/5 md:justify-between xl:p-1">
                        <div className="flex flex-col items-center">
                            <h4 className="font-bold max-[420px]:text-2xl text-3xl md:text-[29px] lg:text-4xl xl:text-[42px] text-green-800">Armazenamento</h4>
                            <div className="flex flex-row items-center gap-1 mt-2 md:mt-3 lg:mt-4 xl:mt-5 border-2 rounded-md p-1 min-[600px]:p-[6px] lg:p-2 xl:p-3 border-black font-bold bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all ease-in-out duration-700 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.7)]">
                                <FaBoltLightning className="text-yellow-600 text-xl min-[600px]:text-2xl md:text-xl lg:text-2xl xl:text-3xl"/>
                                <p className="max-[420px]:text-base text-xl md:text-lg lg:text-2xl xl:text-3xl">28.382.754 kW</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center mt-4 mb-1">
                            <h4 className="font-bold max-[420px]:text-2xl text-3xl md:text-[29px] lg:text-4xl xl:text-[42px] text-green-800">Produção</h4>
                            <div className="flex flex-row items-center gap-1 mt-2 md:mt-3 lg:mt-4 xl:mt-5 border-2 rounded-md p-1 min-[600px]:p-[6px] lg:p-2 xl:p-3 border-black font-bold bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all ease-in-out duration-700 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.7)]">
                                <FaWhmcs className="text-yellow-600 text-xl min-[600px]:text-2xl md:text-xl lg:text-2xl xl:text-3xl"/>
                                <p className="max-[420px]:text-base text-xl md:text-lg lg:text-2xl xl:text-3xl">120.248 kWh </p>
                            </div>
                        </div>
                    </div>
                    <div className="block md:hidden h-[300px] px-5 pb-5">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14627.692017028194!2d-46.5142877!3d-23.571208650000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5d89054bbd65%3A0x2ade63bbcbea4eef!2sVila%20Antonieta%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1731883161357!5m2!1spt-BR!2sbr"
                            className="w-full h-full border-[1px] border-black rounded-3xl shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all ease-in-out duration-700 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.7)]"
                            allowFullScreen
                            loading = "lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            ),
        },
        {
            bairro: "Jardim Helena",
            dado: (
                <div className="flex flex-col md:flex-row w-full">
                    <div className="hidden md:block md:w-3/5 md:min-h-64 lg:min-h-72 xl:min-h-[22rem] p-5 xl:p-6">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19538.641210897782!2d-46.433338638145756!3d-23.48352130645234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce63c9b64e806f%3A0x2c80e9b123be8bca!2sJardim%20Helena%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1731883138396!5m2!1spt-BR!2sbr"
                            className="w-full h-full border-[1px] border-black rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all ease-in-out duration-700 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.7)]"
                            allowFullScreen
                            loading = "lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="flex flex-col my-4 md:w-2/5 md:justify-between xl:p-1">
                        <div className="flex flex-col items-center">
                            <h4 className="font-bold max-[420px]:text-2xl text-3xl md:text-[29px] lg:text-4xl xl:text-[42px] text-green-800">Armazenamento</h4>
                            <div className="flex flex-row items-center gap-1 mt-2 md:mt-3 lg:mt-4 xl:mt-5 border-2 rounded-md p-1 min-[600px]:p-[6px] lg:p-2 xl:p-3 border-black font-bold bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all ease-in-out duration-700 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.7)]">
                                <FaBoltLightning className="text-yellow-600 text-xl min-[600px]:text-2xl md:text-xl lg:text-2xl xl:text-3xl"/>
                                <p className="max-[420px]:text-base text-xl md:text-lg lg:text-2xl xl:text-3xl">28.382.754 kW</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center mt-4 mb-1">
                            <h4 className="font-bold max-[420px]:text-2xl text-3xl md:text-[29px] lg:text-4xl xl:text-[42px] text-green-800">Produção</h4>
                            <div className="flex flex-row items-center gap-1 mt-2 md:mt-3 lg:mt-4 xl:mt-5 border-2 rounded-md p-1 min-[600px]:p-[6px] lg:p-2 xl:p-3 border-black font-bold bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all ease-in-out duration-700 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.7)]">
                                <FaWhmcs className="text-yellow-600 text-xl min-[600px]:text-2xl md:text-xl lg:text-2xl xl:text-3xl"/>
                                <p className="max-[420px]:text-base text-xl md:text-lg lg:text-2xl xl:text-3xl">120.248 kWh </p>
                            </div>
                        </div>
                    </div>
                    <div className="block md:hidden h-[300px] px-5 pb-5">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19538.641210897782!2d-46.433338638145756!3d-23.48352130645234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce63c9b64e806f%3A0x2c80e9b123be8bca!2sJardim%20Helena%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1731883138396!5m2!1spt-BR!2sbr"
                            className="w-full h-full border-[1px] border-black rounded-3xl shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all ease-in-out duration-700 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.7)]"
                            allowFullScreen
                            loading = "lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            ),
        },
        {
            bairro: "Cidade Tiradentes",
            dado: (
                <div className="flex flex-col md:flex-row w-full">
                    <div className="hidden md:block md:w-3/5 md:min-h-64 lg:min-h-72 xl:min-h-[22rem] p-5 xl:p-6">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58497.5527631613!2d-46.44188647958978!3d-23.600852212001264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6f10f342c2b3%3A0xf14fb542f19c2734!2sCidade%20Tiradentes%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1731883190021!5m2!1spt-BR!2sbr"
                            className="w-full h-full border-[1px] border-black rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all ease-in-out duration-700 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.7)]"
                            allowFullScreen
                            loading = "lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="flex flex-col my-4 md:w-2/5 md:justify-between xl:p-1">
                        <div className="flex flex-col items-center">
                            <h4 className="font-bold max-[420px]:text-2xl text-3xl md:text-[29px] lg:text-4xl xl:text-[42px] text-green-800">Armazenamento</h4>
                            <div className="flex flex-row items-center gap-1 mt-2 md:mt-3 lg:mt-4 xl:mt-5 border-2 rounded-md p-1 min-[600px]:p-[6px] lg:p-2 xl:p-3 border-black font-bold bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all ease-in-out duration-700 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.7)]">
                                <FaBoltLightning className="text-yellow-600 text-xl min-[600px]:text-2xl md:text-xl lg:text-2xl xl:text-3xl"/>
                                <p className="max-[420px]:text-base text-xl md:text-lg lg:text-2xl xl:text-3xl">28.382.754 kW</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center mt-4 mb-1">
                            <h4 className="font-bold max-[420px]:text-2xl text-3xl md:text-[29px] lg:text-4xl xl:text-[42px] text-green-800">Produção</h4>
                            <div className="flex flex-row items-center gap-1 mt-2 md:mt-3 lg:mt-4 xl:mt-5 border-2 rounded-md p-1 min-[600px]:p-[6px] lg:p-2 xl:p-3 border-black font-bold bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all ease-in-out duration-700 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.7)]">
                                <FaWhmcs className="text-yellow-600 text-xl min-[600px]:text-2xl md:text-xl lg:text-2xl xl:text-3xl"/>
                                <p className="max-[420px]:text-base text-xl md:text-lg lg:text-2xl xl:text-3xl">120.248 kWh </p>
                            </div>
                        </div>
                    </div>
                    <div className="block md:hidden h-[300px] px-5 pb-5">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58497.5527631613!2d-46.44188647958978!3d-23.600852212001264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6f10f342c2b3%3A0xf14fb542f19c2734!2sCidade%20Tiradentes%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1731883190021!5m2!1spt-BR!2sbr"
                            className="w-full h-full border-[1px] border-black rounded-3xl shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all ease-in-out duration-700 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.7)]"
                            allowFullScreen
                            loading = "lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            ),
        },
        {
            bairro: "Itaim Paulista",
            dado: (
                <div className="flex flex-col md:flex-row w-full">
                    <div className="hidden md:block md:w-3/5 md:min-h-64 lg:min-h-72 xl:min-h-[22rem] p-5 xl:p-6">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7317.745865421224!2d-46.394727799999984!3d-23.5010859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce637db6565759%3A0x1c921e37adf2863c!2sItaim%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1731883209367!5m2!1spt-BR!2sbr"
                            className="w-full h-full border-[1px] border-black rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all ease-in-out duration-700 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.7)]"
                            allowFullScreen
                            loading = "lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="flex flex-col my-4 md:w-2/5 md:justify-between xl:p-1">
                        <div className="flex flex-col items-center">
                            <h4 className="font-bold max-[420px]:text-2xl text-3xl md:text-[29px] lg:text-4xl xl:text-[42px] text-green-800">Armazenamento</h4>
                            <div className="flex flex-row items-center gap-1 mt-2 md:mt-3 lg:mt-4 xl:mt-5 border-2 rounded-md p-1 min-[600px]:p-[6px] lg:p-2 xl:p-3 border-black font-bold bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all ease-in-out duration-700 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.7)]">
                                <FaBoltLightning className="text-yellow-600 text-xl min-[600px]:text-2xl md:text-xl lg:text-2xl xl:text-3xl"/>
                                <p className="max-[420px]:text-base text-xl md:text-lg lg:text-2xl xl:text-3xl">28.382.754 kW</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center mt-4 mb-1">
                            <h4 className="font-bold max-[420px]:text-2xl text-3xl md:text-[29px] lg:text-4xl xl:text-[42px] text-green-800">Produção</h4>
                            <div className="flex flex-row items-center gap-1 mt-2 md:mt-3 lg:mt-4 xl:mt-5 border-2 rounded-md p-1 min-[600px]:p-[6px] lg:p-2 xl:p-3 border-black font-bold bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all ease-in-out duration-700 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.7)]">
                                <FaWhmcs className="text-yellow-600 text-xl min-[600px]:text-2xl md:text-xl lg:text-2xl xl:text-3xl"/>
                                <p className="max-[420px]:text-base text-xl md:text-lg lg:text-2xl xl:text-3xl">120.248 kWh </p>
                            </div>
                        </div>
                    </div>
                    <div className="block md:hidden h-[300px] px-5 pb-5">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7317.745865421224!2d-46.394727799999984!3d-23.5010859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce637db6565759%3A0x1c921e37adf2863c!2sItaim%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1731883209367!5m2!1spt-BR!2sbr"
                            className="w-full h-full border-[1px] border-black rounded-3xl shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all ease-in-out duration-700 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.7)]"
                            allowFullScreen
                            loading = "lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            ),
        },
        {
            bairro: "Vila Formosa",
            dado: (
                <div className="flex flex-col md:flex-row w-full">
                    <div className="hidden md:block md:w-3/5 md:min-h-64 lg:min-h-72 xl:min-h-[22rem] p-5 xl:p-6">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29256.74326365086!2d-46.5408472!3d-23.56510645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5dc4a49e16dd%3A0x51b4f99af24814e1!2sVila%20Formosa%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1731883233914!5m2!1spt-BR!2sbr"
                            className="w-full h-full border-[1px] border-black rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all ease-in-out duration-700 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.7)]"
                            allowFullScreen
                            loading = "lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="flex flex-col my-4 md:w-2/5 md:justify-between xl:p-1">
                        <div className="flex flex-col items-center">
                            <h4 className="font-bold max-[420px]:text-2xl text-3xl md:text-[29px] lg:text-4xl xl:text-[42px] text-green-800">Armazenamento</h4>
                            <div className="flex flex-row items-center gap-1 mt-2 md:mt-3 lg:mt-4 xl:mt-5 border-2 rounded-md p-1 min-[600px]:p-[6px] lg:p-2 xl:p-3 border-black font-bold bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all ease-in-out duration-700 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.7)]">
                                <FaBoltLightning className="text-yellow-600 text-xl min-[600px]:text-2xl md:text-xl lg:text-2xl xl:text-3xl"/>
                                <p className="max-[420px]:text-base text-xl md:text-lg lg:text-2xl xl:text-3xl">28.382.754 kW</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center mt-4 mb-1">
                            <h4 className="font-bold max-[420px]:text-2xl text-3xl md:text-[29px] lg:text-4xl xl:text-[42px] text-green-800">Produção</h4>
                            <div className="flex flex-row items-center gap-1 mt-2 md:mt-3 lg:mt-4 xl:mt-5 border-2 rounded-md p-1 min-[600px]:p-[6px] lg:p-2 xl:p-3 border-black font-bold bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all ease-in-out duration-700 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.7)]">
                                <FaWhmcs className="text-yellow-600 text-xl min-[600px]:text-2xl md:text-xl lg:text-2xl xl:text-3xl"/>
                                <p className="max-[420px]:text-base text-xl md:text-lg lg:text-2xl xl:text-3xl">120.248 kWh </p>
                            </div>
                        </div>
                    </div>
                    <div className="block md:hidden h-[300px] px-5 pb-5">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29256.74326365086!2d-46.5408472!3d-23.56510645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5dc4a49e16dd%3A0x51b4f99af24814e1!2sVila%20Formosa%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1731883233914!5m2!1spt-BR!2sbr"
                            className="w-full h-full border-[1px] border-black rounded-3xl shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all ease-in-out duration-700 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.7)]"
                            allowFullScreen
                            loading = "lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            ),
        },
        {
            bairro: "São Mateus",
            dado: (
                <div className="flex flex-col md:flex-row w-full">
                    <div className="hidden md:block md:w-3/5 md:min-h-64 lg:min-h-72 xl:min-h-[22rem] p-5 xl:p-6">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29248.977625584852!2d-46.48066644999999!3d-23.599949900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce67d20ba38873%3A0x5137128655a7611f!2sS%C3%A3o%20Mateus%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1731883251129!5m2!1spt-BR!2sbr"
                            className="w-full h-full border-[1px] border-black rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all ease-in-out duration-700 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.7)]"
                            allowFullScreen
                            loading = "lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="flex flex-col my-4 md:w-2/5 md:justify-between xl:p-1">
                        <div className="flex flex-col items-center">
                            <h4 className="font-bold max-[420px]:text-2xl text-3xl md:text-[29px] lg:text-4xl xl:text-[42px] text-green-800">Armazenamento</h4>
                            <div className="flex flex-row items-center gap-1 mt-2 md:mt-3 lg:mt-4 xl:mt-5 border-2 rounded-md p-1 min-[600px]:p-[6px] lg:p-2 xl:p-3 border-black font-bold bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all ease-in-out duration-700 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.7)]">
                                <FaBoltLightning className="text-yellow-600 text-xl min-[600px]:text-2xl md:text-xl lg:text-2xl xl:text-3xl"/>
                                <p className="max-[420px]:text-base text-xl md:text-lg lg:text-2xl xl:text-3xl">28.382.754 kW</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center mt-4 mb-1">
                            <h4 className="font-bold max-[420px]:text-2xl text-3xl md:text-[29px] lg:text-4xl xl:text-[42px] text-green-800">Produção</h4>
                            <div className="flex flex-row items-center gap-1 mt-2 md:mt-3 lg:mt-4 xl:mt-5 border-2 rounded-md p-1 min-[600px]:p-[6px] lg:p-2 xl:p-3 border-black font-bold bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all ease-in-out duration-700 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.7)]">
                                <FaWhmcs className="text-yellow-600 text-xl min-[600px]:text-2xl md:text-xl lg:text-2xl xl:text-3xl"/>
                                <p className="max-[420px]:text-base text-xl md:text-lg lg:text-2xl xl:text-3xl">120.248 kWh </p>
                            </div>
                        </div>
                    </div>
                    <div className="block md:hidden h-[300px] px-5 pb-5">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29248.977625584852!2d-46.48066644999999!3d-23.599949900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce67d20ba38873%3A0x5137128655a7611f!2sS%C3%A3o%20Mateus%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1731883251129!5m2!1spt-BR!2sbr"
                            className="w-full h-full border-[1px] border-black rounded-3xl shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all ease-in-out duration-700 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.7)]"
                            allowFullScreen
                            loading = "lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <section className="flex flex-col gap-3 sm:gap-4 md:gap-5 items-center mx-20 max-sm:mx-8 max-[335px]:mx-6 mt-4 sm:mt-10 pb-8 sm:pb-10">
            {dadosInfo.map((item, index) => (
                <div key={index} className="flex flex-col w-full">
                    <button
                        id="btn-accordion"
                        className={`flex gap-2 py-5 sm:py-7 pl-[30px] pr-9 bg-white relative text-left text-base min-[350px]:text-lg sm:text-xl text-black font-bold border-[3px] sm:border-4 border-yellow-500 my-2 rounded-3xl transition-all ease-in-out duration-300 cursor-pointer hover:underline ${activeIndices.includes(index) ? "active" : ""}`}
                        onClick={() => togglePanel(index)}
                    >
                        <FaLocationDot id="map-icon" className="w-5 h-5 text-yellow-500"/> {item.bairro}
                        <svg
                            className={`absolute right-[30px] top-1/2 transform -translate-y-1/2 rotate-180 transition-transform delay-300 text-emerald-500 w-6 h-6 ${activeIndices.includes(index) ? "open" : ""}`}
                            viewBox="0 0 24 24"
                        >
                            <path d="M2.793 15.957a1 1 0 0 0 1.414 0L12 8.164l7.793 7.793a1 1 0 1 0 1.414-1.414L12 5.336l-9.207 9.207a1 1 0 0 0 0 1.414z"></path>
                        </svg>
                    </button>
                    <div
                        className="mb-5 bg-[#dedede] border-t-0 border-x-[3px] sm:border-x-4 border-b-[3px] sm:border-b-4 border-yellow-500 w-full rounded-b-3xl hidden overflow-hidden"
                        style={{
                            display: activeIndices.includes(index) ? "block" : "none",
                        }}
                    >
                        {item.dado}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default InfoEnergia
