import React from 'react'
function Footer() {
    return <>
    <footer className='footer'>
    <div className='footer-text'>
        <p className='p1'>Copyright © Gautam Tiffin Center 2022 All rights reserved</p>
        <p className='p2'>Maintained By Gautam Tiffin Center</p>
    </div>
    <div className="footer-li-sign">
        <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#"></a></li>
        <li><a href="#meals">Meals</a></li>
        <li><a href="#contact">contact</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#">Sign in</a></li>
        </ul>
        <div className="footer-icon">
        <a href="#"><i class="fa-solid fa-g"></i><i class="fa-solid fa-t"></i><i class="fa-solid fa-c"></i></a>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <a href="#"><i class="fa-solid fa-file-pen"></i></a>
        <a href="#"><i class="fa-brands fa-twitter"></i></a>
        <a href="https://maps.app.goo.gl/r9PqBWYDtubvVmXw7" target='_blank'><i class="fa-solid fa-map-location"></i></a>
        </div>
    </div>
    </footer>
    </>
}

export default Footer