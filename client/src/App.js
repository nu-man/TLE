import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import SubmitSolution from './pages/SubmitSolution';
import Bookmarks from './pages/Bookmarks';

const App = () => {
  return (
    <Router>
      <nav style={{ marginTop: '20px', textAlign: 'center',}}>
        <Link to="/" style={{ marginRight: '20px',fontSize:"larger"}}>Home</Link>
        <Link to="/submit-solution" style={{ marginRight: '20px',fontSize:"larger" }}>Submit Solution</Link>
        <Link to="/bookmarks" style={{fontSize:"larger"}}>Bookmarks</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit-solution" element={<SubmitSolution />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
    </Router>
  );
};

export default App;
