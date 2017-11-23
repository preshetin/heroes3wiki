import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header'
import FilteredArtifactsBlock from './Artifacts/FilteredArtifactsBlock';
import './App.css'


const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const App = () => (
  <Router>
    <div className="App">
      <Header />

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/artifacts" component={FilteredArtifactsBlock}/>
    </div>
  </Router>
)

export default App;
