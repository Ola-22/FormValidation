import React from "react";
import LeftForm from "./LeftForm";
// import InputVal from "../LoginForm/InputVal/index";
// import * as yup from "yup";
import { Link } from "react-router-dom";

import "./style.css";
import InputVal from "./InputVal";
import Btn from "./Btn";
import Google from "./Google";
import RightForm from "./RightForm";
import LineSvg from "./LineSvg";
import singUpSchema from "./Register_validate";
import axios from "axios";

class LoginForm extends React.Component {
  state = {
    email: "",
    password: "",
    password2: "",
    isCheck: false,
    errors: {
      email: "",
      password: "",
    },
    error: "",
  };

  handleChange = (e) => {
    const { value, name, type, checked } = e.target;
    let _value = value;
    _value = type === "checkbox" ? checked : value;
    this.setState({ [name]: _value }, () => {
      const { email, password, password2, isCheck } = this.state;

      singUpSchema(name)
        .validate(
          { email, password, password2, isCheck },
          { abortEarly: false }
        )
        .then(() => {
          this.setState((prevState) => {
            const { errors } = prevState;
            return {
              errors: { ...errors, [name]: "" },
            };
          });
        })
        .catch((err) => {
          this.setState((prevState) => {
            const errors = {};
            err.inner.forEach(({ message, params }) => {
              errors[params.path] = message;
            });
            return { errors: { ...prevState.errors, [name]: errors[name] } };
          });
        });
    });
  };
  validateForm = (data) => {
    singUpSchema()
      .validate(data, { abortEarly: false })
      .then(() => {
        alert("Register successfully");
      })
      .catch((err) => {
        const errors = {};
        err.inner.forEach(({ message, params }) => {
          errors[params.path] = message;
        });
        this.setState({ errors });
      });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, password2, isCheck, error } = this.state;
    this.validateForm({ email, password, password2, isCheck });
    if (!error) {
      axios
        .post("https://fake-api-ahmed.herokuapp.com/v1/auth/signup", {
          email,
          password,
        })
        .then((res) => {
          const user = res.data;
          console.log(user);
        })
        .catch((err) => {
          console.log(err.response.data.error);
          let error = err.response.data.error;
          if (error.includes("duplicate")) {
            error = "Email already exists";
          }
          this.setState({ error });
        });
    }
  };
  render() {
    const { email, password, password2, isCheck, errors, error } = this.state;

    return (
      <div className="form_main">
        <div className="leftForm">
          <LeftForm />
        </div>
        <div className="rightForm">
          <RightForm />
          <div className="form_app">
            <form>
              <label className="email" htmlFor="email">
                Email address*
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
              <label htmlFor="password">Create password*</label>
              <InputVal
                name="password"
                id="password"
                type="password"
                onChange={this.handleChange}
                value={password}
                style={{ marginTop: "20px" }}
                error={errors.password}
                placeholder="Password"
              />
              <label htmlFor="password">Repeat password*</label>
              <InputVal
                name="password2"
                id="password2"
                type="password"
                onChange={this.handleChange}
                value={password2}
                style={{ marginTop: "20px" }}
                error={errors.password2}
                placeholder="Repeat password*"
              />
              {/* </div> */}
              <div className="check">
                <InputVal
                  type="checkbox"
                  name="isCheck"
                  id="checkbox"
                  checked={isCheck}
                  onChange={this.handleChange}
                />
                <span className="terms">
                  I agree to &nbsp; <Link to="#"> terms & conditions</Link>
                </span>
              </div>

              <Btn
                name="register"
                onClick={this.handleSubmit}
                labelTxt="Register Account"
              />
              {error && <span className="registerError">{error}</span>}
              <div className="line">
                <LineSvg className="lines" />
                <div className="line_box">Or</div>

                <LineSvg className="lines" />
              </div>
              <button className="btn2">
                <Google />
                <span className="btn_box">Register with Google</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
