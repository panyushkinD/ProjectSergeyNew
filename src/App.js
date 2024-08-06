import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/header/About";
import Contact from "./components/header/Contact";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";

const App = () => {
    return (
        <div className="App">
            <Sidebar />
            <Header/>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            <Footer/>
        </div>
    );
};

export default App;