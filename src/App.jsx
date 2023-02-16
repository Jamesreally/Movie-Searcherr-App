import "./App.css";
import { useState } from "react";
import SearchComponent from "./components/SearchButton";
import{ErrorBoundary} from 'react-error-boundary';
import Fallback from "../../assignment2/src/component/fallback";
function App() {
  const [searchInput, setSearchInput] = useState("");

  const [displayfilter, setDisplayfilter] = useState();
  const onChangeHandler = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
    <div className="App">
      <header className="header"><h1>BLOCKBUSTERS</h1></header>
      <main><span>
        <input
          
          placeholder="Type movie"
          onChange={onChangeHandler}
        />
        </span>

        <SearchComponent
          setDisplayfilter={setDisplayfilter}
          displayfilter={displayfilter}
          searchInput={searchInput}
        />
      </main>
    </div>
    </ErrorBoundary>  );
}

export default App;
