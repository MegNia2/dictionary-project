import "./App.css";
import Dictionary from "./Dictionary";
import { BsBook } from "react-icons/bs";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <h1>
        <BsBook />
      </h1>

      <Dictionary />
      <footer>
        <small>
          {" "}
          Coded by{" "}
          <a
            href="https://github.com/MegNia2/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Megan Gee
          </a>
          , hosted on{" "}
          <a
            href="https://megnia-dictionary.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </small>
      </footer>
    </div>
  );
}

export default App;
