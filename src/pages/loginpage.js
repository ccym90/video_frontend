import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import Header from '../components/header';
import './loginpage.css';

class LoginPage extends Component {


  render() {

    return (
      <div className="container">
      <br/>
        <div className="recordpage">
          <Header />
            <br/>
              <div className="Login">
                <h1>Login Page</h1>
                <hr/>
                  <Col xs={6} md={6} xsPush={3} mdPush={3}>
                    <br/>
                      <div className="form-login">
                      <p className="loginwelcome">Welcome back please enter login details</p>
                      <input type="text" id="userName" className="form-control input-sm chat-input" placeholder="Username" />
                      <br/>
                      <input type="text" id="userPassword" className="form-control input-sm chat-input" placeholder="Password" />
                      <br/>
                      <div className="wrapper">
                      <span class="group-btn">
                          <a href="#" class="btn btn-primary btn-md">Login <i class="fa fa-sign-in"></i></a>
                      </span>
                      </div>
                      </div>
                  </Col>
              </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
