import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// getting the values of local storage
const getDatafromLS = () => {
  const data = localStorage.getItem("books");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const Teacher = () => {
  const [items, setItems] = useState(getDatafromLS());
  const [ques, setQues] = useState("");
  const [ans, setAns] = useState("");
  const [op, setOp] = useState("");
  const [op1, setOp1] = useState("");
  const [op2, setOp2] = useState("");
  const [op3, setOp3] = useState("");
  const [scor, setScor] = useState(0);
  const [time, setTime] = useState(0);
  const navigate = useNavigate();
  const form = useRef(null);

  const addItem = (e) => {
    e.preventDefault();
    setItems([
      ...items,
      {
        id: items.length + 1,
        question: ques,
        options: [op, op1, op2, op3],
        answer: ans,
        score: scor,
        time: time,
      },
    ]);
    setQues("");
    setAns("");
    setOp("");
    setOp1("");
    setOp2("");
    setOp3("");
    setScor(0);
    setTime(0);
    form.current.reset(); //this will reset all the inputs in the form
  };

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(items));
  }, [items]);

  //   useEffect(()=>{
  //     localStorage.getItem('books',JSON.stringify(items));
  //   },[items])
  const Logout = () => {
    console.log("Logout");
    // localStorage.removeItem('token');
    navigate("/");
  };

  const dash = () => {
    navigate("/dashboard");
  };

  const removeQuiz = () => {
    console.log("Logout");
    localStorage.removeItem("books");
  };

  return (
    <div>
      <button className="btn btn-warning" onClick={Logout}>
          Logout
        </button>
      {/* <button onClick={addItem} className='btn btn-primary' >Add Question</button> */}
      <div className="form-container">
        <form
          ref={form}
          autoComplete="off"
          className="form-group"
          onSubmit={addItem}
        >
          <label className="d-flex justify-content-center">Question</label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(e) => setQues(e.target.value)}
            value={items.question}
          ></input>
          <br></br>

          <label className="d-flex justify-content-center">Options</label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(e) => setOp(e.target.value)}
            value={items.options}
          ></input>
          <br></br>
          <input
            type="text"
            className="form-control"
            required
            onChange={(e) => setOp1(e.target.value)}
            value={items.options}
          ></input>
          <br></br>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setOp2(e.target.value)}
            value={items.options}
          ></input>
          <br></br>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setOp3(e.target.value)}
            value={items.options}
          ></input>
          <br></br>

          <label className="d-flex justify-content-center">Answer</label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(e) => setAns(e.target.value)}
            value={items.answer}
          ></input>
          <br></br>

          <label className="d-flex justify-content-center">
            Time to sove this question (in Minutes)
          </label>
          <input
            type="number"
            step="0.01"
            id="totalAmt"
            className="form-control"
            required
            onChange={(e) => setTime(e.target.value)}
            value={items.time}
          ></input>
          <br></br>

          <button type="submit" className="btn btn-success btn-md">
            ADD
          </button>
          <button className="btn btn-warning ms-4" onClick={removeQuiz}>
            Remove Quiz
          </button>
        </form>
        <button className="btn btn-success my-4" onClick={dash}>
          Dashboard
        </button>
      </div>
      {items.map((item) => (
        <p key={item.id}>
          {item.question}
          <br></br>
          {item.options}
        </p>
      ))}
    </div>
  );
};

export default Teacher;
