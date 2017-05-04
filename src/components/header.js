import React, { Component } from 'react';
import {Navbar, NavItem, Nav } from 'react-bootstrap';
import {Link } from 'react-router-dom';
// import { stopStreaming } from '../redux/actions';
import { connect } from 'react-redux';
import bUtils from 'react-bootstrap/lib/utils/bootstrapUtils';
import './header.css';

class Header extends Component {

      // noStream(){
      //   let {dispatch} = this.props;
      //   console.log('props from header', this.props)
      //   dispatch(stopStreaming());
      // }

// onClick={this.noStream}

  render() {

    // <nav class="navbar navbar-inverse navbar-fixed-top">
    // <div class="container-fluid">
    // <div class="navbar-header"><a class="navbar-brand" href="#">Baer</a></div>
    // <ul class="nav navbar-nav">
    // <li class="active"><a href="#home">Home</a></li>
    // <li><a href="#wander">Wander</a></li>
    // <li><a href="#contactus">Contact Us</a></li>
    // </ul>
    // <ul class="nav navbar-nav navbar-right">
    // <li><a href="#basket"><span class="glyphicon glyphicon-shopping-cart"> Basket</span></a></li>
    // </ul>
    // </div>
    // </nav>
    return (
      <Navbar bsClass="navbar" fixedTop fluid inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#"><Link to='/'>Video Uploader</Link></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#"><Link to='/Library'>Library</Link></NavItem>
            <NavItem eventKey={2} href="#"><Link to='/Record'>Record</Link></NavItem>
            <NavItem eventKey={2} href="#"><Link to='/Upload'>Upload</Link></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    )
  }
}

export default connect()(Header);
