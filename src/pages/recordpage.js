import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Webcam from '../components/webcam';
import Playback from '../components/playbackvideo';
import Userform from '../components/form';
import Buttons from '../components/buttons';
import Header from '../components/header';
import './recordpage.css';
import SweetAlert from 'react-bootstrap-sweetalert';

window.React = React;
window.SweetAlert = SweetAlert;

class Recordpage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      alert: true
    };
  }

  hideAlert() {
    console.log('Hiding alert...');
    this.setState({
      alert: null
    });
  }

  render() {
    return (
      <div className="container">
      <div>
      {this.state.alert ? <SweetAlert
      input="0000"
      required
      inputType="password"
      title="Enter Password"
      validationMsg="You must enter your password!"
      onConfirm={() => this.hideAlert()}
      /> : null}
      </div>
      <br/>
      <div className="recordpage">
        <Header />
          <br/>
            <Grid>
              <Row className="instructions">
                <h1>Video Recorder</h1>
                <hr/>
                <p>This page allows you to create your own video. This recorder only supports Firefox 29 or later & Chrome 47 or later.
                <strong> Before saving, please ensure you fill out the form below.</strong> </p>
                <p>For more information on how to use the recorder see <a href="http://w3c.github.io/mediacapture-record/MediaRecorder.html" title="W3C MediaStream Recording API Editor's Draft">Editor's&nbsp;Draft</a>.</p>
              </Row>
              <Row className="videorow" >
                <div className='webcam'>
                  <Col xs={6} md={6}>
                    <Webcam />
                  </Col>
                </div>
                <div className='playback'>
                  <Col xs={6} md={6}>
                    <Playback />
                  </Col>
                </div>
              </Row>
              <br/>
              <hr/>
              <Row className='buttonrow'>
                <Buttons />
              </Row>
              <br/>
            </Grid>
        </div>
      </div>
    )
  }
}

export default Recordpage;
