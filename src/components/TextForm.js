import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import "../App.css";

export default function TextForm(props) {
  
  return (
    <div className="containerBox" style={props.mystyle}>
      <div className="containerBox2" style={props.mystyle}>
        <h1>{props.heading}</h1>
        <label for="text" className="form-label">
          Enter here...
        </label>
        <br />
        <textarea
          style={props.mystyle}
          name="text"
          id="text"
          value={props.text}
          onChange={props.handleOnChange}
          // cols="130"
          // rows="5"
        ></textarea>
        <br />
        <button className={`btn btn-${props.btnColour} batan`} onClick={props.handleButtonLower}>
          Convert Into Lower Case
        </button>
        <button className={`btn btn-${props.btnColour} batan`} onClick={props.handleButtonUpper}>
          Convert Into Upper Case
        </button>
        <button className={`btn btn-${props.btnColour} batan`} onClick={props.handleButtonClear}>
          Clear
        </button>
        <br />
        <hr />

        <div className="info">
          <h2 className="head">Text Summary</h2>
          <p className="mb-0 badasize">
            {props.textLength} Characters {props.totalChar} Words <br />{" "}
            {props.time} minutes are required to read
          </p>
          <hr />
          <h3 className="head">Preview</h3>
          <p className="mb-0 badasize">{props.preview}</p>
        </div>
        <hr />
      </div>
    </div>
  );
}
