import React, { useState } from "react";

function MyNumber() {
  const [number, setNumber] = useState(1000);
  return (
    <div>
      <div>{number}</div>

      <div>
        <button onClick={() => setNumber(number - 1)}></button>
        <button onClick={() => setNumber(number + 1)}></button>
      </div>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <MyNumber />
    </div>
  );
}

export default App;
