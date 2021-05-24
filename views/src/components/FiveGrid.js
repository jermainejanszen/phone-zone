import { useState, useEffect } from 'react';
import Card from './Card';
import Loading from './Loading';

import '../styles/FiveGrid.css';

const FiveGrid = ({ source }) => {

    const [items, setItems] = useState([]);
    const [loaded, setLoaded] = useState(false);

    /**
     * Fetches items to populate the five grid
     */
    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch(source);
            const data = await response.json();
            const itemsPromise = await JSON.parse(data);
            const newItems = Object.values(itemsPromise.message);
            setItems(newItems);
            setLoaded(true);
        }
        fetchItems();
    }, [source])

    /**
     * Maps the fetched items to cards
     */
    const mapItems = () => {
        if (items.length > 0) {
            return items.map((item, index) => <Card item={item} key={index} />);
        }

        return <p id="search-no-items">No items found.</p>
    }

    /**
     * Renders five grid once loaded
     */
    return (
        <div className="fiveGrid">
            {loaded ? mapItems() : <Loading />}
        </div>
    )
}

export default FiveGrid;
