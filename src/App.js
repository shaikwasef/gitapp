import React, { useEffect } from 'react';
import './App.css';
import githubLogo from "./assets/github_logo.svg"
import SearchArea from "./components/SearchArea"
import Table from "./components/Table"

function App() {
  useEffect(() => {document.title = "The Git App"},[]);

  return (
    <div className = "App">
      <img src={githubLogo} className = "git-logo" alt="profile"/>
      <h4 className = "title">THE GITHUB APP</h4>
      <SearchArea/>
      <Table/>
    </div>
  );
}

export default App;
