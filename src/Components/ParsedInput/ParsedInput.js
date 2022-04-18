import React from "react";
import "./ParsedInput.css";
import { marked } from "marked";

marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();

export function ParsedInput(props) {
    console.log(props)

  return (
    <div id="parsed-input">
      <div className="switch second-section">
        <button className="button" onClick={props.hideInput}>
        <i
              className={props.isInputHidden ? "fa fa-compress" : "fas fa-compress"}
            ></i>
        </button>
      </div>
      <div
        id="text-parsed-input"
        style={{
        height: props.isInputHidden
        ? props.style.textarea.height
        : "765px" }}
        dangerouslySetInnerHTML={{
          __html: marked(props.text, { renderer: renderer }),
        }}
      />
    </div>
  );
}
