import "./App.css";
import React, { useState } from "react";
import { ParsedInput } from "../ParsedInput/ParsedInput";

function App() {
  const [text, setText] = useState("");
  let [buttonIsClicked, setStyle] = useState(false);

  // initial style of textarea and div with button
  const style = {
    width: "30%",
    textarea: {
      height: "900px"
    },
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  // If button is pressed, we change thhe style of the elements
  const handleClick = () => {
      if(buttonIsClicked) {
        setStyle(false);
        return;
      }
    buttonIsClicked = setStyle(true);
  };

  return (
    <div id="input-field">
      <div
        id="switch"
        style={{
          width: "30%"
        }}
      >
        <button className="button" onClick={handleClick}>
          Click
        </button>
      </div>
      <div className="text-input">
        <textarea
          type="text"
          rows="5"
          cols="30"
          onChange={handleChange}
          value={text}
          // style depends on if the button is pressed
          style={{
            height: buttonIsClicked
            ? "100px"
            : style.textarea.height,
            width: "30%"
          }}
        />
      </div>
      {buttonIsClicked && <ParsedInput style={style} text={text} />}
    </div>
  );
}

export default App;
