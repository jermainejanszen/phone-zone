import { useContext, useEffect, useState } from 'react';
import Card from './Card';
import Loading from './Loading';
import SearchContext from '../providers/SearchContext';

import '../styles/Search.css';

const Search = () => {

    const { search } = useContext(SearchContext);
    const [items, setItems] = useState([]);
    const [loaded, setLoaded] = useState(false);

    /**
     * Fetches items by calling the database based on the given search filters 
     */
    useEffect(() => {
        const fetchItems = async () => {
            let url = `/phone/searchOnFilters/${search.brand}/${search.price}`;
            if (search.title.length > 0) {
                url += `/${search.title}`;
            }
            const response = await fetch(url);

            try {
                const data = await response.json();
                const itemsPromise = await JSON.parse(data);
                const newItems = Object.values(itemsPromise.message);
                setItems(newItems);
                setLoaded(true);
            } catch(err) {
                console.error(err);
            }
        }
        fetchItems();
    }, [search]);

    /**
     * Maps items to cards 
     */
    const mapItems = () => {
        if (items.length > 0) {
            return items.map((item, index) => <Card item={item} key={index} />);
        }

        return <p id="search-no-items">No items found.</p>
    }

    /**
     * Renders search results
     */
    return (
        <div>
            <h1>Search Results</h1>
            <div id="search-results-div">
                {loaded ? mapItems() : <Loading />}
            </div>
        </div>
    )
}

export default Search
