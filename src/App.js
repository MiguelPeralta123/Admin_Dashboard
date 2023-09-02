import './App.css';
import TopNav from './components/topNav/TopNav';
import SideNav from './components/sideNav/SideNav';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <TopNav />
      <div className='container'>
        <SideNav />
        <Home />
      </div>
    </div>
  );
}

export default App;
