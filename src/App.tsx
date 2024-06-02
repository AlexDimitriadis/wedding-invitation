import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImageCarousel from './components/ImageCarouses'
import InvitationFront, {Card} from './components/Invitation';
import Locations from './components/Locations';
import Countdown from './components/Countdown';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageCarousel/>
        {/* Invitation/> */}
        <Card onClick={console.log('click')}/>
        <Countdown/>
        <Locations url={'123'}/>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Καλημέρα <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
