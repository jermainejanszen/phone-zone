import '../styles/Review.css';

const Review = ({ data }) => {
    return (
        <div id="review-div">
            <p id="review-user">{`User: ${data.reviewer}`}</p>
            <p id="review-rating">{`Rating: ${data.rating}`}</p>
            <p id="review-comment">{`Comment: ${data.comment}`}</p>
        </div>
    )
}

export default Review
