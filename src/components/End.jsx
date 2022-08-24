import React, { useState, useEffect } from "react";
import { quiz } from "./../data/data";
import { formatTime } from "../utils/index";
import { useNavigate } from "react-router-dom";

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

// getting the values of local storage
const getDatafromLS1=()=>{
  const data = localStorage.getItem('result');
  if(data){
    return JSON.parse(data);
  }
  else{
    return [];
  }
}

// getting the values of local storage
const getDatafromLS2=()=>{
  const data = localStorage.getItem('token');
  if(data){
    return (data);
  }
  else{
    return [];
  }
}



const End = ({ results, details, onReset, onAnswerCheck, time }) => {
  const [localResult , setLocalResult] = useState(getDatafromLS1());
  const [studentName] = useState(getDatafromLS2());
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [data1] = useState(getDatafromLS());
  const navigate = useNavigate();
  


  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if (result.a === data1[index].answer) {
        correct++;
        result.score = data1[index].score+1;
      }
      else{
        result.score = 0;
      }
    });
    setCorrectAnswers(correct);
    setLocalResult([...localResult,{
      id: localResult.length + 1,
      name: studentName,
      results,
      correct,
      time
      },
    ]);
    
  }, [results]);


  

  // useEffect(() =>{
  //   setLocalResult([...localResult,{
  //   id: localResult.length + 1,
  //   name: names,
  //   results,
  //   correctAnswers,
  //   time
  //   },
  // ]);
  // },[])


  

    // saving data to local storage
    useEffect(() => {
      localStorage.setItem("result", JSON.stringify(localResult));
    }, [localResult]);

    
  const Logout = () => {
    console.log("Logout");
    localStorage.removeItem('token');
    navigate("/");
  };

  


  return (
    <div className="container3" >
      <button className='btn btn-warning' onClick={Logout}>Logout</button>
            <h3 className="hello" >Your Results</h3>
            <p className="hello" >
              {correctAnswers} out of {data1.length} are correct!
            </p>
            <p className="hello" >
              <strong>
                Your Percentage : {Math.floor((correctAnswers / data1.length) * 100)}%
              </strong>
            </p>
            <p className="hello" >
              <strong>Time Taken: </strong> {formatTime(time)}{" "}
            </p>
            <button className="questionButton2 btn btn-warning ml-3 " onClick={onAnswerCheck}>
              Check Answers
            </button>
            <button className=" btn btn-success ms-3" onClick={onReset}>
              Try Again
            </button>
          </div>
       
  );
};

export default End;
