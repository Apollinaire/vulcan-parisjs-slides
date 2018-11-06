import React from 'react';

class VideoLoop extends React.Component {
  render() {
    return (
      <video style={this.props.videoStyle} autoPlay loop="loop" preload="auto">
        <source src={this.props.src} type="video/mp4" />
      </video>
    );
  }
}

export default VideoLoop;