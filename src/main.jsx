import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './routes/Error/index.jsx'
import Home from './routes/Home/index.jsx'
import GeracaoEnergia from './routes/GeracaoEnergia/index.jsx'
import Login from './routes/Login/index.jsx'
import CriarConta from './routes/CriarConta/index.jsx'
import AreaUsuario from './routes/AreaUsuario/index.jsx'
import Sobre from './routes/Sobre/index.jsx'

/*Criando a função createBrowserRouter*/
const router = createBrowserRouter([
  {
    // Criando a rota pai
    path: '/',
    element: <App/>,
    errorElement: <Error/>,

    // Criando as rotas filhas
    children: [
      { path: '/', element: <Home/>},
      { path: '/geracao-energia', element: <GeracaoEnergia/>},
      { path: '/login', element: <Login/>},
      { path: '/criar-conta', element: <CriarConta/>},
      { path: '/area-usuario', element: <AreaUsuario/>},
      { path: '/sobre', element: <Sobre/>},
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
