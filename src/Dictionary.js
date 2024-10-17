import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import { BsBook } from "react-icons/bs";
import { IconContext } from "react-icons";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function showDefinition(response) {
    console.log(response.data);
    setResults(response.data[0]);
  }

  function handleResponse(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(showDefinition);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <IconContext.Provider
          value={{ color: "grey", className: "global-class-name" }}
        >
          <h1>
            <BsBook />
          </h1>
        </IconContext.Provider>

        <br />
        <h3>What word do you want to look up?</h3>
        <form onSubmit={handleResponse}>
          <input
            className="Search"
            type="Search"
            autoFocus={true}
            placeholder="Search for a word..."
            onChange={handleChange}
          ></input>
        </form>
      </section>

      <Results results={results} />
    </div>
  );
}
