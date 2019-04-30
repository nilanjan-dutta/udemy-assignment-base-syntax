import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
function App() {
  const [userNameState, setUserNameState] = useState({
    userName: 'Nilanjan Dutta'
  });

  const userNameChangedHandler = (event) =>{
    setUserNameState({
      userName: event.target.value
    })
  }

  return (
    <div className="App">
      <UserInput changed={userNameChangedHandler} userName = {userNameState.userName} />
      <UserOutput userName={userNameState.userName} />
    </div>
  );
}

export default App;
