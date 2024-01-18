import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CarouselScreen from './components/Carousel';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactGA from 'react-ga';
import CommentScreen from './screens/CommentScreen';
import ProductScreen from './screens/ProductScreen';

ReactGA.initialize('G-C21T1T28B9');

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
