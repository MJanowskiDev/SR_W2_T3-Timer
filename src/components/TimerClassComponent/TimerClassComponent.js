import React from 'react';

class TimerClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
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
