import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImageCarousel from './components/ImageCarouses'
import InvitationFront, {Card} from './components/Invitation';
import {Locations,PortTabs} from './components/Locations';
import Countdown from './components/Countdown';
import Contact from './components/Contact';
import { Spotify } from 'react-spotify-embed';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageCarousel/>
        {/* Invitation/> */}
        <Card onClick={console.log('click')}/>
        <Countdown/>
        <h2 style={{color:'white', letterSpacing:15, fontWeight:'300'}}>ΟΔΗΓΙΕΣ</h2>
        <PortTabs/>
        <br/>
        <Locations url={'123'}/>
        <br/>
        <h2 style={{color:'white', letterSpacing:15, fontWeight:'300'}}>ΕΠΙΚΟΙΝΩΝΙΑ</h2>
        <Contact/>
        <br/>
        <h5 style={{fontWeight:'300'}} >Προαιρετική λίστα γάμου</h5>
        <h5 style={{margin:10, marginBottom:50}}>Τράπεζα Πειραιώς: GR94 0172 1480 0051 4811 2302 021
        </h5>
        <Spotify style={{width:'80%', maxWidth:650, marginBottom:40}} wide link="https://open.spotify.com/track/6usohdchdzW9oML7VC4Uhk?si=658d75b211314a7d" />


      </header>
    </div>
  );
}

export default App;
