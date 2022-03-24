import React from 'react';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/CreateTodo';

function App() {
  return (

    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path='/' exact component={Home}/>
        <Route path='/About' exact component={About}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
