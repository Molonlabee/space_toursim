import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from  './Components/Home';
import Destination from './Components/Destination';
import Crew from './Components/Crew';
import Technology from './Components/Technology';

export default(
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/destination' element={<Destination />}></Route>
        <Route path='/crew' element={<Crew />}></Route>
        <Route path='/technology' element={<Technology />}></Route>
    </Routes>
);