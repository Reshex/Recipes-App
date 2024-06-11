import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

function GoogleAuth(props) {
    const responseMessage = (response) => {
        console.log(response);
        props.setIsLoggedIn(true);
        props.navigate('/recipes');
    };

    const errorMessage = (error) => {
        console.log(error);
    };

    return (
        <div>
            <p style={{ marginLeft: "5%", fontSize: "25px"}}>Or sign up with:</p>
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
    );
}

export default GoogleAuth