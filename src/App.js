import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

const App = () => (
  <div className="App">
    <HashRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/about" component={About} />
        <Route path="/experience" component={Experience} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </HashRouter>
    <Footer />
  </div>
)

export default App;
