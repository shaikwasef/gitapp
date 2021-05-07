import React from 'react';
import './App.css';
import githubLogo from "./assets/github_logo.svg"
import SearchArea from "./components/SearchArea"
import Table from "./components/Table"

function App() {

  return (
    <div className = "App">
      <img src={githubLogo} className = "git-logo" alt="profile"/>
      <h4 className = "title">THE GitHub APP</h4>
      <SearchArea/>
      <Table/>
    </div>
  );
}

export default App;
