import '../styles/Loading.css';
import logo from '../resources/logo.svg';

const Loading = () => {
    return (
        <div className="Loading">
            <img src={logo} className="Loading-logo" alt="logo" />
            <p>Loading...</p>
        </div>
    )
}

export default Loading
