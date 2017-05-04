import React from 'react';
import { captureUserMedia } from '../App.js';
import { connect } from 'react-redux';
import { streaming } from '../redux/actions';
import '../pages/record/recordpage.css';

const hasGetUserMedia = !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia || navigator.msGetUserMedia);


class Webcam extends React.Component {

  componentDidMount() {
    console.log('mounted!');
    if(!hasGetUserMedia) {
      alert("Your browser cannot stream from your webcam. Please switch to Chrome or Firefox.");
      return;
    }
    this.requestUserMedia();
  }

  requestUserMedia() {
    let {dispatch} = this.props;
    console.log('requestUserMedia')
    let src = "";
    captureUserMedia((stream, options) => {
      src = window.URL.createObjectURL(stream);
      dispatch(streaming(src));
      console.log('setting state', src)
    });
  }

  render() {

    console.log("Webcam render");
    console.log(this.props);

    return (
      <div>
      <video
      className='previewVid'
      ref='video'
      autoPlay
      src={this.props.streaming.src}
      style={{width: 320, height: 240}}
      />
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    streaming: state.src
  }
}
export default connect(mapStateToProps)(Webcam);
