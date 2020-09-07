import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    const openMenu=()=>{
        console.log('open menu')
        document.querySelector('.sidebar').classList.add('open')
      }
      const closeMenu=()=>{
        console.log('close menu')
        document.querySelector('.sidebar').classList.remove('open')
      }
    return (
        <>
           <header className="header">
            <div className="brand">
                <button onClick={openMenu}>
                    &#9776;
                </button>
                <Link to="/">amazona</Link>
            </div>
            <div className="header-links">
                <a href="#">Cart</a>
                <a href="#">Sign In</a>
            </div>
            </header>
            <aside className="sidebar">
                <h3>Shopping cart</h3>
                <button className="sidebar-close-btn" onClick={closeMenu}>x</button>
                <ul>
                    <li>
                        <a href="#">Pants</a>
                    </li>
                    <li>
                        <a href="#">Shirts</a>
                    </li>
                </ul>
            </aside> 
        </>
    )
}

export default Navbar
