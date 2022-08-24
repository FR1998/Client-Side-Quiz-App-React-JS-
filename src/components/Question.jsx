import React, { useState, useEffect, useRef } from "react";
import useCountdown from "./useCountdown";



const Question = ({
  data,
  onAnswerUpdate,
  numOfQuestions,
  activeQuestion,
  onSetActiveQuestion,
  onSetStep,
}) => {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const radiosWrapper = useRef();

  /////////////////             Countdown stuff         ///////////////////////////
  const endTime = new Date().getTime() + 60000 *(data.time); // 30 sec
  const endingTime = new Date().getTime() + 60000 * 0.15;
  const [timeLeft, setEndTime] = useCountdown(endTime);

  const minutes = Math.floor(timeLeft / 60000) % 60;
  const seconds = Math.floor(timeLeft / 1000) % 60;

  /////////////////////////// Ends Here  ////////////////////////////////
  


  useEffect(() => {
    const findCheckedInput =
      radiosWrapper.current.querySelector("input:checked");
    if (findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);

  useEffect(() => {
    if (setEndTime(endTime) < endingTime) {
      clearInterval(endTime);
    }
  }, [data ]);

  useEffect(() => {
    if (timeLeft <= 0) {
      setSelected(selected==="");
      onSetActiveQuestion(activeQuestion + 1);
      onAnswerUpdate((prevState) => [
        ...prevState,
        { q: data.question, a: selected },
      ]);
      clearInterval(endTime);
    }
  }, [onSetActiveQuestion, setSelected, onAnswerUpdate, timeLeft, onSetStep]);

  


  const changeHandler = (e) => {
    setSelected(e.target.value);
    if (error) {
      setError("");
    }
  };

 

  
  const nextClickHandler = (e) => {
    if (selected === "") {
      return setError("Please select one option!");
    }
    onAnswerUpdate((prevState) => [
      ...prevState,
      { q: data.question, a: selected },
    ]);
    setSelected("");
    if (activeQuestion < numOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(3);
    }
  };

  const backClickHandler = (e) => {
    if (activeQuestion >= 1) {
      onSetActiveQuestion(activeQuestion - 1);
      onAnswerUpdate([]);
      onAnswerUpdate((prevState) => [
        ...prevState,
        { q: data.question, a: selected },
      ]);
    }
    //  else {
    //    onSetStep(1);
    //  }
  };

  return (
    <div className="container1">
      <div className="column">
        <h2 className="questionHeading">
          {data.question} {`${minutes}:${seconds}`}
        </h2>
      </div>

      <div className="container-fluid">
        <div className="control" ref={radiosWrapper}>
          {data.options.map((option,i) => (
            <label className="radio" key={i}>
              <input
                type="radio"
                name="answer"
                value={option}
                onChange={changeHandler}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      <div className="column">
        <button
          className="questionButton1 btn btn-danger"
          onClick={backClickHandler}
        >
          Back
        </button>
        <button
          className="questionButton1  btn btn-success"
          onClick={nextClickHandler}
        >
          Next
        </button>
        {error && <div className="error text-danger ">{error}</div>}
      </div>
    </div>
  );
};

export default Question;
