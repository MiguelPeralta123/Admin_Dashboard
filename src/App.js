import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopNav from './components/topNav/TopNav';
import SideNav from './components/sideNav/SideNav';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <div className='container'>
        <SideNav />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/userlist' element={<UserList />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
