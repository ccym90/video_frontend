import React, { Component } from 'react';
import {Navbar, NavItem, Nav } from 'react-bootstrap';
import {Link } from 'react-router-dom';
// import { stopStreaming } from '../redux/actions';
import { connect } from 'react-redux';


class Header extends Component {

      // noStream(){
      //   let {dispatch} = this.props;
      //   console.log('props from header', this.props)
      //   dispatch(stopStreaming());
      // }

// onClick={this.noStream}

  render() {

    return (
      <Navbar fixedTop fluid inverse collapseOnSelect>
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
