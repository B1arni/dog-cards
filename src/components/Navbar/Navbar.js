import { Link, Outlet } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <>
        <header className="navbar">
        <Link className='navbar-item' to='/'>Characters</Link>
        <Link className='navbar-item' to='/locations'>Locations</Link>
        <Link className="navbar-item" to='/episodes'>Episodes</Link>
        <Link className="navbar-item" to='/todo'>Todo</Link>
        </header>
        <Outlet />
        </>
    )
}

export default Navbar;