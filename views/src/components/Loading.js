import '../styles/Loading.css';
import logo from '../resources/logo.svg';

/**
 * Renders loading logo which spins as component/page is loading 
 */
const Loading = () => {
    return (
        <div className="Loading">
            <img src={logo} className="Loading-logo" alt="logo" />
            <p>Loading...</p>
        </div>
    )
}

export default Loading
