import React, { useState, Fragment } from "react";
import girl from "../images/girl.jpeg";
import "./Auth.css";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const bt1ClickHandler =()=>{
    setIsLogin(isLogin => true);
  }
  const bt2ClickHandler =()=>{
    setIsLogin(isLogin => false);
  }
  return (
    <Fragment>
      <div className="container">
        <div className="row m-5 no-gutters shadow-lg">
          <div className="col-md-6 d-none d-md-block">
            <div className="crop">
              <img src={girl} alt="girl" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6 bg-white p-5">
            <div className="container">
              <div id="divId">
                <button
                  className="btn btn-info"
                  type="submit"
                  style={{ width: "40%" }}
                  onClick={bt1ClickHandler}
                >
                  SIGN IN
                </button>
                <button
                  className="btn btn-success"
                  type="submit"
                  style={{ width: "40%", marginLeft: "75px" }}
                  onClick={bt2ClickHandler}
                >
                  SIGN UP
                </button>
              </div>
              <div className="card card-container labelTxt">
                <h3>{isLogin ? "LOGIN" : "CREATE AN ACCOUNT"}</h3>

                <form>
                  {isLogin===false && (
                  <div className="mb-3">
                    <label>First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Eg: john hanks"
                    />
                  </div>)}
                  {isLogin===false && (
                  <div className="mb-3">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Eg: john hanks"
                    />
                  </div>)}
                  {isLogin===false && (
                  <div className="mb-3">
                    <label>Mobile Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Mobile number"
                    />
                  </div>)}
                  {isLogin===false && (
                  <div className="mb-3">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="john@companyname.com"
                    />
                  </div>)}
                  {isLogin===false && (
                  <div className="mb-3">
                    <label>Username (Optional)</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="@johnhanks004"
                    />
                  </div>)}
                  {isLogin===false && (
                  <div className="mb-3">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="At least 6 characters"
                    />
                  </div>)}
                  {isLogin===true && (
                  <div className="mb-3">
                    <label>Email or Username</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="john@companyname.com"
                    />
                  </div>)}
                  {isLogin===true && (
                     <div className="mb-3">
                 <label>Password</label>
                   <input
                    type="password"
                    className="form-control"
                    placeholder="At least 6 characters"
                    />
                    </div>)}
                  <button
                    className="btn btn-success"
                    type="submit"
                    style={{ width: "100%" }}
                  >
                     {isLogin ? "LOGIN" : "CREATE AN ACCOUNT"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Auth;
