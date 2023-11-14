import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbarcom from './components/Navbarcom';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import FAQ from './components/FAQ/Faq';
function App() {
  return (
    <>
      <Router>
        <Navbarcom />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
