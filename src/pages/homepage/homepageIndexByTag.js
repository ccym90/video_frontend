import React, { Component } from 'react';


import { Grid, Row, button } from 'react-bootstrap';
import Header from '../../components/header';
import axios from 'axios';



// This component will render the search bar and videos organised by Index by Tag

class homePage extends Component {
  constructor(props) {
    super(props);

    this.state = {

      english: [],
      geography:[],
      computer:[]
    }
  }


  componentDidMount() {
    axios.get('/topic/English')
    .then((response) => {
      let arrEnglish = response.data;
      this.setState({
        english: arrEnglish
      });
      console.log("response data", arrEnglish);
    })
    .catch(function (error) {
      console.log(error);
    });

    axios.get('/topic/Geography')
    .then((response) => {
      let arrGeography = response.data;
      this.setState({
        geography: arrGeography
      });
    })
    .catch(function (error) {
      console.log(error);
    });

    axios.get('/topic/Computer')
    .then((response) => {
      let arrComputer = response.data;
      this.setState({
        computer: arrComputer
      });
    })
    .catch(function (error) {
      console.log(error);
    });


  }


  render() {

    let renderLibrary = () => {

      return(
        <div>

          <div className='row'>
            <h2>Suggestions: English</h2>

            {this.state.english.map(function(english) {
              return(
                  <div className="col-sm-6 col-md-4">

                    <div className='row'>
                      <div className="thumbnail">
                        <video controls src={english.path}/>
                        <div className="caption">
                          <h3>{english.title}</h3>
                          <p>
                            <p>Author: {english.author}</p>
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>

              );
            })}

          </div>
        </div>
      )
    }


    let renderGeo = () => {

      return(
        <div>

          <div className='row'>
            <h2>Suggestions: Geography</h2>

            {this.state.geography.map(function(geography) {
              return(
                  <div className="col-sm-6 col-md-4">

                    <div className='row'>
                      <div className="thumbnail">
                        <video controls src={geography.path}/>
                        <div className="caption">
                          <h3>{geography.title}</h3>
                          <p>
                            <p>Author: {geography.author}</p>
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>

              );
            })}

          </div>
        </div>
      )
    }

    let renderCompu = () => {

      return(
        <div>

          <div className='row'>
            <h2>Suggestions: Computer Science</h2>

            {this.state.computer.map(function(computer) {
              return(
                  <div className="col-sm-6 col-md-4">

                    <div className='row'>
                      <div className="thumbnail">
                        <video controls src={computer.path}/>
                        <div className="caption">
                          <h3>{computer.title}</h3>
                          <p>
                            <p>Author: {computer.author}</p>
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>

              );
            })}

          </div>
        </div>
      )
    }


  return (

    <div className="container">
      <div className="librarypage">
        <Header />
          <Grid>

                <br/>
                <hr/>
                  <div className='row'>
                  {renderLibrary()}
                  </div>
                  <div className='row'>
                  {renderGeo()}
                  </div>
                  <div className='row'>
                  {renderCompu()}
                  </div>

          </Grid>
      </div>
    </div>

    );

  }

}



export default homePage;
