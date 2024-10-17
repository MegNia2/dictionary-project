import React from "react";
import Meanings from "./Meanings";
import "./Results.css";
import Phonetics from "./Phonetics";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          <div>
            {props.results.phonetics.map(function (phonetics, index) {
              return (
                <div key={index}>
                  <Phonetics phonetics={phonetics} />
                </div>
              );
            })}
          </div>
        </section>

        <div>
          {props.results.meanings.map(function (meanings, index) {
            return (
              <section key={index}>
                <Meanings meanings={meanings} />
              </section>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
