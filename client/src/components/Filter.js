
import React from 'react';
import './Filter.css';

const platforms = ['Codeforces', 'CodeChef', 'Leetcode'];

const Filter = ({ selected, onChange }) => {
  const handleToggle = (platform) => {
    if (selected.includes(platform)) {
      onChange(selected.filter(p => p !== platform));
    } else {
      onChange([...selected, platform]);
    }
  };

  return (
    <div className="filter">
      <h3>Filter by Platform</h3>
      {platforms.map(platform => (
        <label key={platform}>
          <input 
            type="checkbox" 
            checked={selected.includes(platform)} 
            onChange={() => handleToggle(platform)}
          />
          {platform}
        </label>
      ))}
    </div>
  );
};

export default Filter;
