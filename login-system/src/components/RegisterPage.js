import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./login.css"


export default function RegisterPage() {
  const[registerData, setRegisterData] = useState( { 
    email: '',
    password: ''
  })

  const[registerResult, setRegisterResult] = useState(false); 
  const history = useNavigate();

  function handleChange(e) { 
    const {name, value} = e.target; 
    setRegisterData(prevState => ({ 
      ...prevState, 
      [name]: value
    }))

  }


  function handleSubmit(e) { 
    e.preventDefault(); 
    console.log("registration data:", registerData); 
  }


  function sendData(e) { 
    e.preventDefault(); 

    fetch('http://127.0.0.1:5000/register-data', { 
      method: 'POST', 
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(registerData)
    })
    .then(res => res.json())
    .then(data => { 
      console.log('response', data)

      if(data.exists == false) { 
        setRegisterResult(true);
        setTimeout(() => history("/home"), 2000);
        
      }
      else { 
        setRegisterData(false);
      }
    
    })
    console.log(JSON.stringify(registerData)); 

  }


  return (
    <div className='card-wrapper'>
        <h3>Register</h3>
        <p>To Register for a new account please enter your email, and a password</p>
        <form className='form'>
            <input
                type="text"
                placeholder='Email'
                onChange={handleChange}
                name="email"
                value={registerData.email}
            />
            <input
                type="text"
                placeholder='Password'
                onChange={handleChange}
                name="password"
                value={registerData.password}
            />
            <button type='submit' href={registerResult ? "/home": "#"}onClick={sendData}>Register</button>

            <small>Already have an Account <a href='/login' >Login here</a></small>

            {registerResult ? <p>Registration Success</p> : <p>Email already Associated with an Account</p> }
        </form>
      
    </div>
  )
}
