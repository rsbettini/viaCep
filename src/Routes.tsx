import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import GithubSearchProfile from 'pages/GithubSearchProfile';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/profile">
        <GithubSearchProfile />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
