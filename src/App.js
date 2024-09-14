import { Routes, BrowserRouter, Route } from 'react-router-dom';

import Home from './Pages/Home';
import NewYam from './Pages/NewYam';
import LectureSeries from './Pages/LectureSeries';
import Lectures from './Pages/Lectures';
import Lecture from './Pages/Lecture';
import Gallery from './Pages/Gallery';
import Sponsor from './Pages/Sponsor';
import Participate from './Pages/Participate';
import Contact from './Pages/Contact';
import Error from './Pages/404error';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='' element={<Home/>}/>
          <Route exact path='/newyamfest' element={<NewYam/>}/>
          <Route exact path='/lecture_series' element={<LectureSeries/>}/>
          <Route exact path='/lectures' element={<Lectures/>}/>
          <Route exact path='/lecture' element={<Lecture/>}/>
          <Route exact path='/gallery' element={<Gallery/>}/>
          <Route exact path='/participate' element={<Participate/>}/>
          <Route exact path='/sponsor' element={<Sponsor/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
