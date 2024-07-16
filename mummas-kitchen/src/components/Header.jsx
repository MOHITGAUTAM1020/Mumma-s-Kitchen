import React from 'react'
import Navbar from './Navbar'

function Header() {
    return <header className='header' id='#home'>
    <Navbar/>
    <h1 className='header-h1'>Experience the joy of homemade goodness,<br />delivered to your doorstep.</h1>
    <button className='btn' href="#meals">order now</button>
    </header>
}
export default Header