import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MenuBar from './MenuBar';
import NavBar from './NavBar';


function App() {
  return (
    <BrowserRouter>
    <div>
      <NavBar/>
      <br/>
      <MenuBar/>

    </div>

    </BrowserRouter>
  );
}

export default App;
