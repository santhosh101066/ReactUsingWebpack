import React from "react";
import Nav from "./Nav";
import Time from "./Time";
import "./App.css";
import { Provider } from "react-redux";
import store from "./react-reduct/store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Time />
        <Nav />
      </Provider>
    </div>
  );
}
export default App;
