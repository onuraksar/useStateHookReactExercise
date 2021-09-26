import React, { useState } from "react";

function App() {
  const currentTime = new Date().toLocaleTimeString();

  const [time, setTime] = useState(currentTime);

  console.log("here", time);

  function changeTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  setInterval(changeTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={changeTime}>Get Time</button>
    </div>
  );
}

export default App;
