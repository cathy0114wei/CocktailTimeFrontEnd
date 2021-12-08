import React, {Fragment} from "react";
import "./index.css";

const AboutUs = () => {
    return (
        <Fragment>
            <h2 className="about-text ms-5">
                We are four women web builders.
            </h2>
            <h3 className={"about-text ms-5 mt-5"}>
                Something we all have in common?
            </h3>
            <h3 className={"about-text ms-5 mt-5"}>
            That we would like to reward ourselves with
                <span className="rose-red"> a glass of cocktail</span> after building a long day.
            </h3>

            <h1 className="about-text about-cheer"> Let's cheers.</h1>

            <ul className="about-text about-builders">
                <li>Builder 1: Xuening Wei</li>
                <li>Builder 2: Luming Yang</li>
                <li>Builder 3: Sheng Liu</li>
                <li>Builder 4: Shuwei Wang</li>

            </ul>
        </Fragment>

    );
}
export default AboutUs;