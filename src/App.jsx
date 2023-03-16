import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Info from "./pages/Info";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/sobre" element={<Sobre />} />

          <Route path="/contato" element={<Contato />} />
          
          <Route path="/info" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App