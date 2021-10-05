import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./_reducers";
import ScrollToTop from "./pages/behavior/ScrollToTop";
import thunk from "redux-thunk";

ReactDOM.render(
    <Provider store={createStore(reducers, compose(applyMiddleware(thunk)))}>
        <Router>
            <ScrollToTop>
                <App />
            </ScrollToTop>
        </Router>
    </Provider>,
    document.getElementById("root")
);
