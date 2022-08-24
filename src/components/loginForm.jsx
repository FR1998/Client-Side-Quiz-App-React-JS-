import React, {useState } from 'react'
import Form from './form';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

  const [user] = useState({name:"",email:""});
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const adminUser = {
    email: "student@gmail.com",
    password:"123456"

  }
  const adminUser1 = {
    email: "student1@gmail.com",
    password:"123456"

  }
 
  const admin = {
    email: "teacher@gmail.com",
    password:"123456"

  }

  
  const Login = details => {
    console.log(details);
    if(details.email === adminUser.email && details.password === adminUser.password){
    console.log("Welcome");
    localStorage.setItem('token',details.name);
   /* setUser({
      name: details.name,
      email: details.email,
      
    }) */
    navigate("/quizpage");
    
    
    } 
    else if(details.email === adminUser1.email && details.password === adminUser1.password){
      console.log("Welcome");
      localStorage.setItem('token1','randomValue1');
     /* setUser({
        name: details.name,
        email: details.email,
        
      }) */
      navigate("/quizpage");
      
      
      } 
    
    else if(details.email === admin.email && details.password === admin.password) {
        console.log("Welcome");
        localStorage.setItem('token','randomValue');
       /* setUser({
          name: details.name,
          email: details.email,
          
        }) */
        navigate("/teacher");
        
    }
    
    
    else {
      console.log("no entry");
      setError("Details do not match! Entry Denied")
    }

  };

  




  const Logout = () => {
    console.log("Logout");
    localStorage.removeItem('token');
    /*
    setUser({
      name:"",email:""
      
    })
    */
  };

  return ( 
    <div>
      {(user.email !== "") ? (
        <div>
        <h2>Welcome, <span>{user.name}</span></h2>
        <button className='btn btn-warning' onClick={Logout}>Logout</button>
        </div>

      )  : (
        <Form Login={Login} error={error}  />
      )
      }
    </div>
   );
}
export default LoginForm;