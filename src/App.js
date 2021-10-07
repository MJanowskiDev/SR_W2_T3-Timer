import './App.css';
import TimerFunctionalComponent from './components/TimerFunctionalComponent/TimerFunctionalComponent';
import TimerClassComponent from './components/TimerClassComponent/TimerClassComponent';
function App() {
  return (
    <div className='App'>
      <h1>Timer App</h1>
      <TimerFunctionalComponent />
      <TimerClassComponent />
    </div>
  );
}

export default App;
