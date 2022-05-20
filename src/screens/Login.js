import React from "react";
// import { Link } from "react-router-dom";
import "./Login.css";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

// Components
import Logocomponent from "../components/LogoComponent";

const Login = () => {
  const responseFacebook = (response) => {
    console.log(response);
    const details = {
      access_token: response.accessToken,
      uid: response.userID,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(details),
    };

    fetch("http://142.93.115.25:8000/login/", requestOptions)
      .then((res) => res.json())
      .then((data) => console.log(data));
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
        scope= "user_birthday, user_hometown, user_location, user_gender, email, pages_show_list, pages_read_engagement, public_profile"
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
