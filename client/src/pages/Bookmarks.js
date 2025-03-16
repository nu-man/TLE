
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/bookmarks')
      .then(response => {
        setBookmarks(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching bookmarks:", error);
      });
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Bookmarked Contests</h1>
      </header>
      {bookmarks.length === 0 ? (
        <p>No bookmarks found.</p>
      ) : (
        bookmarks.map(bookmark => (
          <div key={bookmark._id} className="bookmark-item">
            <h2>{bookmark.contestName} ({bookmark.contestPlatform})</h2>
            <p>
              <a href={bookmark.contestUrl} target="_blank" rel="noreferrer">
                Go to Contest
              </a>
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Bookmarks;
