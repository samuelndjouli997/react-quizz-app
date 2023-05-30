import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quizz from "./pages/Quizz";
import EndQuizz from "./pages/EndQuizz";

function App() {


  return (
    <>
      <section className="flex flex-col items-center bg-gradient-001 py-14 max-w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quizz" element={<Quizz />} />
          <Route path="/endquizz" element={<EndQuizz />} />
        </Routes>
      </section>
    </>
  )
}

export default App
