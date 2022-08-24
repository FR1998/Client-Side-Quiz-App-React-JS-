import React, {useState} from "react";
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


const Modal = ({ onClose, results, data, correct }) => {
  const [data1, setData1] = useState(getDatafromLS())
 

  
  // const AnsTrue = (result,i) => {
  //   if(result.a === quiz[i].answer){
  //     <p> Correct : {quiz[i].answer} Good Yar</p>
  //   }
  //   else
  //   {
  //     <p> Correct : {quiz[i].answer} Bad Yar</p>
  //   }
  // }


  return (
    <div className="container2">
      {results.map((result, i) => (
        <ul key={i} className="mb-6">
          <li className="quesList" >
            <strong>{result.q}</strong>
          </li>
          
          {<p className="pp1" > Your answer: {result.a}</p>}
          {
            <p className="pp1">
              Your Score: {result.score}
            </p>
          }
          {
             <p className="pp1 ">
              Correct answer: {data1[i].answer}
             </p>
            
          }
        </ul>
      ))}
    </div>
  );
};

export default Modal;
