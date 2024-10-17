import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>

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
    </div>
  );
}

export default App;
