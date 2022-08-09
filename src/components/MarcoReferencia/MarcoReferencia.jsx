import React from 'react'
import { Outlet } from 'react-router'
import MenuMarco from './MenuMarco'
import '../../styles/MarcoReferencia.css'

const MarcoReferencia = () => {
    return (
        <div className="MarcoReferencia">
            <MenuMarco />
            <Outlet/>
        </div>
    )
}

export default MarcoReferencia