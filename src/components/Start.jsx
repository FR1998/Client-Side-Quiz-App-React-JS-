import React from "react";
import { useNavigate } from "react-router-dom";


const Start = ({ onQuizStart }) => {
  const navigate = useNavigate();

  const Logout = () => {
    console.log("Logout");
   // localStorage.removeItem('token');
    navigate("/");
  };

  
  return (
    <div>
      <button className='btn btn-warning' onClick={Logout}>Logout</button>
      <div className="container">
        <h1 className="d-flex justify-content-center">Start the Quiz</h1>
        <button className="hello btn btn-success " onClick={onQuizStart}>
          Start
        </button>
       
      </div>
    </div>
  );
};

export default Start;
