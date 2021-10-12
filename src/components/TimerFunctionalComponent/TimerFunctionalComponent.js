import { useState, useEffect } from 'react';

const TimerFunctionalComponent = (props) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevState) => prevState + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>{`Komponent funkcyjny zliczył ${seconds} sekund`}</p>;
};

export default TimerFunctionalComponent;
