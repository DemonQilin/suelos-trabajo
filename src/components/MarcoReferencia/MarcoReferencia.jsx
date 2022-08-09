import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router'
import MenuMarco from './MenuMarco'
import '../../styles/MarcoReferencia.css'

const MarcoReferencia = () => {
    const { pathname } = useLocation();

    if (pathname === '/marco') return <Navigate to='/marco/geomorfologia' />;

    return (
        <div className="MarcoReferencia">
            <MenuMarco />
            <Outlet/>
        </div>
    )
}

export default MarcoReferencia