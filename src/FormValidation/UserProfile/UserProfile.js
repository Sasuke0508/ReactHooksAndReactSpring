import React, { Component } from "react";
import "./UserProfile.css";
import Swal from "sweetalert2";

export default class UserProfile extends Component {
  state = {
    values: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      passWord: "",
      passWordConfirm: "",
    },
    error: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      passWord: "",
      passWordConfirm: "",
    },
  };

  handleChangeValue = (event) => {
    let { name, value, type } = event.target;

    let newValue = { ...this.state.values, [name]: value };
    let newError = { ...this.state.error };
    if (value.trim() === "") {
      newError[name] = name + " is requied";
    } else newError[name] = "";

    if (type === "email") {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!value.toLowerCase().match(re)) {
        newError[name] = "Email is invalid!";
      } else newError[name] = "";
    }

    if (name === "passWord") {
      if (value.length < 8) {
        newError[name] = "Password must be at least 8 characters long!";
      } else newError[name] = "";
    }

    if (name === "passWordConfirm") {
      if (newValue["passWord"] === value) {
        newError[name] = "";
      } else {
        newError[name] = "Password confirm is incorrect!";
      }
    }

    this.setState(
      {
        values: newValue,
        error: newError,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handelSubmit = (event) => {
    // Cản trình duyệt submit reload trang
    event.preventDefault();
    let profileContent = "";
    let errorContent = "";
    // Xét điều kiện submit
    let { values, error } = this.state;
    let valid = true;
    for (let key in values) {
      // console.log(values[key]);
      if (values[key] === "") {
        valid = false;
        // break;
      } else {
        profileContent += `
        <p class = "text-start"> <b>${key}</b>: ${values[key]}</p>
      `;
      }
    }
    for (let key in error) {
      // console.log(error[key]);
      if (error[key] !== "") {
        valid = false;
        errorContent += `
      <p class = "text-left text-danger"> <b>${key}</b>: ${error[key]}</p>
      `;
      }
    }
    if (valid) {
      Swal.fire({
        title: "Your Profile",
        html: profileContent,
        icon: "success", // success, error, warning, question
        confirmButtonText: "Ok",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        html: errorContent,
      });
    }
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "#EEEEEE",
          position: "fixed",
          height: "100%",
          width: "100%",
        }}
      >
        <form onSubmit={this.handelSubmit}>
          <div
            className="container w-50 bg-white p-5 mt-4 mt-lg-5"
            style={{
              borderRadius: "6px",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
            }}
          >
            <h1 className="text-center mb-5">Register Form</h1>
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="group mb-lg-5">
                  <input
                    value={this.state.values.firstName}
                    type="text"
                    name="firstName"
                    required
                    placeholder=" "
                    onChange={this.handleChangeValue}
                  />
                  <span className="highlight" />
                  {/* <span className="bar" /> */}
                  <label>First name</label>
                  <span className="text-danger">
                    {this.state.error.firstName}
                  </span>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="group mb-lg-5">
                  <input
                    value={this.state.values.lastName}
                    type="text"
                    name="lastName"
                    required
                    placeholder=" "
                    onChange={this.handleChangeValue}
                  />
                  <span className="highlight" />
                  {/* <span className="bar" /> */}
                  <label>Last name</label>
                  <span className="text-danger">
                    {this.state.error.lastName}
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="group mb-lg-5">
                  <input
                    value={this.state.values.userName}
                    type="text"
                    name="userName"
                    required
                    placeholder=" "
                    onChange={this.handleChangeValue}
                  />
                  <span className="highlight" />
                  {/* <span className="bar" /> */}
                  <label>User name</label>
                  <span className="text-danger">
                    {this.state.error.userName}
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="group mb-lg-5">
                  <input
                    value={this.state.values.email}
                    type="email"
                    name="email"
                    required
                    placeholder=" "
                    onChange={this.handleChangeValue}
                  />
                  <span className="highlight" />
                  {/* <span className="bar" /> */}
                  <label>Email</label>
                  <span className="text-danger">{this.state.error.email}</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="group mb-lg-5">
                  <input
                    value={this.state.values.passWord}
                    type="password"
                    name="passWord"
                    required
                    placeholder=" "
                    onChange={this.handleChangeValue}
                  />
                  <span className="highlight" />
                  {/* <span className="bar" /> */}
                  <label>Password</label>
                  <span className="text-danger">
                    {this.state.error.passWord}
                  </span>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="group mb-lg-5">
                  <input
                    value={this.state.values.passWordConfirm}
                    type="password"
                    name="passWordConfirm"
                    required
                    placeholder=" "
                    onChange={this.handleChangeValue}
                  />
                  <span className="highlight" />
                  {/* <span className="bar" /> */}
                  <label>Confirm Password</label>
                  <span className="text-danger">
                    {this.state.error.passWordConfirm}
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 d-flex justify-content-center">
                <button
                  style={{ width: "6em", fontSize: "1.2em" }}
                  className="buttonSubmit"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
