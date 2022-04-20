import React from "react";
// import { Link } from "react-router-dom";
import "./Login.css";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

// Components
import Logocomponent from "../components/LogoComponent";

const Login = () => {
  const responseFacebook = (response) => {
    localStorage.setItem("user_details", JSON.stringify(response));
    window.location.href = `http://142.93.115.25:8000/login?accessToken=${response.accessToken}&userID=${response.userID}`;
  };

  return (
    <div className="loginscreen screen">
      <Logocomponent />

      <div className="login_image">
        <figure>
          <img src={"./images/relaxing.svg"} alt={"girl relaxing svg"} />
        </figure>
      </div>

      <FacebookLogin
        appId="523256935921346"
        autoLoad={false}
        callback={responseFacebook}
        render={(renderProps) => (
          <button onClick={renderProps.onClick}>
            <i className="bx bxl-facebook-circle"></i>
            Continue with facebook
          </button>
        )}
      />
    </div>
  );
};

export default Login;
