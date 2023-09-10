import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopNav from './components/topNav/TopNav';
import SideNav from './components/sideNav/SideNav';
import Home from './pages/home/Home';
import Users from './pages/users/Users'
import User from './pages/user/User'
import CreateUser from './pages/createUser/CreateUser'
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
          <Route path='/user/:userId' element={<User />}></Route>
          <Route path='/user/create' element={<CreateUser />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
