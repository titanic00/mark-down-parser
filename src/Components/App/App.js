import "./App.css";
import React, { useState } from "react";
import { ParsedInput } from "../ParsedInput/ParsedInput";

function App() {
  const [text, setText] = useState("");
  // is button clicked in this component
  const [buttonIsClicked, setStyle] = useState(false);
  // is button clicked in the ParsedInput component
  const [isHidden, hiddenState] = useState(false);

  // initial style of textarea and div with button
  const style = {
    width: "30%",
    textarea: {
      height: "900px",
    }
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  // If button is pressed, we change thhe style of the elements
  const handleClick = () => {
    if (buttonIsClicked) {
      setStyle(false);
      return;
    }
    setStyle(true);
  };
  const hideInputField = () => {
    if (isHidden) {
      hiddenState(false);
      return;
    }
    hiddenState(true);
  };

  return (
    <div> 
      <div id="input-field" style={{ display: isHidden ? "none" : "block" }}> {/* // if user clicks on 
      the output fields button we hide "input-field" div  */} 
        <div className="switch">
          <span className="header">Input Field</span>
          <button className="button" onClick={handleClick}>
            <i  // change icon if on click
              className={buttonIsClicked ? "fas fa-compress" : "fa fa-compress"}
            ></i>
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
              height: buttonIsClicked ? "100px" : style.textarea.height,
              width: "30%",
            }}
          />
        </div>
      </div>
      {/* parse inputed text */}
      {buttonIsClicked && (
        <ParsedInput
          style={style}
          text={text}
          hideInput={hideInputField}
          isInputHidden={isHidden}
        />
      )}
    </div>
  );
}

export default App;
