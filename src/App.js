import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
import DocumentTitle from "./components/DocumentTitle";
import React from "react";

const theme = {
  dark: {
    background: "#000",
    color: "#fff",
  },
  light: {
    background: "lightblue",
    color: "red",
  },
};

export const ThemeProvider = React.createContext();

// hook
function App() {
  return (
    <ThemeProvider.Provider value={theme}>
      <div className="App">
        <Router>
          <p>
            <Link to="/"> HOME </Link>
          </p>

          <nav>
            <ul>
              <li>
                <Link to="/counter">Counter</Link>
              </li>
              <li>
                <Link to="/timer">Timer</Link>
              </li>
              <li>
                <Link to="/doctitle">Document Title</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/counter">
              <Counter />
            </Route>
            <Route path="/timer">
              <Timer />
            </Route>
            <Route path="/doctitle">
              <DocumentTitle />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider.Provider>
  );
}

export default App;
