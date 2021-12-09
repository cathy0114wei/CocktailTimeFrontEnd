import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import cocktailService from "../../services/cocktail-service"
import './search.css'

const SearchScreen = () => {
    const history = useHistory();
    const {cocktailName} = useParams()
    const [searchCocktail, setSearchCocktail] = useState(cocktailName)
    const [results, setResults] = useState({drinks: []})
    useEffect(() => {
        if (cocktailName !== "undefined" && typeof cocktailName !== "undefined") {
            setSearchCocktail(cocktailName)
            findCocktailByName(cocktailName)
        }
    }, [])

    const findCocktailByName = (cocktailName) => {
        history.push(`/search/${cocktailName}`)
        cocktailService.findCocktailByName(cocktailName)
            .then((results) => {
                setResults(results)
            })
    }
    return (
        <div className="container-fluid search-top-margin search-bottom-margin">
            <div className="row">
                <div className="col-sm-2"/>
                <div className="col-sm-8">
                    <div>
                        <h2 className="rose-red"> Search Cocktail </h2>
                        <input value={searchCocktail}
                               onChange={(event) => {
                                   setSearchCocktail(event.target.value)
                               }}
                               placeholder="Enter your search here."
                               className = "form-control"/>
                        <button
                            onClick={() => {
                                findCocktailByName(searchCocktail)
                            }}
                            className = "btn btn-primary btn-block">
                            Search
                        </button>
                    </div>

                    <ul className="list-group">
                        {
                            results && results.drinks && results.drinks.map((cocktail) => {
                                //console.log(cocktail.idDrink)
                                return(
                                    <li className="list-group-item">
                                        <Link to={`/details/${cocktail.idDrink}`}>
                                            <div>
                                                {cocktail.strDrink}
                                                <img className="float-right" src={cocktail.strDrinkThumb} width={50}/>
                                            </div>

                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="col-sm-2"/>
            </div>
        </div>
    )
}
export default SearchScreen
