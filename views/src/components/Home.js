import FiveGrid from './FiveGrid';

import '../styles/Home.css';

/**
 * Renders home page with top five sold out soon items and top five best sellers 
 */
const Home = () => {
    return (
        <div className="home">
            <div className="topFiveGrid" id="sold-out-soon">
                <h2>Sold Out Soon</h2>
                <FiveGrid className="grid" source="/phone/soldOutSoon" />
            </div>
            <div className="topFiveGrid" id="best-sellers">
                <h2>Best Sellers</h2> 
                <FiveGrid className="grid" source="/phone/bestSellers" />
            </div>
        </div>
    )
}

export default Home
