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
                    <p className='Nosotros_paragraph'>Tengo 20 años, me encanta la ciencia, conectarme con la naturaleza y la metereologia.</p>
                    <p className="Nosotros_paragraph">Mis datos de contacto son:</p>
                    <ul className='Nosotros_list'>
                        <li className="Nosotros_item"><span><i className="fa-solid fa-envelope"></i></span> <a href="mailto:dahiana.arango@eia.edu.co?Subject=He%20visto%20tu%20pagina%20de%20suelos%20y%20me%20gustaria%20hablar%20contigo">dahiana.arango@eia.edu.co</a></li>
                        <li className="Nosotros_item"><span><i className="fa-brands fa-linkedin"></i></span> <a href="https://www.linkedin.com/in/dahiana-arango-bedoya-798752124">https://www.linkedin.com/in/dahiana-arango-bedoya</a></li>
                    </ul>
                </div>
            </div>
            <div className="Nosotros_container">
                <div className="Nosotros_img Nosotros_img--inverse">
                    <img src={photo2} alt="Laura Rendón" />
                </div>
                <div className="Nosotros_main Nosotros_main--inverse">
                    <h3 className="Nosotros_name">Laura Rendón Noreña - <span><i>Estudiante Ingeniería Civil</i></span></h3>
                    <p className='Nosotros_paragraph'>Tengo 21 años, soy estudiante de ingeniería civil de octavo semestre, me gusta la construcción de vías y estructuras, con  indagación en la geotecnia.</p>
                    <p className="Nosotros_paragraph">Mis datos de contacto son:</p>
                    <ul className='Nosotros_list'>
                        <li className="Nosotros_item"><span><i className="fa-solid fa-envelope"></i></span> <a href="mailto:laura.rendon@eia.edu.co?Subject=He%20visto%20tu%20pagina%20de%20suelos%20y%20me%20gustaria%20hablar%20contigo">laura.rendon@eia.edu.co</a></li>
                        <li className="Nosotros_item"><span><i className="fa-brands fa-linkedin"></i></span> <a href="https://www.linkedin.com/in/laura-rend%C3%B3n-375282248/">https://www.linkedin.com/in/laura-rend%C3%B3n-375282248/</a></li>
                    </ul>
                </div>
            </div>
            <div className="Nosotros_container">
                <div className="Nosotros_img">
                    <img src={photo3} alt="Juan Esteban Velez" />
                </div>
                <div className="Nosotros_main">
                    <h3 className="Nosotros_name">Juan Esteban Vélez Loaiza - <span><i>Estudiante Ingeniería Geológica</i></span></h3>
                    <p className='Nosotros_paragraph'>Tengo 22 años, soy estudiante de Ingeneria Geológica de octavo semestre, apasionado por la tecnologia y su aplicación en todos los rubros. Espero que este proyecto se convierta en un referente de como hacer un estudio de suelos básico.</p>
                    <p className="Nosotros_paragraph">Mis datos de contacto son:</p>
                    <ul className='Nosotros_list'>
                        <li className="Nosotros_item"><span><i className="fa-solid fa-envelope"></i></span> <a href="mailto:juan.velez58@eia.edu.co?Subject=He%20visto%20tu%20pagina%20de%20suelos%20y%20me%20gustaria%20hablar%20contigo">juan.velez58@eia.edu.co</a></li>
                        <li className="Nosotros_item"><span><i className="fa-brands fa-linkedin"></i></span> <a href="https://www.linkedin.com/in/juanes-velez">https://www.linkedin.com/in/juanes-velez</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nosotros