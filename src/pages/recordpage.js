import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Webcam from '../components/webcam';
import Playback from '../components/playbackvideo';
import Userform from '../components/form';
import Buttons from '../components/buttons';
import Header from '../components/header';
import './recordpage.css';


class Recordpage extends Component {
  render() {
    return (
      <div className="container">
      <div className="recordpage">
        <Header />
          <br/>
            <Grid>
              <Row className="videorow">
                <h1>Video Recorder</h1>
                <hr/>
                <p>This page allows you to create your own video. This recorder only supports Firefox 29 or later & Chrome 47 or later.
                <strong> Before saving, please ensure you fill out the form below.</strong> </p>
                <p>For more information on how to use the recorder see <a href="http://w3c.github.io/mediacapture-record/MediaRecorder.html" title="W3C MediaStream Recording API Editor's Draft">Editor's&nbsp;Draft</a>.</p>
                  <Col md={6} mdPull={6} />
                    <Webcam />
                    <br />
                  <Col  md={6} mdPull={6}/>
                    <Playback />
              </Row>
              <br/>
              <Row className='buttonrow'>
                <Buttons />
              </Row>
              <br/>
              <hr/>
              <Row className="formrow">
              
              </Row>
              <hr/>
              <br/>
            </Grid>
        </div>
      </div>
    )
  }
}

export default Recordpage;
