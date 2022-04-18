import React from "react";
import "./ParsedInput.css";
import { marked } from "marked";


marked.setOptions({
  breaks: true,
});
// we need these options to format inputed text
const renderer = new marked.Renderer();

export function ParsedInput(props) {

  return (
    <div id="parsed-input">
      <div className="switch second-section">
      <span className="header">Output field</span>
        <button className="button" onClick={props.hideInput}>
        <i // change icon on button's click
              className={props.isInputHidden ? "fa fa-compress" : "fas fa-compress"}
            ></i>
        </button>
      </div>
      <div
        id="text-parsed-input"
        //  style depends on if the button is pressed
        style={{
        height: props.isInputHidden
        ? props.style.textarea.height
        : "765px" }}
        // input text in the field, it will be already formated (without HTML tags)
        dangerouslySetInnerHTML={{
          __html: marked(props.text, { renderer: renderer }),
        }}
      />
    </div>
  );
}
