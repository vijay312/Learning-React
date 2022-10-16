import React, { useState } from "react";

export default function Homepage(props) {
  const handlerOnChange = (event) => {
    //console.log("handle on chnage clicked");
    setText(event.target.value);
  };

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLowerClick = () => {
    setText(text.toLowerCase());
  };

  const handlecopyClick = () => {
    var textField = document.getElementById("myBox");
    textField.select();
    navigator.clipboard.writeText(textField.value);
  };

  const [text, setText] = useState("Please enter text here");
  // setText("ok ok");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#370736",
        }}
      >
        <div className="mb-3">
          <h3>{props.title}</h3>
          <textarea
            className="form-control"
            value={text}
            onChange={handlerOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#370736" : "white",
              color: props.mode === "dark" ? "white" : "#370736",
            }}
          ></textarea>
          <button
            type="button"
            className="btn btn-primary my-2 mx-2"
            onClick={handleUpClick}
          >
            convert to uppercase
          </button>
          <button
            type="button"
            className="btn btn-primary my-2 mx-2"
            onClick={handleLowerClick}
          >
            convert to Lowercase
          </button>
          <button
            type="button"
            className="btn btn-primary my-2 mx-2"
            onClick={handlecopyClick}
          >
            copy text
          </button>
        </div>
      </div>

      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#370736",
        }}
      >
        <h1>your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>
          It will take {0.008 * text.split(" ").length} minutes to read this
          text{" "}
        </p>
        <h3>preview</h3>
        <p>{text.length > 0 ? text : "Enter your Text to preview"}</p>
      </div>
    </>
  );
}
