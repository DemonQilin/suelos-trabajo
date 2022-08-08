import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Header.css'

const Header = () => {
    const $btnMenu = useRef();
    const $menu = useRef();

    useEffect(() => {
        document.addEventListener('click', e => {
            if (e.target === $btnMenu.current || e.target.matches('.Header_btn-menu *')) {
                $btnMenu.current.classList.toggle('is-active');
                $menu.current.classList.toggle('active');
            }
            
            if ((e.target.matches('.Header_link')) && window.innerWidth < 720) {
                $btnMenu.current.classList.remove('is-active');
                $menu.current.classList.remove('active');
            }
        })
    }, []);

    return (
        <header className="Header">
            <h1 className='Header_title'><NavLink to='/'>MINA MONTEBLANCO<span>LA LAGUNA AZUL</span></NavLink></h1>
            <button className="Header_btn-menu hamburger hamburger--vortex" type="button" ref={$btnMenu}>
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
            <ul className="Header_list" ref={$menu}>
                <li className='Header_item'><NavLink to='/' className={({ isActive }) => isActive ? 'Header_link Header_link--active' : 'Header_link'}>Inicio</NavLink></li>
                <li className='Header_item'><NavLink to='/localizacion' className={({ isActive }) => isActive ? 'Header_link Header_link--active' : 'Header_link'}>Localizacion</NavLink></li>
                <li className='Header_item'><NavLink to='/marco' className={({ isActive }) => isActive ? 'Header_link Header_link--active' : 'Header_link'}>Marco Teorico</NavLink></li>
                <li className='Header_item'><NavLink to='/nosotros' className={({ isActive }) => isActive ? 'Header_link Header_link--active' : 'Header_link'}>Nosotros</NavLink></li>
            </ul>
        </header>
    )
}

export default Header