import React from 'react';
import Nav from './Components/Nav';
import Body from './Components/Body';
import './App.css';

function App(){
    return (
      <div className='flex-div'>
        <div className="container">
          <Nav />
          <Body />
      </div>
      </div>
    );
}

export default App;