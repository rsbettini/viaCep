import { Link } from 'react-router-dom';

import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar main-nav">
      <Link to="/" className="nav-logo-text">
        <h1 className="text-navbar">Github API</h1>
      </Link>
    </nav>
  );
};

export default Navbar;
