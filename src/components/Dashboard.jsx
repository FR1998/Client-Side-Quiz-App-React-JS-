import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

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

const Dashboard = () => {
    const [data1] = useState(getDatafromLS1());
    const navigate = useNavigate();


    const [sortState, setSortState] = useState("none");
    const sortMethods = {
      none: { method: (a, b) => null },
      ascending: { method: undefined },
      descending: { method: (a, b) => (a.correct > b.correct ? -1 : 1) },
    };

    const back = () => {
        navigate("/teacher");
      };


  return (
    <div>
      <div className="container1">
      <select defaultValue={'DEFAULT'} onChange={(e) => setSortState(e.target.value)}>
        <option value="DEFAULT" disabled>None</option>
        <option value="descending">Descending</option>
      </select>
      <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Marks</th>
      <th scope="col">Time Taken (s)</th>
    </tr>
  </thead>
  <tbody>
    {data1.sort(sortMethods[sortState].method).map((data)=>(
    <tr key={data.id}>
      <td>{data.name}</td>
      <td>{data.correct}</td>
      <td>{data.time}</td>
    </tr>
    ))}
</tbody>
</table>
</div>
<button className="btn btn-success my-4" onClick={back}>
          Back
        </button>
    </div>
  )
}

export default Dashboard
