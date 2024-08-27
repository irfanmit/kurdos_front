import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import{ EmailProvider } from './context/context';

const Signup = lazy(() => import('./pages/Signup'));
const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <EmailProvider>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          {/* other routes here */}
        </Routes>
      </Suspense>
    </Router>
    </EmailProvider>
  );
}

export default App;