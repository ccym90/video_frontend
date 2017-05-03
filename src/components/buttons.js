import React from 'react';
import Tooltip from 'react-tooltip-component';
import {ButtonToolbar, button, Col, Row } from 'react-bootstrap';
import { beginRecording, finishingRecording, downloaded, onPreview } from '../redux/actions';
import { captureUserMedia } from '../App.js';
import RecordRTC from 'recordrtc';
import { connect } from 'react-redux';
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';

window.React = React;
window.SweetAlert = SweetAlert;

class Buttons extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      src: null,
      preview: null,
      download: null,
      recordVideo: null,
      downloaded: false,
      title: "",
      author: "",
      subject: [],
      description: "",
      file: "",
      alert: null

    };
  }

  startRecord = (e) => {
  captureUserMedia((stream) => {
    this.state.recordVideo = RecordRTC(stream, { type: 'video' });
    this.state.recordVideo.startRecording();
    let {dispatch} = this.props;
    dispatch(beginRecording());
    console.log('from start the current props', this.state.recordVideo)
    });
  }

  stopRecord = (e) => {
      this.state.recordVideo.stopRecording();
      let {dispatch} = this.props;
      dispatch(finishingRecording());
  }


  startPreview = (e) => {
    let buffer = this.state.recordVideo.blob;
    let url = window.URL.createObjectURL(buffer)
    console.log('blob url',url);

    let {dispatch} = this.props;
    dispatch(onPreview(url))
  }

  download = (e) => {
    let recordedblob = this.state.recordVideo.blob;
    console.log(recordedblob)
    let url = window.URL.createObjectURL(recordedblob);
    console.log('URL', url);
    let a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'test.webm';
    document.body.appendChild(a);
    a.click();
    setTimeout(function() {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 100);
    let {dispatch} = this.props;
    dispatch(downloaded());
  };

  onChange = (e) => {

    let id = e.target.id;
    let value = e.target.value;
    let newState = this.state;
    console.log('what is the new state', newState)

    switch (id) {
      case "title":
        newState.title = value
        break;
      case "author":
        newState.author = value
        break;
      case "subject":
        newState.subject = value
        break;
      case "description":
        newState.description = value
        break;

      default:
        console.log('Input ' + id + 'not found');

    }

    this.setState(newState);

  };


  handleSubmit = (e) => {
    e.preventDefault();
    let buffer = this.state.recordVideo.blob;
    let url = window.URL.createObjectURL(buffer)
    console.log('blob url',url);


    var data = new FormData();
    data.append('title', this.state.title);
    data.append('author', this.state.author);
    data.append('subject', this.state.subject);
    data.append('description', this.state.description);
    data.append('file', buffer, 'video.webm');
    // data.append('uuid', url, 'video.webm')



    const config = {  };
    var self = this;
    axios.post('/upload', data, config)
           .then(function (res) {
              console.log(res);
              self.saveSweetalert();
              }
           )
           .catch(function (err) {
             console.log(err);
             alert('Error, please try aggin');
           });

    this.title.value = '';
    this.author.value = '';
    this.subject.value = '';
    this.description.value = '';
  };

  hideAlert() {
        this.setState({
          alert: null
        });
  }

  render() {

    let saveSweetalert = (e) => {
      return(
        <SweetAlert success title="Good job!" onConfirm={this.onConfirm}>
        You clicked the button!
        </SweetAlert>
    )};

    return (
      <div>
        <div className="buttons">
        <Col xs={12} md={12} xsPush={2} mdPush={3}>
        <ButtonToolbar>
            <Tooltip title='Click here to begin recording video' position='left'>
              <button className='btn btn-success'ref='record' onClick={this.startRecord}>Start</button>
            </Tooltip>

            <Tooltip title='Click here to stop recording video' position='top'>
            <button className='btn btn-danger'ref='stop' onClick={this.stopRecord}>Stop</button>
            </Tooltip>

            <Tooltip title='Click here to playback the video you just recorded' position='bottom'>
            <button  className='btn btn-warning' ref='preview' onClick={this.startPreview}>Preview</button>
            </Tooltip>

            <Tooltip title='Click here to download your video to your computer' position='right'>
            <button  className='btn btn-info'ref='download' onClick={this.download}>Download</button>
            </Tooltip>
        </ButtonToolbar>
        </Col>
        </div>
        <div className="formrow">
          <Col xs={12} md={12}>
          <br/>
          <hr/>
            <Row>
              <form encType="multipart/form-data"className="form-horizontal" onSubmit={(e) => this.handleSubmit(e) }>
                <div className="form-group">
                  <label htmlFor="inputTitle" className="col-sm-2 control-label">Title</label>
                    <div className="col-sm-10">
                      <input type="text"
                             ref={(el) => this.title = el}
                             className="form-control"
                             id="title"
                             placeholder="e.g. Addition & Subtraction"
                             onChange={this.onChange}/>
                    </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputAuthor3" className="col-sm-2 control-label">Name</label>
                  <div className="col-sm-10">
                    <input type="text"
                           ref={(el) => this.author = el}
                           className="form-control"
                           id="author"
                           placeholder="e.g. Joe Bloggs"
                           onChange={(e) => this.onChange(e)}/>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputDescription" className="col-sm-2 control-label">Subject</label>
                  <div className="col-sm-10">
                    <input type="text"
                           ref={(el) => this.subject = el}
                           className="form-control"
                           id="subject"
                           placeholder="e.g. Math"
                           onChange={(e) => this.onChange(e)}/>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputTopics" className="col-sm-2 control-label">Video Description</label>
                  <div className="col-sm-10">
                    <input type="text"
                           ref={(el) => this.description = el}
                           className="form-control"
                           id="description"
                           placeholder="e.g. How to add and subtract with positive and negative numbers"
                           onChange={(e) => this.onChange(e)}/>
                  </div>
                </div>
                  <div className="form-group">
                  <Col xs={12} md={12} mdPush={10}>
                    <button type="submit"
                            className="btn btn-primary"
                            id="submit"> Save
                    </button>
                  </Col>
                  </div>
                </form>
                <hr/>
            </Row>
          </Col>
        </div>
     </div>
    )
  }
}

export default connect()(Buttons);
