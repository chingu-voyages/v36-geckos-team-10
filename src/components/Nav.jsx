import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Nav() {
    const activeClassName = {borderBottom: '1px solid green'};
    
    return (
        <div className='landing-nav'>
            <nav>
                <h1 className='brand-name'>
                    <Link to='/'> Logo </Link>
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
                <button className='btn-create'>
                    <Link to='/workspace'>CREATE</Link>
                    </button>
            </nav>

            
        </div>
    )
}

export default Nav
