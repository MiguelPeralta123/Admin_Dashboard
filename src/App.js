import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopNav from './components/topNav/TopNav';
import SideNav from './components/sideNav/SideNav';
import Home from './pages/home/Home';
import Users from './pages/users/Users'
import User from './pages/user/User'
import CreateUser from './pages/createUser/CreateUser'
import Products from './pages/products/Products';
import Product from './pages/product/Product'
import BuildingPage from './pages/buildingPage/BuildingPage';
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
          <Route path='/products' element={<Products />}></Route>
          <Route path='/product/:productId' element={<Product />}></Route>
          
          {/* Building pages */}
          <Route path='/analytics' element={<BuildingPage />}></Route>
          <Route path='/sales' element={<BuildingPage />}></Route>
          <Route path='/report' element={<BuildingPage />}></Route>
          <Route path='/transaction' element={<BuildingPage />}></Route>
          <Route path='/email' element={<BuildingPage />}></Route>
          <Route path='/messages' element={<BuildingPage />}></Route>
          <Route path='/manage' element={<BuildingPage />}></Route>
          <Route path='/reports' element={<BuildingPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
