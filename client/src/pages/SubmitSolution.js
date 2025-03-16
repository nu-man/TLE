
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SubmitSolution = () => {
  const [contests, setContests] = useState([]);
  const [selectedContest, setSelectedContest] = useState('');
  const [youtubeLink, setYoutubeLink] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/contests')
      .then(response => {
        setContests(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching contests:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedContest) {
      alert("Please select a contest");
      return;
    }
    // Parse the contest object stored as JSON string
    const contestObj = JSON.parse(selectedContest);
    const generatedId = contestObj.id || (contestObj.title + '_' + contestObj.startTime);

    const solutionData = {
      contestId: generatedId,
      contestName: contestObj.title,
      contestPlatform: contestObj.site,
      contestUrl: contestObj.url,
      youtubeLink: youtubeLink
    };

    console.log('Solution Data:', solutionData);

    axios.post('http://localhost:5000/solutions', solutionData)
      .then(() => {
        alert('Solution link submitted successfully!');
        setSelectedContest('');
        setYoutubeLink('');
      })
      .catch(error => {
        console.error('Error submitting solution link:', error);
      });
  };

  return (
    <div className="container">
      <header>
        <h1>Submit Contest Solution Link</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div>
          <label style={{ marginRight: '10px' }}>Select Contest:</label>
          <select value={selectedContest} onChange={(e) => setSelectedContest(e.target.value)}>
            <option value="">--Select a contest--</option>
            {contests.map((contest, index) => (
              // Save full contest object as JSON string
              <option key={index} value={JSON.stringify(contest)}>
                {contest.title} ({contest.site})
              </option>
            ))}
          </select>
        </div>
        <div>
          <label style={{ marginRight: '10px' }}>YouTube Solution Link:</label>
          <input 
            type="url" 
            value={youtubeLink} 
            onChange={(e) => setYoutubeLink(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Submit Solution Link</button>
      </form>
    </div>
  );
};

export default SubmitSolution;
