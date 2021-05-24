import star96 from '../resources/star96.png';
import starfilled96 from '../resources/starfilled96.png';

import '../styles/Rating.css';

const Rating = ({ rating }) => {

    var stars = [];
    for (let i = 0; i < 5; i++) {
        if(i < rating) {
            stars.push(<img
                key={i} 
                src={starfilled96} 
                alt="Filled star" 
                className="ratingStar" />);
        } else {
            stars.push(<img
                key={i} 
                src={star96} 
                alt="Unfilled star" 
                className="ratingStar" />);
        }
    }

    if (Number.isNaN(rating)) {
        return <p>No ratings.</p>
    }

    return (
        <div id="rating-div">
            {stars}
        </div>
    );
}

export default Rating;
