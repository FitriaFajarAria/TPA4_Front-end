import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Portofolio from "./components/Portofolio";
import Blog from "./components/Blog";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home name={'Fitria Fajar Arianingsih'} />} />
        <Route path="/about" element={<About />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
