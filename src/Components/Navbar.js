import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../Styling/Navbar.css'

const Navbar = () => {
    const items = useSelector(state => state.cart)
    return (
        <nav className='navbar' style={{ position: 'fixed', top: '0', background: 'green', width: '100%', padding:'15px 25px' }}>
            <div className='nav_content'>
                <span style={{ fontSize: '32px', fontWeight: '600' }}>Redux Cart Store</span>
                <ul className='navlink'>
                    <Link to='/'>
                        <li style={{ marginRight: '50px' }}>
                            Home
                        </li>
                    </Link>
                    <Link to='/cart'>
                        <li style={{ marginRight: '50px' }}>
                            Cart
                        </li>
                    </Link>
                    <span style={{ fontWeight: 'bold' }}>Cart Items : {items.length}</span>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar