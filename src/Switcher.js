import { Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import About from './AboutMe';
import Skills from "./skills.tsx";
import App from './App';
import Contacts from './Contacts';

export default function Switcher() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about me" element={<About />} />
                <Route path="/contact me" element={<Contacts />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/3d modeling" element={<App />} />
            </Routes>
        </div>
    );
}