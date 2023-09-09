import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopNav from './components/topNav/TopNav';
import SideNav from './components/sideNav/SideNav';
import Home from './pages/home/Home';
import Users from './pages/users/Users'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <div className='container'>
        <SideNav />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/users' element={<Users />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
