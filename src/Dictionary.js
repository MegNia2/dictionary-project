import React from "react";
import "./Dictionary.css";

export default function Dictionary() {
  function handleResponse(event) {
    event.preventDefault();
    alert("Searching...");
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleResponse}>
        <input
          type="Search"
          autoFocus={true}
          placeholder="Enter a word..."
        ></input>
      </form>
    </div>
  );
}
