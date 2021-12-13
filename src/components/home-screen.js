import React from 'react'
import {Link} from "react-router-dom";
import "./home-screen.css";
// import 'font-awesome/css/font-awesome.min.css'
import NavigationBar from "./NavigationBar";
import FavoriteList from "./FavoriteList/FavoriteList";


const HomeScreen = () => {

    return (
        <div>
            <div className="container-fluid">
                <div className="row img-ys">
                    <div className="col-3">
                        <NavigationBar />
                    </div>
                    <div className='col-3 words-part1'>
                        <h1 className="home-text-1 homeScreen-title">MORE THAN JUST A DRINK</h1>
                        <h3 className="home-text-2 homeScreen-subTitle">It’s finally that time of day.</h3>
                    </div>

                    <div className="col-3">
                        <div>
                            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1945117329-1-1548786871.jpg?crop=0.447xw:1.00xh;0.330xw,0&resize=980:*"
                                 className="img-fluid" alt=""/>
                        </div>
                    </div>
                    <div className="col-3">
                        <FavoriteList/>
                    </div>
                </div>

                <div className="row img-ys2">
                    <div className="col-6">
                        <div>
                            <img src="https://www.wine4food.com/wp-content/uploads/2018/12/bigstock-203710990.jpg"
                                 className="second-img" alt=""/>
                        </div>
                    </div>
                    <div className="col-6 second-paragraph">
                        <h1 className="homeScreen-title">BEYOND THE GLASS</h1>
                        <p className="homeScreen-subTitle">Whatever the scenario, whatever the vibe, whatever our tastes are, there’s a drink for that.</p>
                        <p className="homeScreen-subTitle">Make a cocktail for you and your beloved.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default HomeScreen
