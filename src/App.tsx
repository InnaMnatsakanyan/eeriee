import React from 'react';
import './App.css';
import LandingScreen from "./presentation/screen/landing/LandingScreen";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SearchScreen from "./presentation/screen/search/SearchScreen";

function App() {
  return (
      <React.StrictMode>
          <BrowserRouter>
                  <Routes>
                      <Route path={'/'} element={<LandingScreen/>}/>
                      <Route path={'/search'} element={<SearchScreen/>}/>
                  </Routes>
          </BrowserRouter>
      </React.StrictMode>
  );
}

export default App;
