import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

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
      <form onSubmit={handleResponse}>
        <input
          type="Search"
          autoFocus={true}
          placeholder="Enter a word..."
          onChange={handleChange}
        ></input>
      </form>
      <Results results={results} />
    </div>
  );
}
