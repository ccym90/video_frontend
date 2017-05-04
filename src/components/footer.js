import React from 'react';
import {Footer, Link } from 'react-materialize';
import './footer.css'

class Footerpanel extends React.Component {

  render() {
    return (
      <Footer className="Footer">
      <div className="footertext">
      <p className="copyrights">© 2017 Copyright Text & Copy</p>
      <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
      </div>
      </Footer>
    )
  }
}

export default Footerpanel;
