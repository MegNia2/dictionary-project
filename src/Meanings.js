import React from "react";

export default function Meanings(props) {
  console.log(props.meanings);
  return (
    <div className="Meanings">
      <h2>{props.meanings.partOfSpeech}</h2>
      <div>
        {props.meanings.definitions.map(function (definitions, index) {
          return (
            <div>
              <div key={index}>
                <p>{definitions.definition}</p>
                <em>{definitions.example}</em>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
