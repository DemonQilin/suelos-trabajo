import React from 'react'
import '../styles/Nosotros.css'
import photo1 from '../assets/photo_1.jpg'
import photo2 from '../assets/photo_2.jpg'
import photo3 from '../assets/photo_3.jpg'

const Nosotros = () => {
    return (
        <div className="Nosotros">
            <h2 className='Nosotros_title'>¿Quiénes somos?</h2>
            <div className="Nosotros_container">
                <div className="Nosotros_img">
                    <img src={photo1} alt="Dahiana Arango" />
                </div>
                <div className="Nosotros_main">
                    <h3 className="Nosotros_name">Dahiana Arango Bedoya - <span><i>Estudiante Ingeniería Civil</i></span></h3>
                    <p className='Nosotros_paragraph'>Soy estudiante de Ingeneria Civil de octavo semestre.</p>
                </div>
            </div>
            <div className="Nosotros_container">
                <div className="Nosotros_img Nosotros_img--inverse">
                    <img src={photo2} alt="Laura Rendón" />
                </div>
                <div className="Nosotros_main Nosotros_main--inverse">
                    <h3 className="Nosotros_name">Laura Rendón Noreña - <span><i>Estudiante Ingeniería Civil</i></span></h3>
                    <p className='Nosotros_paragraph'>Soy estudiante de Ingeneria Civil de octavo semestre.</p>
                </div>
            </div>
            <div className="Nosotros_container">
                <div className="Nosotros_img">
                    <img src={photo3} alt="Juan Esteban Velez" />
                </div>
                <div className="Nosotros_main">
                    <h3 className="Nosotros_name">Juan Esteban Vélez Loaiza - <span><i>Estudiante Ingeniería Geológica</i></span></h3>
                    <p className='Nosotros_paragraph'>Soy estudiante de Ingeneria Geológica de octavo semestre.</p>
                </div>
            </div>
        </div>
    )
}

export default Nosotros