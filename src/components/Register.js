import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const history = useNavigate();
  const [formData,setFormData] = useState({
    username : '',
    email : '',
    password : ''
  })

  const handleChange = (e)=>{
    setFormData({
       ...formData,
       [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();

      axios.post('http://127.0.0.1:8000/api/register/',{
      username : formData.username,
      email : formData.email,
      password : formData.password
    })
    .then((res) =>{
      console.log(res.data);
      history('/login')
    })
    .catch((err)=>{
      console.log(err.response.status)
      console.log(err.response.data)
    })
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input 
          name="username"
          type="text" 
          className="form-control" 
          placeholder="username" 
          onChange={handleChange}
          />
        <label htmlFor="email">Email</label>
        <input 
          name="email"
          type="email" 
          className="form-control" 
          placeholder="email" 
          onChange={handleChange}
          />
        <label htmlFor="password">Password</label>
        <input 
          name="password"
          type="text" 
          className="form-control" 
          placeholder="password"
          onChange={handleChange}
          />
        <button className="btn btn-primary mt-3">SignUp</button>
      </form>
    </div>
  );
};

export default Register;
