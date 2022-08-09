import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../../styles/MenuMarco.css'

const MenuMarco = () => {
  const caracteristicas = [
    {
      name: 'Geomorfología',
      path: 'geomorfologia'
    },
    {
      name: 'Geología',
      path: 'geologia'
    },
    {
      name: 'Unidades Superficiales',
      path: 'unidades-superficiales'
    },
    {
      name: 'Usos del Suelo',
      path: 'usos-del-suelo'
    },
    {
      name: 'Hidrología',
      path: 'hidrologia'
    }
  ];

  const handlerClickMarco = e => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  };

  return (
    <nav className='MenuMarco_nav'>
      <ul className="MenuMarco_list">
        {caracteristicas.map(caract => (
          <li key={caract.path} className='MenuMarco_item'>
            <NavLink to={`/marco/${caract.path}`} className={({isActive}) => isActive ? 'MenuMarco_link active' : 'MenuMarco_link'} onClick={handlerClickMarco}>{caract.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MenuMarco