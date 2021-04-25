import Review from './Review';

const Reviews = ({ reviews }) => {
    return (
        <div>
            <p>Reviews</p>
            <div>
                {reviews.map(value => <Review data={value} />)}
            </div>
        </div>
    )
}

export default Reviews
