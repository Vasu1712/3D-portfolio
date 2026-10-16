import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import ResumeRoute from './routes/resume-route/ResumeRoute';
import ResumeRouteAI from './routes/resume-route/ResumeRouteAI';


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
            path='/cv'
            element=<ResumeRoute />
          />
          <Route
            path='/resume'
            element=<ResumeRouteAI />
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


