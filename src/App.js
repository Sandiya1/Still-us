import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Galentine from "./pages/Galentine";
import Letters from "./pages/Letters";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galentine" element={<Galentine />} />
        <Route path="/letters" element={<Letters />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
