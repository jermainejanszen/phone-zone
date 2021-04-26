import star96 from '../resources/star96.png';
import starfilled96 from '../resources/starfilled96.png';

import '../styles/Rating.css';

const Rating = ({ rating }) => {

    const star = <img 
                    src={star96} 
                    alt="Unfilled star" 
                    className="ratingStar" />;

    const filledStar = <img 
                            src={starfilled96} 
                            alt="Filled star" 
                            className="ratingStar" />;

    var stars = [];
    for (let i = 0; i < 5; i++) {
        if(i < rating) {
            stars.push(filledStar);
        } else {
            stars.push(star);
        }
    }

    return (
        <div id="rating-div">
            {stars}
        </div>
    );
}

export default Rating;
