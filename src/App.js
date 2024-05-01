import { useState } from 'react';
import './App.css';

let time = new Date().toLocaleTimeString();
let intervalId;

function App() {
  const [currTime, setCurrTime] = useState('00:00:00');
  const [resetDisabled, setResetDisabled] = useState(true);

  function StartOnClick(){
    if (document.getElementById("start").innerHTML == "Start"){
      document.getElementById("start").innerHTML = "Pause";
      intervalId = setInterval(updateTime, 1000);
      setResetDisabled(true);
    }
    else if (document.getElementById("start").innerHTML == "Pause"){
      document.getElementById("start").innerHTML = "Resume";
      clearInterval(intervalId);
      setResetDisabled(false);
    }
    else {
      document.getElementById("start").innerHTML = "Pause";
      intervalId = setInterval(updateTime, 1000);
      setResetDisabled(true);
    }
  }

  function ResetOnClick() {
    clearInterval(intervalId);
    document.getElementById("start").innerHTML = "Start";
    setCurrTime("00:00:00");
    setResetDisabled(true);
  }

  const updateTime = () => {
    setCurrTime(new Date().toLocaleTimeString());
  }

  return (
    <div className="App">
      <div className="Box">
        <h1>{currTime}</h1>
        <div>
          <button onClick={StartOnClick} id ="start" className="button start">Start</button>
          <button onClick={ResetOnClick} id ="reset" className="button reset" disabled={resetDisabled}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
