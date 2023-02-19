import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../Styling/Navbar.css'

const Navbar = () => {
    // get state values from redux store
    const items = useSelector(state => state.cart)
    return (
        <nav className='navbar'>
            <div className='nav_content'>
                <span style={{ fontSize: '32px' }}>Redux Cart Store</span>
                <ul className='navlink'>
                    <Link to='/'>
                        <li>
                            Home
                        </li>
                    </Link>
                    <Link to='/cart'>
                        <li>
                            Cart
                        </li>
                    </Link>
                    <span>Cart Items : {items.length}</span>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar