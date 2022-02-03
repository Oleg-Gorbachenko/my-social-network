import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Technologies} from "./Components/Technologies/Technologies";
import {Footer} from "./Components/Footer/Footer";

function App() {
  return (
      <div>
        <Header/>
        <Technologies/>
          <Footer/>
      </div>
  );
}

export default App;
