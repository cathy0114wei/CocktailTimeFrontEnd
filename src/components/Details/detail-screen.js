import React, {useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import './detail.css'
import '../../vendor/fontawesome/css/all.min.css'

const DetailsScreen = () => {
    const history = useHistory();
    const cocktailName = cocktail.drinks && cocktail.drinks[0] && cocktail.drinks[0].strDrink;
    const cocktailImg = cocktail.drinks && cocktail.drinks[0] && cocktail.drinks[0].strDrinkThumb;

    return (

        <div className="mt-2 mb-5">
            <div className="row">
                <div className="col-sm-2"/>
                <div className="col-sm-8">
                    <br/>
                    <button className = "btn btn-outline-primary" onClick={() => {history.goBack()}}>
                        Back
                    </button>
                    <br/>
                    <h2 className="pt-3 cocktail-title">
                        {cocktailName}
                    </h2>

                    <br/>
                    <div className="text-center cocktail-image">
                        <img src={cocktailImg}
                             width={500}/>
                    </div>
                    <br/>

                    <div>
                        <h5 className="pt-3 category-title">
                            Category
                        </h5>
                        <p>
                            {cocktail.drinks && cocktail.drinks[0] && cocktail.drinks[0].strCategory}
                        </p>
                    </div>

                    <div>
                        <h5 className="category-title">Glass Type</h5>
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