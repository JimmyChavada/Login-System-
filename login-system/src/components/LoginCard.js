import React, { useState } from 'react'
import './login.css'

export default function LoginCard() {
    const [formData, setFormData] = useState( {
        email: '', 
        password: ''
    })

    function handleChange(e) { 
        const { name, value } = e.target 
        setFormData(prevState => ( { 
            ...prevState, 
            [name]: value
        }))
    }

    function handleSubmit(e) { 
        e.preventDefault(); // Prevent default form submission
        console.log('Form data:', formData); // Log form data to console
    }

    function showDetail(e) {
        e.preventDefault();
        console.log(formData); 
    }

  return (
    <div className='card-wrapper'>
        <h3>Login</h3>
        <p>Please enter your login and password</p>
        <form className='form' onChange={handleSubmit}>
            <input
                type="text"
                placeholder='Email'
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <input
                type="text"
                placeholder='Password'
                onChange={handleChange}
                name="password"
                value={formData.password}
            />
            <button type='submit' onClick={showDetail}>Login</button>

            <small>Don't have an account? <a href='#' >Register here</a></small>

        </form>
      
    </div>
  )
}
