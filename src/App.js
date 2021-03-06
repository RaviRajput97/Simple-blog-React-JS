import React from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import ContactUs from './containers/ContactUs';
import Tutorial from './containers/Tutorial';

function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
      <Hero/>

      <Route path="/" exact component={Home}/>
      <Route path="/contact-us" component={ContactUs}/>
      <Route path="/tutorial" component={Tutorial}/>
    </div>
    </Router>
  );
}

export default App;
