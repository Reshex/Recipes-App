import React, { useState } from "react";
import GoogleAuth from "./GoogleAuth";
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import axios from 'axios';
import app from './Firebase';


function Register(props) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth(app);


    async function handleRegistration(event) {
        event.preventDefault();
        const { reg_email, reg_password, reg_password_confirm } = event.target.elements;
        const email = reg_email.value;
        const password = reg_password.value;
        const passwordConfirm = reg_password_confirm.value;

        if (!email || !password || !passwordConfirm) {
            props.setError("Please fill in all fields.");
            return;
        }
        if (password !== passwordConfirm) {
            props.setError("Passwords do not match.");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            const user = userCredential.user;

            console.log(`Successfully registered as ${user.email}`);

            axios.post("/api/register", { email })
                .then(response => {
                    if (response.data.success) {
                        props.setIsLoggedIn(true);
                        navigate("/recipes");
                    } else {
                        props.setError(response.data.message);
                    }
                })
                .catch(error => props.setError(error.message));
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="container" style={{ width: "30%", marginTop: "7%", padding: "5%" }}>
            <div className="text-center" >
                <div className="login-form-1">
                    <form id="register-form" className="text-left" onSubmit={handleRegistration} noValidate>
                        <div className="login-form-main-message"></div>
                        <div className="main-login-form">
                            <div className="login-group">
                                <div className="form-group">
                                    <label htmlFor="reg_email" className="sr-only">
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="reg_email"
                                        name="reg_email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="reg_password" className="sr-only">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="reg_password"
                                        name="reg_password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="reg_password_confirm" className="sr-only">
                                        Password Confirm
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="reg_password_confirm"
                                        name="reg_password_confirm"
                                        placeholder="Confirm password"
                                    />
                                </div>
                                <button className="btn btn-dark" style={{ marginLeft: "40%" }}> Register </button>
                                <h5 style={{ padding: "1%", marginTop: "5%", marginLeft: "27%" }}>
                                    Already a member?{" "}
                                </h5>
                                <h5 style={{ padding: "1%", marginLeft: "40%" }}>
                                    <Link to="/login" role="button" style={{ color: "white", padding: "3%" }}>
                                        Log in
                                    </Link>
                                </h5>
                                <div style={{ marginLeft: "25%", marginTop: "10%" }} >
                                    <GoogleAuth
                                        setIsLoggedIn={props.setIsLoggedIn}
                                        navigate={navigate}
                                    />
                                </div>
                            </div>
                        </div>
                    </form >
                </div>
            </div>
        </div>
    )
}

export default Register