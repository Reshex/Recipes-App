import React from 'react';
import GoogleAuth from './GoogleAuth';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import axios from 'axios';
import app from './Firebase';


function Login(props) {

    const navigate = useNavigate();
    const auth = getAuth(app);

    async function handleFormSubmit(event) {
      event.preventDefault();
      const { email, password } = event.target.elements;
      const credentials = {
        email: email.value,
        password: password.value,
      };
      try {
        const userCredential = await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
    
        const user = userCredential.user;
    
        console.log(`Successfully logged in as ${user.email}`);
    
          axios.post("/api/login", credentials)
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
        
        <div className="centered">
          <div className="container" style={{ marginTop: "10%", width: "30%" }}>
        <form onSubmit={handleFormSubmit}>
        <div className="form-outline mb-4">
            <input type="email" id="form2Example1" name="email" className="form-control" />
            <label className="form-label" htmlFor="form2Example1">
              Email address
            </label>
            </div>
            <div className="form-outline mb-4">
                <input type="password" id="form2Example2" name="password" className="form-control" />
                <label className="form-label" htmlFor="form2Example2">
                  Password
                </label>
              </div>
    
            <div className="row mb-4">
              <div className="col d-flex justify-content-center">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="form2Example31"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="form2Example31"
                    style={{ fontWeight: "bold", color: "black" }}
                  >
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
              </div>
    
              <div className="col">
                <a
                  style={{ fontWeight: "bold", fontSize: "15px", color: "white" }}
                  href="#!"
                >
                  Forgot password?
                </a>
              </div>
            </div>
    
            <button
              type="submit"
              className="btn btn-dark btn-block mb-4"
              style={{ fontWeight: "bold", fontSize: "20px" }}
            >
              Sign in
            </button>
            </form>
            <div
              className="text-center"
              style={{ fontSize: "30px", fontWeight: "bold", color: "white" }}
            >
              <h4 style={{color: "black", margin: "3%" }}>
                Not a member?{" "}
              </h4>

              <h5>
                 <Link to="/register" role="button" style={{ color: "white", padding: "3%" }}>
                   Register
               </Link>
              </h5>

              <div style={{margin: "7%", marginRight: "10%", }}>
                <GoogleAuth
                  setIsLoggedIn={props.setIsLoggedIn}
                  navigate={navigate}
                />
              </div>
            </div>
          </div>
        </div>
      );
    
}

export default Login;


