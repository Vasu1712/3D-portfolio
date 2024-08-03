import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './routes/Home.js';



function App() {

  return (
    <div className='w-screen h-screen font-sfpro'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element=<Home />
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


