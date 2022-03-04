import React, { useState } from "react";

import "../styles/App.css";

const searchArray = [
  "Newton",
  "School",
  "Newton School",
  "React",
  "Preact",
  "Node",
  "Mongoose",
  "Angular",
  "Vue",
  "Apple",
  "Microsoft",
  "Netflix",
  "Meta"
];
const App = () => {
  for (let i = 0; i < searchArray.length; i++) {}
  function Btn() {
    const [Button, setButton] = useState();
  }

  return (
    <div id="main">
      <input type="text" onClick={App} placeholder="Data" />
      <select
        options={searchArray}
        onChange={(options) => console.log(options.input)}
      />
      <button onClick={Btn}>Search</button>
    </div>
  );
};

export default App;
