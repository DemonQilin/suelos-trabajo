import React from 'react'
import hidrologia1 from '../../assets/hidrologia_n.png'
import hidrologia2 from '../../assets/hidrologia_1.png'

const Hidrologia = () => {
    const sectionsPrecip = [
        {
            range: '2.615 a 2.799',
            description: 'Se presenta como una franja alargada en sentido suroeste – noreste, incluye una extensión aproximada de 28.87 Km 2, equivalentes al 17.20 % del área municipal. Siendo la franja de mayor precipitación, abarca las veredas Cardal, San Miguel Santa Cruz, parte de la vereda San Juan y la cabecera del Corregimiento de Mesopotamia. La forma alargada de esta franja de precipitación se extiende siguiendo el sentido de las pendientes que conforman la divisoria de aguas entre el Río Piedras y el Río Buey, hacia ambos flancos de dicha divisoria cada vertiente está modelada sobre rocas metamórficas con rangos de pendiente que van del 35 al 70 %.'
        },
        {
            range: '2.479 a 2.615',
            description: 'Al igual que la zona 1, tiene un forma alargada en sentido suroeste - noreste. Abarca una extensión aproximada de 27.50 Km 2, equivalentes al 16.39 % del área municipal, incluyendo las veredas Minitas, Fátima, Buenavista y parte de las veredas San Miguel Abajo, Las Piedras y Las Brisas. Esta incluye tanto las vertientes del valle del Río Buey, al sur, como ambas vertientes del Río Piedras hacia el norte , configuradas ambas sobre rocas metamórficas foliadas y no foliadas en donde predominan pendientes entre el 35 y 70 %.'
        },
        {
            range: '2.356 a 2.479',
            description: 'Esta franja se distribuye paralelamente a la zona 2, abarca una extensión aproximada de 36.69 Km 2, equivalentes al 21.86 % del área municipal, incluye las veredas La Divisa, Chalarca y parte de Las Teresas, Las Piedras, San Francisco y Buenavista. En el extremo sur oriental incluye las vertientes empinadas del valle del Río Buey y hacia el norte incluye las vertientes del Río Piedras con las subcuencas afluentes que corresponden a las quebradas Arenal y Espinosa en donde predominan pendientes moderadas en el rango del 12 al 35 %.'
        },
        {
            range: '2.240 a 2.356',
            description: 'Abarca una extensión aproximada de 41.34 Km 2, equivalentes al 24.63 % del área municipal, incluye parte de las veredas Las Colmenas, Las Teresas, La Cabaña, Quebradanegra, Vallejuelito, La Concha, Chuscalito, La Almería, La Palmera y el casco urbano municipal. En el costado sur abarca la cabecera de las quebradas La García y El Carmen afluentes de la vertiente sur del Río Piedras, en la parte central de la franja se incluye las cuencas de las quebradas Chaquiros y El Arenal, y en el costado norte cobija las cuencas de las quebradas El Edén y Espinosa, afluentes del Río Piedras.'
        },
        {
            range: '2.093 a 2.240',
            description: 'Abarca una extensión aproximada de 33.38 Km 2, equivalentes al 19.89 % del área municipal. Abarca el extremo norte y occidental del municipio donde se encuentran las veredas Las Colmenas, Guarango y Pantalio, incluyendo toda la subcuenca de la quebrada El Presidio y parte de la cabecera de la quebrada El Edén, modeladas sobre vertientes empinadas de roca metamórfica donde predominan pendientes en el rango del 35 al 75 % en las cabeceras de drenajes y del 12 al 35 % en las franjas de terreno asociadas a depósitos de vertiente.'
        }
    ]

    return (
        <section className="Marco_referencia_section">
            <h2 className="Marco_referencia_title">Hidrología</h2>
            <p className="MarcoReferencia_paragraph">La Unión es un Municipio de relativa complejidad hidrográfica. Esta complejidad se relaciona con el giro que da el curso del Rio Piedras para enrutarse hacia su desembocadura en el Rio Buey; este giro es un giro cerrado en "U" que le da a la Cuenca del Piedras una forma poco usual de herradura. Otra cara de esa complejidad es el encañonamiento extremo que van alcanzando el Rio Piedras y Rio el Buey a medida que bajan por las montañas.</p>
            <p className="MarcoReferencia_paragraph">El territorio del Municipio de La Unión está conformado hidrográficamente por la Cuenca del Rio Buey en forma exclusive. En términos de subcuencas la jurisdicción hídrica de La Unión es: El Cardal, San Miguel, el Buey Alto, el Piedras y El Buey Medio. A nivel de micro cuencas se tiene una división en 17 unidades. El curso del Rio Piedras este formado básicamente por las microcuencas del Piedras Alto, Piedras Medio y Piedras Bajo. Los tamaños de las microcuencas de La Unión varían ampliamente. La microcuenca de la Quebrada San Juan tiene solo 220 has, en tanto que la del Rio San Miguel tiene 2676 has.</p>
            <figure className="MarcoReferencia_img">
                <img src={hidrologia1} alt="Mapa de cuerpos hidrológicos en La Unión" />
                <figcaption>Mapa de cuerpos hidrológicos en La Unión (Masora, 1999)</figcaption>
            </figure>
            <h3 className='MarcoReferencia_subtitle'>Precipitación</h3>
            <p className="MarcoReferencia_paragraph">La precipitación en la cuenca del Río Buey se distribuye en un período seco que va de diciembre a marzo y en uno lluvioso que va de mayo a noviembre, siendo abril un mes de transición y julio un mes de disminución en el intervalo del período lluvioso. El régimen de precipitación es, en general, altamente influenciado por el carácter orográfico del municipio, pero igualmente se encuentra asociado al paso del Régimen de Convergencia Intertropical. Acorde a los datos de la estación 2618017, LA UNIÓN, perteneciente al IDEAM, en el municipio se presenta un promedio multianual de 2.342,6 mm de lluvia y el período más lluvioso (para dicha estación) registra valores máximos de 679,5 mm, 507, 5 mm y 729 mm para los meses de agosto, septiembre y octubre respectivamente.</p>
            <p className="MarcoReferencia_paragraph">A nivel regional, en el municipio de la Unión se presentan cinco (5) rangos de precipitación que van desde los 2.093 hasta los 2.799 mm., de lluvia anual. La distribución de lluvia, abarca en mayor cantidad desde el extremo sur oriental del municipio (2.799 mm) y va disminuyendo hacia el extremo noroccidental (2.093 mm).</p>
            <figure className="MarcoReferencia_img">
                <img src={hidrologia2} alt="Mapa de precipitaciones de La Unión" />
                <figcaption>Mapa de precipitaciones de La Unión (Cornare, 2011)</figcaption>
            </figure>
            <p className="MarcoReferencia_paragraph">A continuación se describirán por zonas, la distribución de cada uno de los rangos de precipitación para el Municipio de la Unión:</p>
            {sectionsPrecip.map((section, index) => (
                <>
                    <h4 className='MarcoReferencia_h4' key={section.range}>Zona {index + 1} - <span>Rango de precipitación de {section.range} mm/año</span></h4>
                    <p className="MarcoReferencia_paragraph" key={section.description}>{section.description}</p>
                </>
            ))}
        </section>
    )
}

export default Hidrologia