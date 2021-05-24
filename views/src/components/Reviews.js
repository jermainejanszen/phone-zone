import { useState } from 'react';
import Review from './Review';

import '../styles/Reviews.css';

const Reviews = ({ reviews }) => {

    const hasReviews = reviews.length > 0;
    const [ reviewsShown, setReviewsShown ] = useState(Math.min(3, reviews.length));

    const getReviewsView = () => {
        const result = [];
        for(let i = 0; i < reviewsShown; i++) {
            result.push(<Review data={reviews[i]} key={i} />)
        }
        return result;
    }

    const showMoreHandler = () => {
        if (reviews.length !== reviewsShown) {
            setReviewsShown(Math.min(reviews.length, reviewsShown + 3));
        }
    }

    return (
        <div id="reviews-div">
            <h1 id="reviews-heading">Reviews</h1>
            <div>
                {hasReviews ? 
                    getReviewsView() : 
                    <p>There are no reviews yet for this item.</p> }
            </div>
            {reviews.length === reviewsShown ?
                <></> :
                <button id="reviews-showmore" onClick={showMoreHandler}>
                    Show more
                </button>
            }
        </div>
    );
}

export default Reviews
