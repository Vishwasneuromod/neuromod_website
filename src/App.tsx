import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import MovementDisorders from "./pages/MovementDisorders";
import Epilepsy from "./pages/Epilepsy";
import Spasticity from "./pages/Spasticity";
import ChronicPain from "./pages/ChronicPain";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/movement-disorders" element={<MovementDisorders />} />
            <Route path="/services/epilepsy" element={<Epilepsy />} />
            <Route path="/services/spasticity" element={<Spasticity />} />
            <Route path="/services/chronic-pain" element={<ChronicPain />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
