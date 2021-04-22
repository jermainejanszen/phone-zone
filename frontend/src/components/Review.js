import React from 'react'

const Review = ({ data }) => {
    return (
        <div>
            <p>{`User: ${data.reviewer}`}</p>
            <p>{`Rating: ${data.rating}`}</p>
            <p>{`Comment: ${data.comment}`}</p>
        </div>
    )
}

export default Review
