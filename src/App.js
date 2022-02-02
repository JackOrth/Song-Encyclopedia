import React, {useState, useEffect} from 'react';
import Header from './Header.js';
import Home from './Home.js';
import Songs from './Songs.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import axios from 'axios';
import './App.css';

const initialSongs = []

function App() {
  const [songs, setSongs] = useState(initialSongs)
  const getSongs = () => {
    axios.get("https://itunes.apple.com/search?term=all")
      .then(res => {
        setSongs(res.data.results)
      })
      .catch(() => {
        console.log("ERROR")
      })
  }

  useEffect(() => {
    getSongs()
  }, [])
  return (
    <div className="songsApp">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='*' element={<Home />}/> 
          <Route path='/songs' element={<Songs songs={songs}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
