import Review from './Review';

import '../styles/Reviews.css';

const Reviews = ({ reviews }) => {

    // TODO: Load 3 at a time

    return (
        <div id="reviews-div">
            <h1 id="reviews-heading">Reviews</h1>
            <div>
                {reviews.map(value => <Review data={value} />)}
            </div>
        </div>
    )
}

export default Reviews
