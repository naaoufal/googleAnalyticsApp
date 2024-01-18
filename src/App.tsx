import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactGA from 'react-ga';
import CommentScreen from './screens/CommentScreen';
import ProductScreen from './screens/ProductScreen';

ReactGA.initialize('G-9NG5P6YKZV');

function App() {

  console.log(window.location.pathname);

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview", 
      page: window.location.pathname, 
      title: window.location.pathname
    });
  });

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomeScreen} /> {/* 👈 Renders at /app/ */}
          {/* tested pages for google analytics */}
          <Route path="/comment" Component={CommentScreen} />
          <Route path="/product" Component={ProductScreen} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
