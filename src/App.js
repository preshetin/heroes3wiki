import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Header from './Header'
import FilteredArtifactsBlock from './Artifacts/FilteredArtifactsBlock'
import Spells from './Spells/Spells'
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
      <Route path="/spells" component={Spells}/>
      <Route path="/artifacts" component={FilteredArtifactsBlock}/>
      
    </div>
  </Router>
)

export default App;
