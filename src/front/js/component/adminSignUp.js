import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AppContext  } from "../store/appContext.js";

export const AdminSignUp = () => {
    const {store,actions} = useContext(AppContext )
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    async function sendData(e){
        e.preventDefault()
        console.log('Send Data')
        console.log(name, email, password)
        const isLogin = await actions.signUpAdmin(name, email, password)
        console.log(isLogin)
        if (isLogin){
            navigate('/adminPage')
        }
        
    }

    return(
        <>
        <div>
            <h1>Create an account</h1>
            <form onSubmit={sendData}>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="position-relative mb-4">
                            <label htmlFor="exampleInputName">Name</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter your full name"></input>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="position-relative mb-4">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                        </div>
                    </div>
                    <div className="col-12 mb-4">
                        <div className="position-relative mb-4">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Enter password"></input>
                        </div>
                    </div>
                    <div className="col-12 mb-4">
                        <div className="position-relative mb-4">
                            <button type="submit" className="btn btn-primary btn-lg w-100">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        </>
    );
}