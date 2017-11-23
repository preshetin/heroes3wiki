import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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
      <header className="App-header">
        <h1 className="App-title">Heroes 3 Wiki</h1>
      </header>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/artifacts">Artifacts</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/artifacts" component={FilteredArtifactsBlock}/>
    </div>
  </Router>
)

export default App;
