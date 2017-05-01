import React, { Component } from 'react';
import { Grid, Row, Col, button, Thumbnail } from 'react-bootstrap';
import Header from '../components/header';
import './librarypage.css';
import axios from 'axios';
import { Player } from 'video-react';

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

  render() {

      let searchResults = () => {
        return (
          <h3>Search Results</h3>
        )
      }

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

            <Row className="filteredlibrary">
              <h3>Search Results </h3>
                <div>
                {filterLibrary()}
                </div>
            </Row>

            </Row>

            <Row className="libraryResults">
              <h3>Library</h3>
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
