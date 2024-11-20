import { Outlet } from "react-router-dom"
import Nav from "./components/Nav"
import Footer from "./components/Footer"

import { QuizProvider } from "./context/quiz";

function App() {
  

  return (
    <>
        <Nav/>
        <QuizProvider>
            <Outlet/>
        </QuizProvider>
        <Footer/>
    </>
  )
}

export default App
