import React, { Component } from 'react';

import Footerpanel from '../../components/footer';

import { Grid, Row, button } from 'react-bootstrap';
import Header from '../../components/header';
import axios from 'axios';
import {Link } from 'react-router-dom';



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
            <h2>Welcome!</h2>
            <p>This is a platform created by Viviane Wu & Claire Martin, with the purpose to help teachers generate their own video materials for teaching purposes.

            You can <a href="#"><Link to='/Record'>record</Link></a> and your own content which is saved to the library. Please use a suitable microphone and headset when recording.

            You can also <a href="#"><Link to='/Upload'>upload</Link></a>  videos from your own device.

            All videos saved can be accessed in the Library. Happy Teaching!</p> <br></br>


          </div>
        </div>
      )
    }



  return (

    <div className="Container">
      <div className="librarypage">
        <Header />
          <Grid>

                <br/>
                <hr/>
                  <div className='row'>
                  {renderLibrary()}
                  </div>

          </Grid>
          <hr/>
          <br/>
      </div>
            <Footerpanel />
    </div>

    );

  }

}



export default homePage;
