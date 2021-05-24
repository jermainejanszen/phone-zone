import { useState, useEffect } from 'react';
import Rating from './Rating';

import '../styles/Review.css';

const Review = ({ data }) => {

    const longComment = data.comment.length > 200;
    const [showLess, setShowLess] = useState(true);
    const [reviewer, setReviewer] = useState({ firstname: "Unknown", lastname: "Reviewer" });

    /**
     * Fetches information about reviewer from the database 
     */
    useEffect(() => {
        const fetchReviewer = async () => {
            const response = await fetch(`/user/getUserInformation/${data.reviewer}`);
            try {
                const data = await response.json();
                const reviewerPromise = await JSON.parse(data);
                setReviewer(reviewerPromise.message[0]);
            } catch(err) {
                console.error(err);
            }
        }

        fetchReviewer()
    }, [data.reviewer])

    /**
     * gets the comment associated with the review
     */
    const getComment = () => {
        if(showLess && longComment) {
            return `${data.comment.substring(0, 200)}...`
        } else {
            return data.comment;
        }
    }

    /**
     * allows user to click to show more of the review if the review is longer than 200 characters
     */
    const showMoreOnClick = () => {
        setShowLess(!showLess);
    }

    /**
     * Renders review information 
     */
    return (
        <div id="review-div">
            <div id="review-details">
                <p id="review-user">{`User: ${reviewer.firstname} ${reviewer.lastname}`}</p>
                <Rating rating={data.rating} />
            </div>
            <p id="review-comment">{getComment()}</p>
            {longComment ?
            <button id="review-show-more" 
                onClick={showMoreOnClick}>
                    {showLess ? "Show more" : "Show less"}
            </button> : <></>}
        </div>
    )
}

export default Review
