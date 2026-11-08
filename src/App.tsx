import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import MovementDisorders from "./pages/MovementDisorders";
import Epilepsy from "./pages/Epilepsy";
import Spasticity from "./pages/Spasticity";
import ChronicPain from "./pages/ChronicPain";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ManageHome from "./pages/manage/ManageHome";
import ManageFaqs from "./pages/manage/ManageFaqs";
import { MANAGE_BASE } from "./pages/manage/ui";


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
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            {/* Unlisted editor area: not linked anywhere. Protection is the login enforced by the API; the path is only a convenience. */}
            <Route path={MANAGE_BASE} element={<ManageHome />} />
            <Route path={`${MANAGE_BASE}/faqs`} element={<ManageFaqs />} />
            {/* Any other /manage/... path (e.g. a mistyped /manage/faq) goes to the login/dashboard page. */}
            <Route path={`${MANAGE_BASE}/*`} element={<Navigate to={MANAGE_BASE} replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
