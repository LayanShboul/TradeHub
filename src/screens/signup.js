import React, { useState } from "react";

function Signup()
{

    const [credendtials , setCredendtials] = useState({name:"" , email:"" , password:"" , geolocation:""});

    const handleSubmit =async (e)=>
    {
        e.preventDefault() ;   
        const response =await fetch("http://localhost:3002/api/creatuser",
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:credendtials.name , email:credendtials.email , password:credendtials.password, location:credendtials.geolocation})
        });

        const json =await response.json();
        console.log(json);

        if(!json.success)
        {
            alert("Enter valid credentials !")
        }

    }

    const onChange=(event)=>
    {
        setCredendtials({...credendtials , [event.target.name]:event.target.value})
    }


    return <div>
    <form onSubmit={handleSubmit}>
    <div className="form-container">
    <label htmlFor="name" className="form">Name</label>
    <input type="text" className="label" name="name" value={credendtials.name} onChange={onChange}/>
  </div>

  <div className="form-container">
    <label htmlFor="email" className="form">Email address</label>
    <input type="email" className="label" name="email" value={credendtials.email} onChange={onChange}/>
  </div>

  <div className="form-container">
    <label htmlFor="exampleInputPassword1" className="form">Password</label>
    <input type="password" className="label" name="password" value={credendtials.password} onChange={onChange}/>
  </div>

  <div className="form-container">
    <label htmlFor="exampleInputPassword1" className="form">Address</label>
    <input type="text" className="label" name="geolocation" value={credendtials.geolocation} onChange={onChange}/>
  </div>

  <button type="submit" className="form-btn">Submit</button>
  <a href="/login" className="already">Already a user? </a>

</form>
    </div>
}
export default Signup;
