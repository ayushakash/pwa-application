import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar'
import './App.css';
import sample from './pages/sample';

const NavBar = () => (
  <div className="navbar">
    <h3>Task Manager</h3>
    <Link to="/">Current Tasks</Link>
    <Link to="/completed">Completed Tasks</Link>
  </div>
);

const Template = (props) => (


  <div>
    <p className="page-info">
      {props.title}
    </p>
    <ul className={props.status}>
      <sample />
      <li>Task 1</li>
      <li>Task 2</li>
      <li>Task 3</li>
    </ul>
  </div>
);

const CurrentTasks = () => (
  <><sample /><Template title="Current Tasks" status="Current" /></>
);

const CompletedTasks = () => (
  <Template title="Completed Tasks" status="Completed" />
);


const App = () => {
  return (
    <>

      <Template />
      <Routes>
        <Route exact path="/" component={sample} />
        <Route path="/completed" component={CompletedTasks} />
      </Routes>


    </>
  )
}

export default App;