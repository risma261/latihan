import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import Login from './component/Login'

function App() {
  return (

    <Router>
      <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route path="/HomePage" element={<HomePage/>} />
      </Routes>
    </Router>


  );
}

export default App;