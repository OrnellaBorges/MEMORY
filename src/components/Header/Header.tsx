import "./Header.css";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <header className="header">
            <div className="headerDiv">
                <Link to="/">
                    <h1 className="logo">Memory</h1>
                </Link>

                <nav className="nav">
                    <ul>
                        <li>
                            <Link to="/test">Test Filter</Link>
                        </li>
                        <li>
                            <Link to="/test">Test Filter</Link>
                        </li>
                        <li>
                            <Link to="/test">Test Filter</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
