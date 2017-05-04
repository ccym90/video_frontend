import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import Header from '../components/header';
import './uploadPage.css';
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';

class uploadPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: "",
      author: "",
      subject: "",
      description: "",
      file: "",
      uuid: "",
      alert: true
    };
  }

  onChange = (e) => {

    let id = e.target.id;
    let value = e.target.value;
    let newState = this.state;

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
      case "file":
        newState.file = e.target.files[0]
        break;
      case "uuid":
        newState.uuid = value
        break;
      default:
        console.log('Input ' + id + 'not found');
    }

    this.setState(newState);
  };

  handleSubmit = (e) => {
    e.preventDefault();

    var data = new FormData();
    data.append('title', this.state.title);
    data.append('author', this.state.author);
    data.append('subject', this.state.subject);
    data.append('description', this.state.description);
    data.append('file', this.state.file, 'video.webm');
    data.append('uuid', this.state.uuid, 'video.webm')

    const config = {  };
    axios.post('/upload', data, config)
           .then(function (res) {
              console.log(res);
             alert('Congrats, your video has been uploaded');
           })
           .catch(function (err) {
             console.log(err);
             alert('Sorry, please fill out all the form');
           });
  };

  hideAlert() {
    this.setState({
      alert: null
    });
  }

  render() {
    return (

      <div className="Container">
      {this.state.alert &&
        <SweetAlert
        input
        required
        inputType="password"
        title="Enter Password"
        validationMsg="You must enter your password!"
        onConfirm={ inputValue => {
          let passwordkey = "solarleap"
          if (inputValue === passwordkey){
            {this.hideAlert()}
            console.log('the password');
          } else {
            {{this.validationMsg="You must enter your password!"}}
            console.log(inputValue);
        }}}
        />
      }
      />
      <div className="uploadpage">
        <Header />
          <br/>
          <Grid>
              <Row className="formrow">
                <h1>Upload Page</h1>
                <hr/>
                <p>Here you can upload a video from your mobile, or computer and save to the video library.
                <strong> Before saving, please ensure you fill out the form below.</strong> </p>
                <p>Information to see how to use the uploader watch <a href="http://w3c.github.io/mediacapture-record/MediaRecorder.html" title="How to Upload">How To Upload Video</a>.</p>
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
                <label htmlFor="inputTopics" className="col-sm-2 control-label">
                  Choose A File</label>
                <div className="col-sm-10">
                    <label htmlFor="file"> </label>
                    <input name='file'
                           ref={(el) => this.file = el}
                           type="file"
                           id="file"
                           onChange={ (e) => this.onChange(e) }/>
                    <br />
                </div>
              </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit"
                            className="btn btn-primary"
                            id="submit"> Upload</button>
                  </div>
                </div>
              </form>
              </Row>
              <hr/>
              <br/>
          </Grid>
      </div>
      </div>
    )
  }
}
export default uploadPage;
