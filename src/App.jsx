import { HashRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Cv from './pages/Cv'
import Portfolio from './pages/Portfolio'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import EasterEgg from './components/EasterEgg'
import './index.css'

function App() {
  return (
    <HashRouter>
      <NavBar />
      <EasterEgg />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App