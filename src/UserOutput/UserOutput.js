import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
  return (
    <div>
      <p className='UserOutput'>The First Paragraph. Username: {props.userName}</p>
      <p className='UserOutput' >The Second Paragraph</p>
    </div>
  );
};

export default UserOutput;
