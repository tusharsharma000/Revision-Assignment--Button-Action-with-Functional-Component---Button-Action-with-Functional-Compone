import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [st, setSt] = useState(false);

  const handlclick = () => {
    setSt(true);
  };
  return (
    <div id="main">
      {st ? (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      ) : (
        ""
      )}

      <button id="click" onClick={handlclick}>
        click
      </button>
    </div>
  );
}

export default App;
