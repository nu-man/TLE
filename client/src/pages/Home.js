
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContestList from '../components/ContestList';
import Filter from '../components/Filter';
import '../App.css';

const Home = () => {
  const [contests, setContests] = useState([]);
  const [filterPlatforms, setFilterPlatforms] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/contests')
      .then(response => {
        setContests(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching contests:', error);
      });
  }, []);

  // Filtering logic 
  const filteredContests = filterPlatforms.length > 0 
    ? contests.filter(contest => {
        if (!contest.site) return false;
        const selectedPlatforms = filterPlatforms.map(platform => platform.toLowerCase());
        return selectedPlatforms.includes(contest.site.toLowerCase());
      })
    : contests;

  return (
    <div className="container">
      <header>
        <h1>Contest Tracker</h1>
      </header>
      <Filter selected={filterPlatforms} onChange={setFilterPlatforms} />
      <ContestList contests={filteredContests} />
      {filteredContests.length === 0 && <p>No contests available.</p>}
    </div>
  );
};

export default Home;
