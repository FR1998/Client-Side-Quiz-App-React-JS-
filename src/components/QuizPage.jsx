import React, { useState, useEffect } from "react";
import End from "./End";
import Question from "./Question";
import Modal from "./Modal";
import Start from "./Start";
import { quiz } from "./../data/data";

// getting the values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('books');
  if(data){
    return JSON.parse(data);
  }
  else{
    return quiz;
  }
}

let interval;

const QuizPage = ({items}) => {
    const [step, setStep] = useState(1);
    const [data1] = useState(getDatafromLS())
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [time, setTime] = useState(0);
    
    


    useEffect(() => {
      if (step === 3) {
        clearInterval(interval);
      }
    }, [step]);
  
    const quizStartHandler = () => {
      setStep(2);
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    };

  
    const resetClickHandler = () => {
      setActiveQuestion(0);
      setAnswers([]);
      setShowModal(false);
      setStep(2);
      setTime(0);
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    };
  return (
    <div>
       {step === 1 && <Start onQuizStart={quizStartHandler}/>}
      {step === 2 && (
        <Question
          data={data1[activeQuestion]}
          onAnswerUpdate={setAnswers}
          numOfQuestions={data1.length}
          activeQuestion={activeQuestion}
          onSetActiveQuestion={setActiveQuestion}
          onSetStep={setStep}
        />
      )}
      {step === 3 && (
        <End
          results={answers}
          data={data1.data}
          onReset={resetClickHandler}
          onAnswerCheck={() => setShowModal(true)}
          time={time}
        />
      )}

      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          results={answers}
          data={quiz.data}
        />
      )}
    </div>
  )
}

export default QuizPage
