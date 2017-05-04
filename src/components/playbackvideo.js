import React, { Component } from 'react';
import { preview } from '../redux/actions';
import { connect } from 'react-redux';
import '../pages/record/recordpage.css';

class Playback extends Component {

  render() {
    return (

      <div>
        <video
        autoPlay
        className='previewVid'
        controls
        ref='playbackVideo'
        src={this.props.preview.preview}
        style={{width: 320, height: 240}}
        controls
        />
      </div>
    )
  }
}
function mapStateToProps(state, props) {
  return {
    preview: state.preview
  }
}
export default connect(mapStateToProps)(Playback);
