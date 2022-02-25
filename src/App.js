import './App.css';
import { HashRouter, Link } from 'react-router-dom';
import routes from './routes.js';
import logo from './assets/shared/logo.svg';


function App() {
  return (
    <HashRouter>
      <div className='app'>
        <header className='primary-navigation underline-indicators flex'>

        <div className='nav-logo'>
          <img className='img' src={logo} />
        </div>

        <Link to='/' className='uppercase text-white letter-spacing-2'><span>00</span>Home</Link>
        <Link to='/destination' className='uppercase text-white letter-spacing-2'><span>01</span>Destination</Link>
        <Link to='/crew' className='uppercase text-white letter-spacing-2'><span>02</span>Crew</Link>
        <Link to='/technology' className='uppercase text-white letter-spacing-2'><span>03</span>Technology</Link>
        </header>

        {/* <button className='mobile-nav-toggle'><span className='sr-only'>Menu</span></button> */}
        
        {routes}
      </div>
    </HashRouter>
  );
}

export default App;