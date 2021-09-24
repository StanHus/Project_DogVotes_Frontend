import React from 'react';
import TwoDogs from './components/ChooseADog';
import Header from "./components/Header"
import Leaders from './components/Leaderboard';

function App() {
  return (
    <div>
      <Header />
      <TwoDogs />
      <br />
      <Leaders />
    </div>
  );
}

export default App;
