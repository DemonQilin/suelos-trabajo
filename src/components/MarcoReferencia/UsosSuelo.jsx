import React from 'react'
import usosSueloImg from '../../assets/usos-suelo.png'

const UsosSuelo = () => {
    const usosSuelo = [
        {
            title: 'Áreas construidas',
            text: 'Están conformadas por las áreas del territorio ocupadas por la cabecera municipal y el casco urbano del Corregimiento de Mesopotamia. Abarca 0,0072 Km 2.'
        },
        {
            title: 'Bosque plantado',
            text: 'Comprende las áreas del territorio plantadas en coníferas, localizadas sobre las cabeceras de los drenajes de las quebradas San Juan y San Miguel, en las veredas San Juan y San Miguel Santa Cruz, sobre el costado oriental del municipio, abarca una extensión de 1, 48 Km 2 equivalentes al 0,88 % de la extensión municipal.'
        },
        {
            title: 'Bosques',
            text: 'Este tipo de cobertura consiste en bosque natural intervenido intercalado con sucesiones de arbustos y matorrales, se encuentra dispersa desde el costado sur oriental pasando por la zona central hasta el extremo noroccidental. Ocupa las vertientes altas que comprenden las cabeceras de las quebradas El Carmen, Chaquiros, El Arenal y San Juan, afluentes del Río Piedras en las veredas Las Colmenas, La Cabaña, San Francisco, San Juan y Chalarca. Así mismo, sobre las cabeceras de los afluentes ubicados en la vertiente norte del Río Buey (quebradas San Miguel y El Cardal) sobre las veredas San Miguel Abajo, Minitas y El Cardal. Abarca 53,27 Km 2, equivalentes al 31,74 % de la extensión municipal.'
        },
        {
            title: 'Cuerpos de agua',
            text: 'Es el área del territorio ocupada por lagos, lagunas, ciénagas y los cauces naturales principales de los afluentes de los ríos Buey y Piedras. Se presentan como cuerpos aislados o como franjas alargadas que siguen el curso de las corrientes usualmente obedeciendo a depresiones topográficas o cambios bruscos en el gradiente de las pendientes. Abarcan una extensión de 0,60 Km 2 que corresponde al 0,35 % del territorio municipal.'
        },
        {
            title: 'Cultivo permanente',
            text: 'Este tipo de cobertura incluye los cultivos que son confinados, se presentan como una pequeña área localizada a 500 metros del costado sur de la cabecera municipal sobre la vereda Quebrada Negra. Tiene una extensión de 0,11 Km 2 equivalentes al 0,0006 % del área municipal.'
        },
        {
            title: 'Cultivo Transitorio',
            text: 'En esta categoría se incluyen el conjunto de cultivos, pastos y espacios naturales dedicados a cultivos transitorios. Su ubicación espacial coincide con las áreas de pendientes predominantemente planas a moderadas cuyos rangos van del 0 - 5% y del 5 - 12 %, localizadas en el costado norte del municipio (veredas Buenavista, Quebrada Negra, Vallejuelito, La Concha, Chuscalito, Las Acacias, La Almería, La Madera, La Palmera y la cabecera municipal), justamente sobre la superficie de erosión que corresponde a la roca ígnea intrusiva denominada “cúpula de la Unión”, donde el relieve de colinas bajas y pendientes suaves se aprovecha para el uso intensivo del suelo en actividades agrícolas y pecuarias. Abarca una extensión de 74,20 Km 2 equivalente al 44,21 % del territorio municipal.'
        },
        {
            title: 'Pastos',
            text: 'Comprende las áreas del territorio municipal en donde se encuentran pastos limpios, pastos enmalezados o enrastrojados, pastos arbolados, rastrojos altos y bajos y pastos naturales, se localiza en la zona central y occidental del municipio, microcuencas de las quebradas El Presidio, La García, El Arenal y demás afluentes de la cuenca media y alta del Río Pidras y el Río Buey; sobre vertientes moderadas a empinadas (pendientes en el rango del 12 -35 % y del 35 - 70 %) que corresponden al saprolito de roca metamórfica. Este tipo de cobertura se intercala con la de bosques y cultivos transitorios. Sobre una extensión de 36,9 Km 2, equivalente al 22 % del territorio, abarca parte de las veredas Pantalio, Guarango, Las Colmenas, La Cabaña, San Francisco, Chalarca, San Miguel Abajo y Las Piedras.'
        },
        {
            title: 'Suelo desnudo',
            text: 'Corresponde a las áreas donde se realizan actividades mineras para la explotación de caolines, se localiza en los alrededores de la cabecera municipal en la vereda Quebrada Negra y en otros sitios aislados de las veredas Buenavista, las Acacias y Chuscalito. Abarca una extensión de 0,56 Km 2 equivalente al 0,33 % del área municipal.'
        }
    ]

    return (
        <section className="Marco_referencia_section">
            <h2 className="MarcoReferencia_title">Usos del Suelo</h2>
            <p className="MarcoReferencia_paragraph">En la jurisdicción del Municipio de la Unión se presentan las siguientes coberturas:</p>
            <figure className="MarcoReferencia_img">
                <img src={usosSueloImg} alt="Mapas de coberturas superficiales de La Unión" />
                <figcaption>Mapas de coberturas superficiales de La Unión (Cornare, 2011)</figcaption>
            </figure>
            {
                usosSuelo.map((section, index) => (
                    <>
                        <h3 className='MarcoReferencia_h4' key={index}>{section.title}</h3>
                        <p className="MarcoReferencia_paragraph" key={section.text}>{section.text}</p>
                    </>
                ))
            }
        </section>
    )
}

export default UsosSuelo