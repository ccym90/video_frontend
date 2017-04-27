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
      <div className="recordpage">
        <Header />
        <br/>
        <Grid>
          <Row>
            <Row className="videorow">
                <Col />
                  <Webcam />
                <Col />
                  <Playback />
            </Row>
            <hr/>
            <br/>
              <Row className='buttonrow'>
                  <Buttons />
              </Row>
            <br/>
            <hr/>
            <Row className="formrow">
              <Userform />
            </Row>
            <hr/>
            <br/>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Recordpage;
