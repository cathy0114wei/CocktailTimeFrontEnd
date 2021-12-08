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
        <> </>
    )
}
export default SearchScreen;