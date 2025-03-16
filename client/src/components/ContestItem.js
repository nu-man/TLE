
import React from 'react';
import Countdown from './Countdown';
import axios from 'axios';
import './ContestItem.css';

const ContestItem = ({ contest }) => {
  const handleBookmark = () => {
    // Generate a unique ID 
    const generatedId = contest.id || (contest.title + '_' + contest.startTime);
    
    const bookmarkData = {
      contestId: generatedId,
      contestName: contest.title,
      contestPlatform: contest.site,
      contestUrl: contest.url
    };

    console.log('Bookmark Data:', bookmarkData);

    axios.post('http://localhost:5000/bookmarks', bookmarkData)
      .then(() => {
        alert('Bookmarked successfully!');
      })
      .catch(error => {
        console.error('Error bookmarking:', error);
      });
  };

  return (
    <div className="contest-item">
      <h2>{contest.title} ({contest.site})</h2>
      <p>Start Time: {new Date(contest.startTime).toLocaleString()}</p>
      <p>
        Time Remaining: <Countdown targetTime={contest.startTime} />
      </p>
      <a href={contest.url} target="_blank" rel="noreferrer">Go to Contest</a>
      <br />
      <button onClick={handleBookmark}>Bookmark</button>
    </div>
  );
};

export default ContestItem;
