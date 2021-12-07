import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import React from 'react';
import './App.css';
import HomeScreen from "./components/home-screen";

function App() {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact = {true}>
                        <HomeScreen/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
