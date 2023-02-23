import React from "react";
import { ThemeProvider } from "./DATA/ThemeContext";
import RouterPage from "./RouterPage";

function App() {
  return (
    <>
      <ThemeProvider>
        <RouterPage />
      </ThemeProvider>
    </>
  );
}

export default App;

/*


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Selamın Aleyküm
        </a>
      </header>

*/
