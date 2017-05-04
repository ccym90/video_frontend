import React, { Component } from 'react';
import { Grid, Row, button } from 'react-bootstrap';
import Header from '../components/header';
import './librarypage.css';
import axios from 'axios';
// import uuid from 'uuid';
// import { Player } from 'video-react';
// const SweetAlert = require('react-bootstrap-sweetalert');

class Librarypage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      library: [],
      filtered: []
    }
  }

  componentDidMount() {
    axios.get('/all')
    .then((response) => {
      let arr = response.data;
      console.log('arr', arr);
      this.setState({
        library: arr
      });
      console.log("response data", arr);
      console.log('library it worked', response.status); // ex: 200
    })
    .catch(function (error) {
      console.log(error);
      console.log('error getting library', error.status);
    });

  }


  handleClick = (e) => {
    e.preventDefault();
    let data = {}
    data.searchbar = this.refs.searchbar.value;
    axios.get('/search/' + data.searchbar)
    .then((response) => {
      let search = response.data;
      this.setState({
        filtered: search
      })

    if (search.length === 0) {

    this.readMe.innerHTML = "Sorry we didn't find any relevant videos to your search"
    } else {
    this.readMe.innerHTML = "Search results"
    }
      console.log('it worked the response data', response.data); // ex.: { user: 'Your User'}
      console.log('it worked the response status', response.status);
      console.log('filtered state', this.state.filtered)

    })
    .catch(function (error) {
      console.log(error);
      console.log('error getting video', error.status);
    });
  }

  render() {

      let filterLibrary = () => {
        return(
          <div>
          {this.state.filtered.map(function(filtered) {
            return(
              <div className="row" >
                <div className="col-xs-6 col-md-6" id='card'>
                  <div>
                      <div className="caption">
                        <h3>{filtered.title}</h3>
                        <p>
                          <p>Author: {filtered.author}</p>
                          <p>Subject: {filtered.topics}</p>
                          <p>Description: {filtered.description}</p>
                        </p>
                      </div>
                  </div>
                </div>
                <div className="col-xs-6 col-md-6" id='card'>
                  <video  controls='true' src={filtered.path}/>
                </div>
              </div>
            );
          })}
          </div>
        )
      }



      let renderLibrary = () => {
        return(
          <div>
            {this.state.library.map(function(library) {
              return(
                <div className="row" >
                  <div className="col-xs-6 col-md-6" id='card'>
                    <div>
                        <div className="caption">
                          <h3>{library.title}</h3>
                          <p>
                            <p>Author: {library.author}</p>
                            <p>Subject: {library.topics}</p>
                            <p>Description: {library.description}</p>
                          </p>
                        </div>
                    </div>
                  </div>
                  <div className="col-xs-6 col-md-6" id='card'>
                    <video  controls='true' src={library.path}/>
                  </div>
                </div>
              );
            })}
          </div>
        )
      }

    return (
      <div className="container">
      <div className="librarypage">
        <Header />
          <Grid>
          <Row className="videorow">
            <h1>Video Library</h1>
            <hr/>
            <h4> Type in the search bar to find a video from the library. Search by topic, author, or any keyword.</h4>
            <Row className="search">
            <br/>
            <Row className="filteredlibrary">
            <div className="col-sm-12">
            <div id="custom-search-input">
            <div className="input-group col-md-12">
            <input 	ref="searchbar"
                          type="text"
                          className="form-control input-lg"
                          id="noShow"
                          placeholder="Search Library..."
                          />
            <span className="input-group-btn">
            <button type="button"
                      className="btn btn-danger deleteButton"
                      onClick={this.handleClick}>
            <span className="glyphicon glyphicon-search" aria-hidden="true" />
            </button>
            </span>
            </div>
            </div>
            </div>
            <br/>
            <hr/>
            <br/>
            <h3 ref={(el) => this.readMe = el}  dangerouslySetInnerHTML={{ __html: "" }}></h3>
            <div>
            {filterLibrary()}
            </div>
            </Row>
            </Row>
            <br/>
            <hr/>
            <Row className="libraryResults">
              <h2><strong>Library</strong></h2>
              <br/>
                <div>
                {renderLibrary()}
                </div>
            </Row>
            <hr/>
          </Row>
          </Grid>
      </div>
      </div>
    );
  }
}

export default Librarypage;
