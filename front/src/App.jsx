
import './App.css'
import LoginForm from './components/loginForm'
import SideBar from './components/SideBar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../src/Inventries/About"; 
import Contact from "../src/Inventries/Contact";

function App() {
    return (
        <Router>
            <SideBar />
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
