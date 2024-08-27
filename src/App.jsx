import React from 'react';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import Habits from './pages/Habits';

const App = () => {
  return (
    <div className='bg-stone-900'>
      <div className=''>
        <Navbar/>
        <Hero/>
      </div>
    </div>  
  );
};

export default App;