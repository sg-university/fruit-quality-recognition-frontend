import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import TutorialAdd from './components/TutorialAdd';
import TutorialList from './components/TutorialList';
import TutorialDetail from './components/TutorialDetail';

function App() {
  return (
    <Router>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>

        <a href="/tutorials" className="navbar-brand container">
          Fruit Quality Detection v1
        </a>
        <text className='container'>
          react
        </text>

        <div className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link to="/tutorials" className="nav-link">
              Tutorials
            </Link>
          </li>
          <li>
            <Link to="/tutorials/add" className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className='container mt-3'>
        <Routes>
          <Route path="/tutorials" element={<TutorialList/>}/>
          <Route path="/tutorials/:id" element={<TutorialDetail/>}/>
          <Route path="/tutorials/add" element={<TutorialAdd/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
