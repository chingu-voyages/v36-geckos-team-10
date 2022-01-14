import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
    return (
        <div className='landing-nav'>
            <nav>
                <h1 className='brand-name'>
                    <Link to='/'> Logo </Link>
                </h1>
                <ul className='landing-ul'>
                    <li className='landing-nav-item'>
                        <Link to='/features' activeClassName='active'>Features</Link>
                         </li>
                    <li className='landing-nav-item'>
                        <Link to='/about' activeClassName='active'>About</Link>
                    </li>
                    <li className='landing-nav-item'>
                        <Link to='/showcase' activeClassName='active'>Showcase</Link>
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
