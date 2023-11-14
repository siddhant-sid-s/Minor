import React from 'react'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./login2.css";

function Login() {
    return (
        <>
            <div className="log">
                <div className="loginContainer">
                    <h1>Login Page</h1>

                    <div className="input-container">
                        <label>Email </label>
                        <input type="text" name="uname" required />
                        {/* {renderErrorMessage("uname")} */}
                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input type="password" name="pass" required />
                        {/* {renderErrorMessage("pass")} */}
                    </div>
                    <a href="#">Forgot password?</a>
                    <a href="#">Create a new account</a>
                    <div>
                        <Link to={"/Login"}>
                            <Button variant="primary" className='btn-l'>Login</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login
