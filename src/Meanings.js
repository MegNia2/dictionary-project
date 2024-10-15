import React from "react";
import "./Meanings.css";
import Example from "./Example";

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
                <p className="definition">{definitions.definition}</p>
                <Example example={definitions.example} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
