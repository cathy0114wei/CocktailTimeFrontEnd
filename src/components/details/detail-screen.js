import React, {useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import './detail.css'
import '../../vendor/fontawesome/css/all.min.css'

const DetailsScreen = () => {
    const history = useHistory();
    const cocktailName = cocktail.drinks && cocktail.drinks[0] && cocktail.drinks[0].strDrink;
    const cocktailImg = cocktail.drinks && cocktail.drinks[0] && cocktail.drinks[0].strDrinkThumb;

    return (

        <div className="container-fluid top-margin bottom-margin">
            <div className="row">
                <div className="col-sm-2"/>
                <div className="col-sm-8">
                    <br/>
                    <button className = "btn btn-outline-primary" onClick={() => {history.goBack()}}>
                        Back
                    </button>
                    <br/>
                    <h2 className="separation-padding cocktail-title">
                        {cocktailName}
                    </h2>

                    <br/>
                    <div className="text-center description-image">
                        <img src={cocktailImg}
                             width={500}/>
                    </div>
                    <br/>

                    <div>
                        <h5 className="separation-padding section-title">
                            Category
                        </h5>
                        <p>
                            {cocktail.drinks && cocktail.drinks[0] && cocktail.drinks[0].strCategory}
                        </p>
                    </div>

                    <div>
                        <h5 className="section-title">Glass Type</h5>
                        <p>
                            {cocktail.drinks && cocktail.drinks[0] && cocktail.drinks[0].strGlass}
                        </p>
                    </div>

                </div>
                <div className="col-sm-2"/>
            </div>
        </div>
    )
}
export default DetailsScreen
