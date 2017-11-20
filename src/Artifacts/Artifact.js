import React, { Component } from 'react';

class Artifact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEffect: false
    };
  }

  mouseEnter = () => {
    this.setState({ showEffect: true });
  }

  mouseLeave = () => {
    this.setState({ showEffect: false });
  }

  render() {

    let IMG_URL_PART = 'http://heroes.thelazy.net/wiki/images/';

    let effect = this.state.showEffect ? <div style={{ position: "absolute", maxWidth: "300px", backgroundColor: "white", border: "1px solid black"  }}>{this.props.artifact.effect}</div> : '';

    return (
      <div style={{ display: "inline-block", width: "70px", height: "70px"  }} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        <img src={IMG_URL_PART + this.props.artifact.image_path} />
        {effect}
      </div>
    );
  }
}

export default Artifact;
