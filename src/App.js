import React from "react";
import "./App.css";
import Teacher from './components/Teacher';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import QuizPage from './components/QuizPage';
import LoginForm from './components/loginForm';
import Dashboard from './components/Dashboard';




const App = () => {
 

  return (
    <div>
     
      <Router>
      <Routes>
        <Route path="/teacher" element={<Teacher/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/quizpage" element={<QuizPage/>} />
        <Route path="/" element={<LoginForm/>} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
