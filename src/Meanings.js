import React from "react";
import "./Meanings.css";

export default function Meanings(props) {
  console.log(props.meanings);
  return (
    <div className="Meanings">
      <h4>{props.meanings.partOfSpeech}</h4>
      <div>
        {props.meanings.definitions.map(function (definitions, index) {
          return (
            <div>
              <div key={index}>
                <strong>{definitions.definition}</strong>
                <br />
                <em>{definitions.example}</em>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
