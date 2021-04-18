import FiveGrid from './FiveGrid';

const Home = () => {
    return (
        <div>
            <div className="topFiveGrid" id="sold-out-soon">
                <h2>Sold Out Soon</h2>
                <FiveGrid />
            </div>
            <div className="topFiveGrid" id="best-sellers">
                <h2>Best Sellers</h2>
                <FiveGrid />
            </div>
        </div>
    )
}

export default Home
