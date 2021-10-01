import React from "react";
import Header from './Components/Header/Header';
import Slider from './Components/Slider/Slider';
import About from './Components/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Works from './Components/Works/Works';
// import {  Route } from 'react-router';

// const Picter = React.lazy(() => import('./Components/Works/Picter'));

function App() {
  return (
    <div >
      <Header />
      <Slider/>
      <About />
      <Works />
      {/* <Route path='/Picter' render = { () => {
        return <React.Suspense fallback={<div>Загрузка...</div>}>
            <Picter />
        </React.Suspense>
    }}/> */}
    </div>
  );
}

export default App;
