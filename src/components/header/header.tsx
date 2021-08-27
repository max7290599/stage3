import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import './header.css';

const Header: FC = (): JSX.Element => {
  return (
    <div>
      <nav>
        <ul className="menu" data-testid="menu">
          <li data-testid="menu-item">
            <NavLink className="link" exact activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li data-testid="menu-item">
            <NavLink className="link" exact activeClassName="active" to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
