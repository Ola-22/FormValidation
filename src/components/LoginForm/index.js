import React from "react";
import LeftForm from "./LeftForm";
import JoinGame from "./JoinGame";
import InputVal from "./InputVal";
import Btn from "./Btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import * as yup from "yup";

import "./style.css";
import { Link } from "react-router-dom";
import LineSvg from "../FormRegister/LineSvg";

class LoginForm extends React.Component {
  state = {
    email: "",
    password: "",
    isCheck: false,
    isPassword: false,
    errors: {
      email: "",
      password: "",
    },
  };

  handleChange = (e) => {
    const { value, name, type, checked } = e.target;
    let _value = value;
    _value = type === "checkbox" ? checked : value;
    this.setState({ [name]: _value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const signUpSchema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().min(5).required(),
    });
    signUpSchema

      .validate({ email, password }, { abortEarly: false })
      .then((data) => {
        alert("Register successfully");
        console.log("Valid");
        console.log(data);
      })
      .catch((err) => {
        console.log("in Valid");
        console.log(err);
        console.log(err.inner);
        const errors = {};
        err.inner.forEach(({ message, params }) => {
          errors[params.path] = message;
        });
        this.setState({ errors });
      });
  };
  passwordVisiblity = () => {
    const { isPassword } = this.state;
    this.setState({ isPassword: !isPassword });
  };
  render() {
    const { email, password, isCheck, isPassword, errors } = this.state;

    return (
      <div className="form_main">
        <LeftForm />
        <div className="game">
          <JoinGame />
          <form>
            <div className="lines">
              <LineSvg />
              <div className="lines_box">Or</div>

              <LineSvg />
            </div>
            <label className="labelLog" htmlFor="email">
              Your email
            </label>
            <InputVal
              name="email"
              id="email"
              type="email"
              onChange={this.handleChange}
              value={email}
              placeholder="Write your email"
              error={errors.email}
            />
            <label className="labelLog" htmlFor="password">
              Choose a password
            </label>

            <div className="input_box">
              <div className="boxOne">
                <InputVal
                  name="password"
                  id="password"
                  type={isPassword ? "text" : "password"}
                  onChange={this.handleChange}
                  value={password}
                  style={{ marginTop: "20px" }}
                  error={errors.password}
                  placeholder="Write your password"
                />
              </div>
              <div className="boxTwo">
                <FontAwesomeIcon
                  onClick={this.passwordVisiblity}
                  className="password_icon"
                  icon={faEye}
                />
              </div>
            </div>
            <div className="check">
              <InputVal
                type="checkbox"
                name="isCheck"
                id="checkbox"
                checked={isCheck}
                onChange={this.handleChange}
              />
              <span className="remember">remember me</span>
            </div>

            <div id="button">
              <Btn
                name="register"
                onClick={this.handleSubmit}
                labelTxt="Login"
              />
            </div>
          </form>
          <p className="content_main">
            Don’t have an account? &nbsp;
            <Link to="/Register">Register</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default LoginForm;
