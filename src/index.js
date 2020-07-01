"use strict";

import "./scss/app.scss";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import GitHubSearch from "./js/views/githubSearch";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./js/redux/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <div className="container">
        <GitHubSearch />
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
