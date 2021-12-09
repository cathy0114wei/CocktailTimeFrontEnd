import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import reviewService from "../../services/review-service";
import './detail.css';


const ReviewList = ({cocktailId, user, cocktailName, cocktailImg}) => {
    const [review, setReview] = useState([])
    const [myReview, setMyReview] = useState({})
    useEffect(() => {
        findReviewsForCocktail()
    }, [cocktailId])

    const findReviewsForCocktail = () => {
        reviewService.findReviewsForCocktail(cocktailId)
            .then((data) => {
                setReview(data)
            })
    }

    const submitHandler = () => {
        reviewService.createReviewForCocktail(cocktailId, myReview.textArea, user.username, cocktailName, cocktailImg, user._id)
            .then(res => console.log(res))

        setReview(review => [...review, myReview])
    }

}
export default ReviewList