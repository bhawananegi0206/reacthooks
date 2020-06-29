import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from '../store/store';
import Dashboard from "./partials/dashboard/dashboardWidget.jsx";
import "../styles/common.scss"; 
import "../helpers";


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Dashboard />
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"))
