import React, { useState, ChangeEvent, FormEvent } from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import logo from "../../Images/union.png";
import heading from "../../Images/lendsqr.png";
import logimage from "../../Images/logimage.png";

type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log("Form submitted!");
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="pagetop">
      <div className="lendicon">
        <img src={logo} alt="lendsqr icon" className="img1" />
        <img src={heading} alt="lendsqr title" className="img2" />
      </div>
      <img src={logimage} alt="" className="logimage" />
      <form onSubmit={handleSubmit} className="formstyle">
        <h1 className="topmessage">Welcome!</h1>
        <p className="subtext">Enter details to login </p>

        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={handleEmailChange}
          autoComplete="off"
          className="emailinput"
          required
        />

        <div className="password-input">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            placeholder="Password"
            onChange={handlePasswordChange}
            autoComplete="off"
            className="passinput"
            required
          />
          <button type="button" className="magic" onClick={handleShowPassword}>
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <a href="/forgot-password" className="mmnemosyne">
          FORGOT PASSWORD?
        </a>
        <Link to="/Dashboard">
          <button type="submit" className="loginbutton">
            <span className="buttontext">LOG IN</span>
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
