import { Link } from "react-router-dom";
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <ul>
                <li>
                    <Link to="/">Biography</Link>
                </li>
                <li>
                    <Link to="top">Most Famous Painting</Link>
                </li>
                <li>
                    <Link to="collection">Collection</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;