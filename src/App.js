import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import React, {useState} from 'react';
import './App.css';
import HomeScreen from "./components/HomeScreen";
import AboutUs from "./components/AboutUs";
import SearchScreen from "./components/Search/search-screen";
import Profile from "./components/Profile/profile";

function App() {

    const [user, setUser] = useState(undefined);


    return (
        <div className="container-fluid">
            <BrowserRouter>
                <nav className='navbar navbar-expand-lg navbar-light'>
                    <Link className='navbar-brand homeScreen-cocktail homeScreen-title' to='/'> Make me a cocktail </Link>
                    <div className='collapse navbar-collapse'>
                    </div>
                    {
                        user &&
                        <>
                            {/*<Link className='btn btn-outline-none' to='/search'><i className="fa fa-2x fa-search"/></Link>*/}
                            <div>
                                <div>Welcome: {user.username}</div>
                            </div>
                            <button className='btn btn-outline-none' >Logout</button>
                        </>
                    }
                    {
                        !user &&
                        <>
                            {/*<Link className='btn btn-outline-none' to='/search'><i className="fa fa-2x fa-search"/></Link>*/}
                            {/*<Link className='btn btn-outline-none' to='/profile'><i className="fas fa-2x fa-user-circle"/></Link>*/}
                            <Link className='btn btn-outline-none' to='/login'>Login</Link>
                        </>
                    }
                </nav>
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

                    <Route path={["/profile", "/profiles/:uid"]} exact = {true}>
                        <Profile user={user} />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
