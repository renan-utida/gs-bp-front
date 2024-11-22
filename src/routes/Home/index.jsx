import CardSolucoes from "./CardsSolucoes.jsx"
import Slideshow from "./Slideshow.jsx"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const usuario = sessionStorage.getItem("usuario");
        setIsAuthenticated(!!usuario);
    }, []);

    const handleRestrictedNavigation = (path) => {
        if (isAuthenticated) {
            navigate(path);
        } else {
            alert('Você precisa estar logado para acessar esta página!');
            navigate("/login");
        }
    };

    return(
        <main className="pt-20">
            <Slideshow handleRestrictedNavigation={handleRestrictedNavigation}/>
            <h2 className="mx-7 text-center text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-5xl py-14 xl:py-20 font-extrabold text-green-600">Explore Nossas Soluções Sustentáveis!</h2>
            <CardSolucoes handleRestrictedNavigation={handleRestrictedNavigation}/>
        </main>
    )
}

export default Home