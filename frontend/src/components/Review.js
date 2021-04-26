import Rating from './Rating';

import '../styles/Review.css';

const Review = ({ data }) => {

    return (
        <div id="review-div">
            <div id="review-details">
                <p id="review-user">{`User: ${data.reviewer}`}</p>
                <Rating rating={data.rating} />
            </div>
            <p id="review-comment">{`${data.comment}`}</p>
        </div>
    )
}

export default Review
