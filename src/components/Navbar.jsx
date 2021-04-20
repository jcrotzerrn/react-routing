import { Link } from 'react-router-dom';
import logo from './logo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <img src={logo} alt="logo" width="80" height="60" className="d-inline-block align-text-top"></img>
                    <Link to="/" className="btn btn-secondary">Home</Link>
                    <Link to="/films" className="btn btn-secondary">Films</Link>
                    <Link to="/people" className="btn btn-secondary">People</Link>
            </div>
        </nav>
    );
}




export default Navbar;