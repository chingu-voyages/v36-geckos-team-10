import { useRef, useState } from 'react';
import { BsFillMoonStarsFill, BsCloudSun } from 'react-icons/bs'
import logo from '../assets/logo.jpg';
import logoAlt from '../assets/logoAlt.jpg'
import { Link, NavLink } from 'react-router-dom';

function Nav() {
    const activeClassName = {borderBottom: '1px solid #333'};
    const [themeIcon, setThemeIcon] = useState(<BsFillMoonStarsFill />);
    const indicator = useRef(null)
    const toggleTheme = () => {
        indicator.current.classList.toggle('white')
        setThemeIcon(indicator.current.classList.contains('white') ? <BsCloudSun/> : <BsFillMoonStarsFill />)
    }
    return (
        <div className='landing-nav'>
            <nav>
                <h1 className='brand-name'>
                    <Link to='/'> <img id="logo" src={logoAlt} alt=""/> </Link>
                </h1>
                <ul className='landing-ul'>
                    <li className='landing-nav-item'>
                        <NavLink to='/features' style={({ isActive }) => isActive ? activeClassName : undefined}>Features</NavLink>
                         </li>
                    <li className='landing-nav-item'>
                        <NavLink to='/about' style={({ isActive }) => isActive ? activeClassName : undefined}>About</NavLink>
                    </li>
                    <li className='landing-nav-item'>
                        <NavLink to='/showcase' style={({ isActive }) => isActive ? activeClassName : undefined}>Showcase</NavLink>
                    </li>
                </ul>
                <div id='theme-toggle' ref={indicator} onClick={() => toggleTheme()}>
                    <i className='indicator'>{themeIcon}</i>
                </div>
            </nav>

            
        </div>
    )
}

export default Nav
