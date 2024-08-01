import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Сomponents/Home';
import Login from './Сomponents/Login';
import Register from './Сomponents/Register';
import Profile from './Сomponents/Profile';

const App = () => {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;