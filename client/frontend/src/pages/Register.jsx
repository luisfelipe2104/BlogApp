import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"

function Register() {
  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:"",
  })

  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      await axios.post("/auth/register", inputs)
      navigate("/login")
    }catch(err){
      setError(err.response.data)
    }
  }


  return (
    <div className='auth'>
        <h1>Register</h1>
        <form>
            <input name='username' required type="text" placeholder='username' onChange={handleChange} />
            <input name='email' required type="email" placeholder='email' onChange={handleChange} />
            <input name='password' required type="password" placeholder='password' onChange={handleChange} />
            <button onClick={handleSubmit}>Register</button>
            {error && <p>{error}</p>}
            <span>Do you have any account? <Link to="/login">Login</Link></span>
        </form>
    </div>
  )
}

export default Register