import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  function handleResponse(event) {
    event.preventDefault();
    alert(`You are searching for ${keyword}`);
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
