import Review from './Review';

import '../styles/Reviews.css';

const Reviews = ({ reviews }) => {

    const hasReviews = reviews.length > 0;

    // TODO: Load 3 at a time

    return (
        <div id="reviews-div">
            <h1 id="reviews-heading">Reviews</h1>
            <div>
                {hasReviews ? 
                    reviews.map((value, index) => <Review data={value} key={index} />) : 
                    <p>There are no reviews yet for this item.</p> }
            </div>
        </div>
    );
}

export default Reviews
