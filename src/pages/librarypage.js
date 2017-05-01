import React, { Component } from 'react';
import { Grid, Row, Col, button, Thumbnail } from 'react-bootstrap';
import Header from '../components/header';
import './librarypage.css';
import axios from 'axios';



class Librarypage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      library: [],
      filtered: []
    }
  }

    componentDidMount() {
    let _this = this;
    axios.get('/all')
    .then(function(response){
      let arr = response.data;
      console.log('arr', arr);
      _this.setState({
        library: arr
      });
      console.log('state', _this.state);
      console.log("response data", arr);
      console.log('library it worked', response.status); // ex: 200
    })
    .catch(function (error) {
      console.log(error);
      console.log('error getting library', error.status);
    });

  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let _this = this;
    let data = {}
    data.searchbar = this.refs.searchbar.value;
    axios.get('/search/' + data.searchbar)
    .then(function(response){
      let search = response.data;
      _this.setState({
        filtered: search
      })
      console.log('it worked the response data', response.data); // ex.: { user: 'Your User'}
      console.log('it worked the response status', response.status);
      console.log('filtered state', _this.state.filtered)

      // ex.: 200
    })
    .catch(function (error) {
      console.log(error);
      console.log('error getting video', error.status);
    });

  }


  //
  // <div className="filter">
  // <h3>Search Results</h3>
  // <div >
  //   <h4>Title: </h4>
  //   <h4> {filtered.title}</h4>
  //   <p>Author: {filtered.author}</p>
  //   <p>Subject: {filtered.topics}</p>
  //   <p>Description: {filtered.description}</p>
  //   <video controls='true' src={filtered.path}/>
  // </div>
  // <hr/>
  // </div>


  render() {

      let searchResults = () => {
        return (
          <h3>Search Results</h3>
        )
      }

      let filterLibrary = () => {
        return(
          <div className="filteredlibrary">
          {this.state.filtered.map(function(filtered) {
            return(

              <div className="row">
                  <div className="col-xs-6 col-md-6">
                  <div className="thumbnail" responsive>
                      <div className="caption">
                        <h3>{filtered.title}</h3>
                        <p>
                          <p>Author: {filtered.author}</p>
                          <p>Subject: {filtered.topics}</p>
                          <p>Description: {filtered.description}</p>
                          <video controls='true' src={filtered.path}/>
                        </p>
                        <p><a href="#" className="btn btn-primary" role="button">Play</a></p>
                      </div>
                  </div>
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
                <div src={library.path} alt="242x200" >
                <video controls src={library.path}/>
                <h4>Title:</h4>
                <h4> {library.title}</h4>
                <p>Author: {library.author}</p>
                <p>Subject: {library.topics}</p>
                <p>Description: {library.description}</p>
                </div>
              );
            })}
          </div>
        )
      }
      // <Button bsStyle="default" block onClick={this.play}>Play</Button>

    return (
      <div className="container">
      <div className="librarypage">
        <Header />
          <Grid>
          <Row className="videorow">
            <h1>Video Library</h1>
            <hr/>
            <p> Type in the search bar to find a video from the library. Search by topic, author, or any keyword.</p>
              <Row className="search">
                <div className="col-sm-10">
                  <input ref="searchbar" type="text" className="searchbar" id="searchbar" placeholder="Search Library..."/>
                  <button className="btn btn-info" id="sbtn" onClick={this.handleSubmit}>
                  <span className="glyphicon glyphicon-search" aria-hidden="true" />
                  </button>
                </div>
              <br/>
              <hr/>
            <Row className="searchResults">
            <div>
            {filterLibrary()}
            </div>
            </Row>
            </Row>
            <h3>Library</h3>
              <Grid>
                  <Row className="thumbnails">
                  <Col xs={6} md={4}>
                  <div>
                  {renderLibrary()}
                  </div>
                  </Col>
                  </Row>
              </Grid>
              <hr/>
          </Row>
          </Grid>
      </div>
      </div>
    );
  }
}

export default Librarypage;
