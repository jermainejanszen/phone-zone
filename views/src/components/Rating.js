import star96 from '../resources/star96.png';
import starfilled96 from '../resources/starfilled96.png';
import '../styles/Rating.css';

/**
 * renders ratings for items on the site 
 */
const Rating = ({ rating }) => {

    // handles case where number is NaN 
    if (Number.isNaN(rating)) {
        return <p>No ratings.</p>
    }

    var stars = [];
    for (let i = 0; i < 5; i++) {
        // if star is to be filled 
        if(i < rating) {
            stars.push(<img
                key={i} 
                src={starfilled96} 
                alt="Filled star" 
                className="ratingStar" />);
        // if star is to be empty (has already filled stars up to given rating)
        } else {
            stars.push(<img
                key={i} 
                src={star96} 
                alt="Unfilled star" 
                className="ratingStar" />);
        }
    }

    return (
        <div id="rating-div">
            {stars}
        </div>
    );
}

export default Rating;
