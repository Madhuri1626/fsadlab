import { Routes, Route } from 'react-router-dom';
import './App.css';

import Pagenotfound from './Pagenotfound';

import Dashboard from './Dashboard';
import Login from './Login';

function App() {
  return (
    <div>

      <Routes>
        <Route path='/profile' element={<Dashboard />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<Pagenotfound />} />
      </Routes>
    </div>
  );
}

export default App;
