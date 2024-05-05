import React from 'react';
import './App.css';
import Container from './Container';
import Header from './Header';
import { Helmet } from 'react-helmet';



function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet='utf-8'/>
        <title>SET Time</title>
        
      </Helmet>

      <Header/>
      <Container/>
    </div>
  );
}

export default App;
