import React, { Component } from 'react';
// import { FormGroup, Form, Button, ControlLabel, FormControl, Col } from 'react-bootstrap';
// import Tooltip from 'react-tooltip-component';
import { connect } from 'react-redux';
import { saving } from '../redux/actions';
import axios from 'axios';

class Userform extends Component {


  handleSubmit = (e) => {

    console.log('click save');
    e.preventDefault();
    let {dispatch} = this.props;
    dispatch(saving());

    e.preventDefault();

    // let data = {}
    //  data.author = this.refs.authorInput.value;
    //  data.title = this.refs.titleInput.value;
    //  data.description = this.refs.descriptionInput.value;
    //  data.topics = this.refs.topicsInput.value;


    // axios.post('/upload',
    //   { title : data.title, author: data.author, description: data.description, topics: data.topics  }
    // )
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

  }

  render() {
    return (

      <form onSubmit={this.handleSubmit} className="form-horizontal">
              <div className="form-group">
                <label htmlFor="inputTitle" className="col-sm-2 control-label">Title</label>
                <div className="col-sm-10">
                  <input ref="titleInput" type="text" className="form-control" id="title" placeholder="e.g. Addition & Subtraction" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="inputAuthor3" className="col-sm-2 control-label">Name</label>
                <div className="col-sm-10">
                  <input ref="authorInput" type="text" className="form-control" id="author" placeholder="e.g. Joe Bloggs" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="inputDescription" className="col-sm-2 control-label">Subject</label>
                <div className="col-sm-10">
                  <input ref="topicsInput" type="text" className="form-control" id="Subject" placeholder="e.g. Math" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="inputTopics" className="col-sm-2 control-label">Video Description</label>
                <div className="col-sm-10">
                  <input ref="descriptionInput" type="text" className="form-control" id="description" placeholder="e.g. How to add and subtract swith positive and negative numbers" />
                </div>
              </div>

              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="submit" className="btn btn-primary" data-toggle="tooltip" title="Click to save your video into the library!">Save</button>
                </div>
              </div>
      </form>

    )
  }
}
function mapStateToProps(state, props) {
  return {
    uploadSuccess: state
  }
}
export default connect(mapStateToProps)(Userform);
