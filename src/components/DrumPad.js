import React from 'react';

const activeStyle = {
    borderColor: 'chartreuse',
    boxShadow: '0 3px chartreuse',
    height: 77,
    marginTop: 13
};

  const inactiveStyle = {
    backgroundColor: '#1f2125',
    marginTop: 10,
    boxShadow: '5px 6px 1px #000000'
  };

class DrumPad extends React.Component {
  state = {
    active: false,
    padStyle: inactiveStyle,
    display: ''
  }

  handleKeyDown = () => {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === this.props.keyCode) {
        this.playSound()
      }
    })
  }

  updateDisplay = () => {
    this.setState({
      display: this.props.padId
    })
    document.getElementById('display').innerText = this.state.display.replace(/-/g, ' ');
  }

  componentDidMount() {
    this.handleKeyDown()
  }

  activatePad = () => {
    this.setState({
      active: true,
      padStyle: activeStyle
    })
  }

  playSound = () => {
    const sound = document.getElementById(this.props.keyTrigger);
    sound.currentTime = 0;
    sound.play();
    this.activatePad();
    setTimeout(() => this.setState({
      active: false,
      padStyle: inactiveStyle
    }), 100)
    this.updateDisplay()
  }

  render() {
    return (
      <div id={this.props.padId} onClick={this.playSound} style={this.state.padStyle} className="drum-pad">
        <audio src={this.props.clipUrl} id={this.props.keyTrigger} className="clip" />
        {this.props.keyTrigger}
      </div>
    )
  }
}

export default DrumPad;