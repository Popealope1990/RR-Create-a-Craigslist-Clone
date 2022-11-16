// Import data
import React from 'react'
// Import components
import './App.css';
import Gallery from './gallery';
import SideBar from './sidebar'
function App(){
  return (
    <div className='app'>
      <h1>Craigslist 2.0</h1>
      <SideBar/>
      <div className="gallery">
        <Gallery/>
      </div>
    </div>
  );
}

export default App;
