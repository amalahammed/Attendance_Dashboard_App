import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './views/Login/Login';
import ForgotPassword from './views/ForgotPassword/ForgotPassword'; 
import PasswordReset from './views/passwordReset/passwordReset';
import Createac from './views/createNewPassword/CreateAcnt.jsx'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/password-reset" element={<PasswordReset/>} />
        <Route path="/createac" element={<Createac/>} />
      </Routes>
    </Router>
  );
}

export default App;
