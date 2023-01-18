import './App.css';
import Home from './Home';
import logo from './picture/logo.png';
import menu from './picture/menu.png';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
  Link} from 'react-router-dom';
import Course from './Course';
import Store from './Store';
import Contact from './Contact';
import { useState } from 'react';

function App() {

  const [isActive, setIsActive] = useState(false)

  const showMenu = () => {
    setIsActive(current => !current)
  }

  return(

    <Router>
      <nav className='headerContainer'>
        <div className='header'>
          <div>
            <img className='logo' src={ logo } alt='logo'/>
          </div>
          <div>
            <div className={isActive ? 'none' : 'mainMenu'}>
              <Link  className='link' to='/'>Главная</Link>
              <Link className='link' to='/course'>Курсы</Link>
              <Link className='link' to='/store'>Магазин</Link>
              <Link className='link' to='/contact'>Контакты</Link> 
            </div>
            <ul className={isActive ?  'menu, block' : 'none'}>
              <li><Link onClick={() => showMenu(!setIsActive) } className='linkMenu' to='/'>Главная</Link></li>
              <li><Link onClick={() => showMenu(!setIsActive) } className='linkMenu' to='/course'>Курсы</Link></li>
              <li><Link onClick={() => showMenu(!setIsActive) } className='linkMenu' to='/store'>Магазин</Link> </li>
              <li><Link onClick={() => showMenu(!setIsActive) } className='linkMenu' to='/contact'>Контакты</Link></li>
            </ul>
          </div>
          <div className='btnContainer'>
            <button onClick={ showMenu } className='btnMenu'><img className='imageMenu' src={ menu } alt='menu'/></button>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/course' element={ <Course/> }/>
        <Route path='/store' element={ <Store/> }/>
        <Route path='/contact' element={ <Contact/> }/>
      </Routes>
    </Router>

  );
}

export default App;
