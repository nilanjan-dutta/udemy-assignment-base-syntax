import React from 'react';

const UserInput = props => {
  const style = {
    margin: 'auto',
    color: 'red'
  };
  return (
    <input onChange={props.changed} value={props.userName} style={style} />
  );
};

export default UserInput;
