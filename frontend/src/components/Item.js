import { useHistory } from 'react-router-dom';

const Item = () => {

    const history = useHistory();
    const item = history.location?.state;

    return (
        <div>
            <h1>{item.title}</h1>
        </div>
    )
}

export default Item
