import React from 'react';
import Header from './components/header/header.js';
import Main from './components/main/main.js';
import Features from './components/features/features.js';
import Footer from './components/footer/footer.js';
import Calendar from './components/calendar/calendar.js';
import Details from './components/details/details.js';

import './style.css';

function App() {
  return (
    <>
    <Header />
    <Main />
    <Features />
    <Footer />
    <Calendar />
    <Details />
    </>
  )
}

export default App;
