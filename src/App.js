import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Locations from './pages/Locations/Locations';
import About from './pages/About/About';
import Catering from './pages/Catering/Catering';
import Order from './pages/Order/Order';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Container>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/menu" exact>
              <Menu />
            </Route>
            <Route path="/locations" exact>
              <Locations />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/catering" exact>
              <Catering />
            </Route>
            <Route path="/order" exact>
              <Order />
            </Route>
          </Switch>
        </Router>
      </Container>
    </div>
  );
};

export default App;
