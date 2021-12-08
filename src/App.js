import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import React from 'react';
import './App.css';
import HomeScreen from "./components/HomeScreen";
import AboutUs from "./components/AboutUs";
import SearchScreen from "./components/Search/search-screen";

function App() {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact = {true}>
                        <HomeScreen/>
                    </Route>

                    <Route path="/about" exact = {true}>
                        <AboutUs/>
                    </Route>

                    <Route path={["/search", "/search/:cocktailName"]} exact = {true}>
                        <SearchScreen/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
