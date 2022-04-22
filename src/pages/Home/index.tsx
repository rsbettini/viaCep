import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-container-title">Desafio Github API</h1>
      <p className="home-container-description">
        Bootcamp Spring React - DevSuperior
      </p>
      <Link to="/profile">
        <button className="btn btn-primary btn-lg start-button">Começar</button>
      </Link>
    </div>
  );
};

export default Home;
