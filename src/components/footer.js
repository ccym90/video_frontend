import React from 'react';
import {Footer, Link } from 'react-materialize';
import './footer.css'

class Footerpanel extends React.Component {

  render() {
    return (
      <Footer className="Footer">
      <p className="copyrights">© 2017 Copyright Text & Copy</p>
      </Footer>
    )
  }
}

export default Footerpanel;
