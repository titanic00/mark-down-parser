import React from "react";
import "./ParsedInput.css";


export function ParsedInput(props) {

    return (
        <div className="text-input">
            <textarea id="text-parsed-input" type="text" value={props.text} style={{width: props.style.width}} />
        </div>
    )
}