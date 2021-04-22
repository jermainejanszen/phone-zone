import FiveGrid from './FiveGrid';

import '../styles/Home.css';

const Home = ({ setPageState }) => {
    return (
        <div className="home">
            <div className="topFiveGrid" id="sold-out-soon">
                <h2>Sold Out Soon</h2>
                <FiveGrid className="grid" setPageState={setPageState} />
            </div>
            <div className="topFiveGrid" id="best-sellers">
                <h2>Best Sellers</h2>
                <FiveGrid className="grid" setPageState={setPageState} />
            </div>
        </div>
    )
}

export default Home
