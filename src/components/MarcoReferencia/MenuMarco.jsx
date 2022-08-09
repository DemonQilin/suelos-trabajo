import React from 'react'
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
      name: 'Hidrología',
      path: 'hidrologia'
    },
    {
      name: 'Usos del Suelo',
      path: 'usos-del-suelo'
    }
  ];

  return (
    <nav className='MenuMarco_nav'>
      <ul className="MenuMarco_list">
        {caracteristicas.map(caract => (
          <li key={caract.path} className='MenuMarco_item'>
            <NavLink to={`/marco/${caract.path}`} className={({isActive}) => isActive ? 'MenuMarco_link active' : 'MenuMarco_link'}>{caract.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MenuMarco