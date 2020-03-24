import React from "react";

import Dashboard from "./react-components/Dashboard";

import "./App.css";

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Dashboard />
            </div>
        );
    }
}

export default App;
