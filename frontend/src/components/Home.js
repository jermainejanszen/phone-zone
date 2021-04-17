import Loading from './Loading';
import Card from './Card';
import phoneImage from '../resources/logo.svg';

const Home = () => {
    return (
        <div>
            <Card
                title="iPhone 12"
                brand="Apple"
                image={phoneImage}
                seller="Ben Gane"
                price="$999.99" />
        </div>
    )
}

export default Home
