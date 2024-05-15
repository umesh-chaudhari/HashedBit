import React from 'react'
import "./App.css"
import { useState } from 'react'

function Registration () {
    const [registrationData, setRegistrationData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const handeleInputChange = (event)=>{
        const {name , value } = event.target
        setRegistrationData({ ...registrationData, [name]:value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
       // console.log(registrationData)
    }
  return (
    <div className="formContainer">
    <h1>Registraion Form</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" 
                    name='name'
                    value={registrationData.name}
                    onChange={handeleInputChange}
                    placeholder='Name'
                    className="inputField"
                    required
                />
            </div>
            <div>
                <input type="email" 
                        name='email'
                        value={registrationData.email}
                        onChange={handeleInputChange}
                        placeholder='Email'
                        className="inputField"
                        required
                    />
            </div>
            <div>
                <input type="password" 
                    name='password'
                    value={registrationData.password}
                    onChange={handeleInputChange}
                    placeholder='Password'
                    className="inputField"
                    required
                />
            </div>
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Registration