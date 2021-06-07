import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SignUp.css";

const SignUp = () => {

    

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: ''
    });

    useEffect(() => {
        // 목록 조회 요청 전송
        axios.get(`/api/signup`)
        // 응답이 돌아오면 응답 내용으로 목록을 변경
        .then(response => {
            setUserData(response.data);
        });
      }, []);
    // useEffect(() => {
    //     axios.get(`/signup`)
    //     .then(response => {
    //         console.log("mini");
    //     });
    //   }, []);

    const changeName = (item) => {
        setUserData({...userData, name : item})
    }
    const changeEmail = (item) => {
        setUserData({...userData, email : item})
    }
    const changePassword = (item) => {
        setUserData({...userData, password : item})
    }

    const submit = (item) => {
        item.preventDefault() // 사이트 refresh 방지
        console.log("hello")
        const registered = {
            name: userData.name,
            email: userData.email,
            password: userData.password
        }
//http://localhost:8080
        axios.post(`/api/signup`, {registered})
            .then(() => axios.get(`/api/signup`))
            .then(response => {
                console.log("signUp completed!");
                setUserData('');
              });
    }

    return (
        <div className="container">
            <div className='form-div'>
                <form onSubmit = {v => submit(v)}>
                    <input type = 'text'
                    placeholder = 'name'
                    onChange={v => changeName(v.target.value)}
                    value={userData.name}
                    className='form-control form-group'
                    />

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

                    <input type='submit' className='btn' value='Submit' onClick={() => submit}/>
                </form>
                
            </div>
        </div>
    )
}

export default SignUp;