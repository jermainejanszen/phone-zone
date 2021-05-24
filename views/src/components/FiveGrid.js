import { useState, useEffect } from 'react';
import Card from './Card';
import Loading from './Loading';

import '../styles/FiveGrid.css';

const FiveGrid = ({ source }) => {

    const [items, setItems] = useState([]);
    const [loaded, setLoaded] = useState(false);

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

    const mapItems = () => {
        if (items.length > 0) {
            return items.map((item, index) => <Card item={item} key={index} />);
        }

        return <p id="search-no-items">No items found.</p>
    }

    return (
        <div className="fiveGrid">
            {loaded ? mapItems() : <Loading />}
        </div>
    )
}

export default FiveGrid;
