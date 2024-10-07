import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function showDefinition(response) {
    console.log(response.data);
  }

  function handleResponse(event) {
    event.preventDefault();
    alert(`You are searching for ${keyword}`);

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
    </div>
  );
}
