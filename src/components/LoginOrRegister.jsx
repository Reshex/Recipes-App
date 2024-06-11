import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons'; import { Link } from 'react-router-dom';

function LoginOrRegister() {
    return (
        <div className="centered" style={{marginTop: "10%"}}>
            <div className="container" >
                <FontAwesomeIcon style={{fontSize: '100px', color: "white" }} icon={faUtensils} />
                <h1 className="display-3" style={{ fontSize: '100px' }}>Foodofid</h1>
                <p className="lead" style={{fontSize: '40px', color: "white" }}>Don't keep your meal boring, learn awesome recipes!</p>

                <Link className="btn regi btn-light btn-lg" style={{margin: "0.5%"}}  to="/register" role="button">Register</Link>
                <Link className="btn logi btn-dark btn-lg" style={{margin: "0.5%"}}  to="/login" role="button">Login</Link>
            </div>
        </div>
    );
}

export default LoginOrRegister