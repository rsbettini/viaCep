import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import axios from 'axios';
import GithubLoaderProfile from './GithubLoaderProfile';

import './styles.css';

type FormData = {
  user: string;
};

type GitUser = {
  url: string;
  followers: string;
  location: string;
  name: string;
  avatar_url: string;
};

const GitSearchProfile = () => {
  const [gitUser, setGitUser] = useState<GitUser>();

  const [formData, setFormData] = useState<FormData>({
    user: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    axios
      .get(`https://api.github.com/users/${formData.user}`)
      .then((response) => {
        setGitUser(response.data);
      })
      .catch((error) => {
        setGitUser(undefined);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <div className="github-search-container">
        <div className="search-container">
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <h1>Encontre um perfil Github</h1>
              <input
                type="text"
                name="user"
                value={formData.user}
                className="search-input"
                placeholder="Usuário Github"
                onChange={handleChange}
              />
              <button type="submit" className="btn btn-primary search-button">
                Encontrar
              </button>
            </div>
          </form>
        </div>
      </div>

      {isLoading ? (
        <GithubLoaderProfile />
      ) : (
        gitUser && (
          <div className="github-result-container">
            <div className="img-container">
              <img src={gitUser.avatar_url} alt="user_img" />
            </div>
            <div className="info-container">
              <h2>Informações</h2>
              <ResultCard title="Perfil:" description={gitUser.url} />
              <ResultCard title="Seguidores:" description={gitUser.followers} />
              <ResultCard title="Localidade:" description={gitUser.location} />
              <ResultCard title="Nome:" description={gitUser.name} />
            </div>
          </div>
        )
      )}
    </>
  );
};

export default GitSearchProfile;
