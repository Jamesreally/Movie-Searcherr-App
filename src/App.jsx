import "./App.css";
import { useState } from "react";
import SearchComponent from "./components/SearchButton";
import { ErrorBoundary } from "react-error-boundary";
import Fallback from "./components/fallback";
import {FaSearch} from "react-icons/fa";
function App() {
  const [searchInput, setSearchInput] = useState("");

  const onChangeHandler = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };
 
  return( 
    <ErrorBoundary FallbackComponent={Fallback}>
      <div className="App">
        <header className="header">
          <h1>BLOCKBUSTERS</h1>
        </header>
        <main>
          <span>
            <input
              placeholder="Search Movie......."
              onChange={onChangeHandler}
            />
          </span>
          <SearchComponent searchInput={searchInput} />
        </main>
        <footer className="footer">
          <img src=""></img>
          <h2>
            Dev {"<"}JAMIE{"/>"}
          </h2>
          <p>© 2023 Oreofe</p>
        </footer>
      </div>
    </ErrorBoundary>
  );
}

export default App;
