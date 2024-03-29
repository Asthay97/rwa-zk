import Home from "../home/home";
import Register from "../register/register";
import "./login.css"
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

export default function Login(){
const [home,setHome]=useState(false)
const [register,setRegister]=useState(false)

if(home){
  return (
    <Home/>
  )
}

if(register){
  return (
    <Register/>
  )
}
function function1(){

  $(function () {
    $('.input-block input').each(function () {
      const _this = $(this);
      _this.on('input', (e) => {
        _this.val() !== ''
          ? _this.addclass('fill')
          : _this.removeclass('fill');
      });
    });
  });
}

return (
<div>
  <head>
    <title>assetguard | Login</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="./login.css" />
  </head>
  
    <nav className="navbar navbar-expand-md mx-4 my-3">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">
          <img src="/upi_logo.png" alt="..." />
        </a>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav me-auto mb-2 mb-md-0 w-100 justify-content-end">
          <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
          </li>
           
            <li className="nav-item">
              <a className="nav-link" href="#"> Learn </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"> Blog </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"> My Account </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div className="container-fluid w-auto login-container p-0 mx-4">
      <div className="row h-100">
        <div
          className="col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-start"
        >
          <div className="login-form-content px-0 px-md-5">
            <div className="login-header-details">
              <h3 className="mb-0 text-uppercase text-white">login</h3>
              <p className="mb-4 grey-clr fw-light">
                Purchase Tokens, Access Your Payment History, And Manage Your
                Investments.
              </p>
            </div>

            <div
              className="account-verified-details d-flex flex-column align-items-center justify-content-center"
            >
              <div
                className="bg-success verified-tick d-flex align-items-center justify-content-center rounded-circle mb-1"
              >
                <i className="fa fa-check text-white"></i>
              </div>
              <h4 className="mb-0 text-uppercase text-white mb-1">
                account verified
              </h4>
              <p className="mb-0 grey-clr fw-light text-center">
                You have successfully activated your account!
              </p>
              <p className="mb-4 grey-clr fw-light">
                Please <span className="fw-400">Login</span>
              </p>
            </div>

            <form action="" className="login-form">
              <div className="input-block mb-2">
                <input id="email" type="email" />
                <label for="email" className="fw-500">Email ID</label>
              </div>
              <div className="input-block">
                <input id="password" type="password" />
                <label for="password" className="fw-500">Password</label>
              </div>
              <div
                className="d-flex align-items-center justify-content-between my-4"
              >
                <button
                  type="button"
                  className="btn btn-link p-0 grey-clr forgot-pswd-btn fs-15"
                >
                  Forgot Password?
                </button>
                <button type="button" className="btn text-uppercase assetguard-btn">
                  login
                </button>
              </div>
            </form>
            <h6 className="text-white mt-4 mb-0 fs-15">DON’T HAVE AN ACCOUNT?</h6>
            <button
              type="button"
              className="btn btn-link p-0 grey-clr register-btn-link"
              //onClick={()=>setRegister(true)}
            >
              <Link to="/register"> <h5 className="grey-clr">REGISTER NOW</h5></Link>
            
            </button>
          </div>
        </div>
        <div
          className="col-12 col-md-6 d-flex align-items-center justify-content-end img-col"
        >
          <div className="img-content px-5 me-5">
            <div className="home-analytics-card">
              <img
                src="/home1.jpg"
                alt="..."
                className="w-100 h-100 home-img"
              />
              <div className="footer">
                <div
                  className="top-content bg-white d-flex justify-content-between p-2 m-2 mb-0"
                >
                  <div
                    className="content-left d-flex flex-column justify-content-center"
                  >
                    <h6 className="black-clr mb-0 fs-14 fw-semibold">
                      12507 Astor Ave
                    </h6>
                    <p className="sec-clr mb-0 fs-11 fw-500">
                      Cleveland, Ohio 44135
                    </p>
                  </div>
                  <div className="content-right fs-12 d-flex align-items-center">
                    <div className="d-flex flex-column align-items-end me-2">
                      <span className="irr-percent fw-500 pri-clr"> 19.9% </span>
                      <span className="coc-percent sec-clr"> 9.9% </span>
                    </div>
                    <div className="d-flex flex-column align-items-end">
                      <span className="fw-500 pri-clr"> IRR </span>
                      <span className="sec-clr"> CoC </span>
                    </div>
                  </div>
                </div>
                <div
                  className="bottom-content bg-black d-flex justify-content-between p-2 m-2 mt-0"
                >
                  <div className="content-left d-flex align-items-center">
                    <div className="d-flex flex-column grey-clr me-1">
                      <span className="fw-500 fs-12"> $52.86 </span>
                      <span className="fw-100 fs-10"> MINIMUM </span>
                    </div>
                    <div
                      className="bg-success increased-percent d-flex align-items-center p-1"
                    >
                      <i className="fa fa-arrow-up text-white me-1"></i>
                      <span className="text-white fs-10"> 6.36% </span>
                    </div>
                  </div>
                  <div className="content-right d-flex align-items-center">
                    <div
                      className="d-flex flex-column align-items-end grey-clr me-1"
                    >
                      <span className="fw-500 fs-12"> 5,636 </span>
                      <span className="fw-100 fs-10 text-end"> TOKENS LEFT </span>
                    </div>
                    <div>
                      <img
                        src="/progress-left-stat.PNG"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

 </div>

    
) 
}