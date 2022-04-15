import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

// Components
import Logocomponent from "../components/LogoComponent";

const Login = () => {
  const responseFacebook = (response) => {
    localStorage.setItem("user_details", JSON.stringify(response));
  };

  return (
    <div className="loginscreen screen">
      <Logocomponent />

      <div className="login_image">
        <figure>
          <img src={"./images/relaxing.svg"} alt={"girl relaxing svg"} />
        </figure>
      </div>

      <Link to={"/influencer-info"} className="login_button">
        <FacebookLogin
          appId="523256935921346"
          autoLoad={false}
          callback={responseFacebook}
          render={(renderProps) => (
            <button onClick={renderProps.onClick}>Continue with facebook</button>
          )}
        />
      </Link>
    </div>
  );
};

export default Login;
