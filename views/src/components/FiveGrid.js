import { useState, useEffect } from 'react';
import Card from './Card';
import Loading from './Loading';

import '../styles/FiveGrid.css';

export const mockItems = [
    {
        "title": "Galaxy s III mini SM-G730V Verizon Cell Phone BLUE",
        "brand": "Samsung",
        "image": "/phone_images/Samsung.jpeg",
        "stock": 9,
        "seller": "5f5237a4c1beb1523fa3db73",
        "price": 56.0,
        "reviews": [{
            "reviewer": "5f5237a4c1beb1523fa3db1f",
            "rating": 3,
            "comment": "Got phone yesterday all ... pleased now!"
        }]
    },{
        "title": "Sony Ericsson TM506 Unlocked QUAD-Band 3G GSM CellPhone",
        "brand": "Sony",
        "image": "/phone_images/Sony.jpeg",
        "stock": 0,
        "seller": "5f5237a4c1beb1523fa3da68",
        "price": 173.0,
        "reviews": [],
        "disabled": ""
    },{
        "title": "Brand New Nokia 201 Pink RM-800 Factory Unlocked US Warranty GSM 850/1900",
        "brand": "Nokia",
        "image": "/phone_images/Nokia.jpeg",
        "stock": 3,
        "seller": "5f5237a4c1beb1523fa3da7e",
        "price": 299.0,
        "reviews": []
    },{
        "title": "4G Huawei Honor 6 Plus PE-UL00 FNC 3GB+16GB 5.5 inch FHD EMUI 3.0 (Android 4.4) Smart Phone Octa Core Hisilicon Kirin 925 1.8GHz 3600mAh Dual SIM FDD-LTE WCDMA GSM (White) (International Version)",
        "brand": "Huawei",
        "image": "/phone_images/Huawei.jpeg",
        "stock": 1,
        "seller": "5f5237a4c1beb1523fa3db11",
        "price": 127.95,
        "reviews": []
    },{
        "title": "Apple iPhone 3GS 16GB (White) - AT&T",
        "brand": "Apple",
        "image": "/phone_images/Apple.jpeg",
        "stock": 6,
        "seller": "5f5237a4c1beb1523fa3db1d",
        "price": 53.0,
        "reviews": [{
            "reviewer": "5f5237a4c1beb1523fa3dac0",
            "rating": 0,
            "comment": "Horrible . This was the worst iPhone I've ever bought . I couldn't even connect to MY wifi in the set up . Total waste of money ! The screen was shattered and I couldn't even get past the set up . Don't waste your time with this seller ! Just buy an iPhone 5s at Walmart on Straighttalk for $199 !"
        },{
            "reviewer": "5f5237a4c1beb1523fa3dac0",
            "rating": 1,
            "comment": "Horrible . This was the worst iPhone I've ever bought . I couldn't even connect to MY wifi in the set up . Total waste of money ! The screen was shattered and I couldn't even get past the set up . Don't waste your time with this seller ! Just buy an iPhone 5s at Walmart on Straighttalk for $199 !"
        },{
            "reviewer": "5f5237a4c1beb1523fa3dac0",
            "rating": 3,
            "comment": "Horrible . This was the worst iPhone I've ever bought . I couldn't even connect to MY wifi in the set up . Total waste of money ! The screen was shattered and I couldn't even get past the set up . Don't waste your time with this seller ! Just buy an iPhone 5s at Walmart on Straighttalk for $199 !"
        },{
            "reviewer": "5f5237a4c1beb1523fa3dac0",
            "rating": 5,
            "comment": "Horrible . This was the worst iPhone I've ever bought . I couldn't even connect to MY wifi in the set up . Total waste of money ! The screen was shattered and I couldn't even get past the set up . Don't waste your time with this seller ! Just buy an iPhone 5s at Walmart on Straighttalk for $199 !"
        }]
    }
]

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
