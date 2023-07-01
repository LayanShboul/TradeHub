import {React, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login()
{
    
    const [credendtials , setCredendtials] = useState({ email:"" , password:"" });

    let navigate = useNavigate();

    const handleSubmit =async (e)=>
    {
        e.preventDefault() ;   
        const response =await fetch("http://localhost:3002/api/loginuser",
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email:credendtials.email , password:credendtials.password})
        });

        const json =await response.json();

        console.log(json);

        if(!json.success)
        {
            alert("Enter valid credentials !")
        }
      
        if(json.success)
        {
          localStorage.setItem("authToken" , json.authToken);
          console.log(localStorage.getItem("authToken"));
          navigate("/");
        }

    }
    
    const onChange=(event)=>
    {
        setCredendtials({...credendtials , [event.target.name]:event.target.value})
    }

    return <div>
    
<form onSubmit={handleSubmit}>
  <div className="form-container">
    <label htmlFor="email" className="form">Email address</label>
    <input type="email" className="label" name="email" value={credendtials.email} onChange={onChange}/>
  </div>

  <div className="form-container">
    <label htmlFor="exampleInputPassword1" className="form">Password</label>
    <input type="password" className="label" name="password" value={credendtials.password} onChange={onChange}/>
  </div>


  <button type="submit" className="form-btn">Submit</button>
  <a href="/creatuser" className="already">I'm a new user? </a>

</form>
    </div>
}

export default Login;