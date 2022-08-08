import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Header.css'

const Header = () => {
    return (
        <header className="Header">
            <h1 className='Header_title'><NavLink to='/'>MINA MONTEBLANCO<span>LA LAGUNA AZUL</span></NavLink></h1>
            <ul className="Header_list">
                <li className='Header_item'><NavLink to='/' className={({ isActive }) => isActive ? 'Header_link Header_link--active' : 'Header_link'}>Inicio</NavLink></li>
                <li className='Header_item'><NavLink to='/localizacion' className={({ isActive }) => isActive ? 'Header_link Header_link--active' : 'Header_link'}>Localizacion</NavLink></li>
                <li className='Header_item'><NavLink to='/geologia' className={({ isActive }) => isActive ? 'Header_link Header_link--active' : 'Header_link'}>Geologia</NavLink></li>
                <li className='Header_item'><NavLink to='/nosotros' className={({ isActive }) => isActive ? 'Header_link Header_link--active' : 'Header_link'}>Nosotros</NavLink></li>
            </ul>
        </header>
    )
}

export default Header