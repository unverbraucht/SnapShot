import React, { Component } from "react";
import PhotoContextProvider from "./context/PhotoContext";
import { HashRouter } from "react-router-dom";

import MainFrame from "./MainFrame";

class App extends Component {
    render() {
        return (
            <PhotoContextProvider>
                <HashRouter basename="/SnapScout">
                    <MainFrame />
                </HashRouter>
            </PhotoContextProvider>
        );
    }
}

export default App;
