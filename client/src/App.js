import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home.js';
import ResumeRoute from './routes/resume-route/ResumeRoute';


function App() {

  return (
    <div className='w-screen h-screen font-sfpro'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element=<Home />
          />
          <Route
            path='/resume'
            element=<ResumeRoute />
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


