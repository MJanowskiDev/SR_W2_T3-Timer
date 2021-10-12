import React from 'react';

class TimerClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
    this.interval = 0;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <>
        <p>{`Komponent klasowy zliczył ${this.state.seconds} sekund`}</p>
      </>
    );
  }
}

export default TimerClassComponent;
