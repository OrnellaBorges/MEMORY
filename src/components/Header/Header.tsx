import "./Header.css";
import { Link } from "react-router-dom";
import { MouseEventHandler } from "react";

type HeaderProps = {
  handleModalOpen: MouseEventHandler<HTMLButtonElement>;
};

export function Header({ handleModalOpen }: HeaderProps) {
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
          </ul>
        </nav>

        <button onClick={handleModalOpen}>MODAL TEST</button>
      </div>
    </header>
  );
}
