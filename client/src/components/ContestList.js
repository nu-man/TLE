import React from 'react';
import ContestItem from './ContestItem';

const ContestList = ({ contests }) => {
  return (
    <div>
      {contests.map((contest, index) => (
        <ContestItem 
          key={contest._id || contest.title + '_' + contest.startTime || index} 
          contest={contest} 
        />
      ))}
    </div>
  );
};

export default ContestList;
