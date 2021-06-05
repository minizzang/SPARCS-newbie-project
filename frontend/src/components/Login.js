import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

const Login = () => {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const changeEmail = (item) => {
        setUserData({...userData, email : item})
    }
    const changePassword = (item) => {
        setUserData({...userData, password : item})
    }

    const submit = (item) => {
        const loggedUser = {
            email: userData.email,
            password: userData.password
        }

        axios.post('http://localhost:8080/login', loggedUser)
            .then(res => console.log(res.data))
    }

    return (
        <div className="container">
            <div className='form-div'>
                <form onSubmit = {v => submit(v)}>
                    
                    <input type = 'text'
                    placeholder = 'email'
                    onChange={v => changeEmail(v.target.value)}
                    value={userData.email}
                    className='form-control form-group'
                    />

                    <input type = 'password'
                    placeholder = 'password'
                    onChange={v => changePassword(v.target.value)}
                    value={userData.password}
                    className='form-control form-group'
                    />

                    <input type='submit' className='btn' value='Submit' onClick={() => submit(userData)}/>
                </form>
                
            </div>
        </div>
    )
}

export default Login;