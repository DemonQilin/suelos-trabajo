import React from 'react'
import morfologia1 from '../../assets/morfologia.png'
import morfologia2 from '../../assets/morfologia_2.jpeg'
import morfologia3 from '../../assets/morfologia_3.jpeg'
import '../../styles/Geomorfologia.css'

const Geomorfologia = () => {
    return (
        <div className="Geomorfologia">
            <h2 className="Geomorfologia_title">Geomorfologia</h2>
            <p className="Geomorfologia_paragraph">El Municipio de La Unión se localiza en el flanco oriental de la cordillera central, en la parte superior de la cuenca del Río Buey. Sobresalen algunas alturas orográficas como el Alto del Chaquiro (2.400 m.s.n.m), el Cerro Mula (2.700 m.s.n.m) y el Alto del Precipicio (2.600 m.s.n.m). Para la totalidad del Municipio de La Unión, se diferencian dos (2) unidades geomorfológicas:</p>
            <figure className="Geomorfologia_img">
                <img src={morfologia1} alt="Mapa geomorfologico del municipio La Unión" />
                <figcaption>Mapa de geomorfología del municipio de La Unión (Cornare, 2011)</figcaption>
            </figure>
            <h3 className='Geomorfologia_subtitle'>Unidades geomorfológicas</h3>
            <p className="Geomorfologia_paragraph">Para la totalidad del Municipio de La Unión, se diferencian, principalmente, dos (2) unidades geomorfológicas:</p>
            <h4 className='Geomorfologia_h4'>Unidad superficie de erosión Santa Helena - La Unión</h4>
            <p className="Geomorfologia_paragraph">Corresponde a una antigua superficie de erosión localizada en el costado norte del territorio municipal, donde se ubica la cuenca alta del Río Piedras, abarca las veredas San Juan, Buenavista, Quebrada Negra, Las Acacias, Vallejuelito, La Concha, Chuscalito, La Almería, La Madera, La Palmera y la cabecera municipal. Tiene una extensión de 75 Km 2, equivalentes al 44.7 % del área municipal.</p>
            <p className="Geomorfologia_paragraph">Morfológicamente, en esta unidad se identifica un sistema de colinas bajas con diferencia de alturas que varían en el rango de 50 - 100 metros, pendientes moderadas (5 % - 12 %), con superficies convexas, frecuentemente semejando domos y en ocasiones con formas alargada y aplanadas en forma de filos; el patrón de drenaje es dendrítico a subdendrítico; las superficies mas planas se desarrollan a partir de antiguos niveles de depositación de cuerpos de agua, sobre la cual está construida la mayor parte de la cabecera municipal y la infraestructura productiva y el equipamiento municipal, cuando las corrientes de agua cruzan estas superficies toman un gradiente hidráulico bajo que se refleja en un régimen sinuoso.</p>
            <h4 className='Geomorfologia_h4'>Unidad frente erosivo Cauca - Arma</h4>
            <p className="Geomorfologia_paragraph">En la jurisdicción del Municipio de la Unión, esta unidad abarca un área de 63 Km 2, equivalentes al 37,5 % de la extensión municipal. Espacialmente comprende los costados oriental, occidental, centro y sur del municipio, incluyendo parte de la vertiente norte del Valle del Río Buey y las vertientes media y baja del Río Piedras, concretamente en las veredas Cardal, Minitas, San Miguel abajo, La Divisa, Las Teresas, Las Colmenas, Guarango, La Cabaña, San Francisco, Las Piedras, Chalarca, Las Brisas, Buenavista, San Miguel Santa Cruz y la cabecera urbana del Corregimiento Mesopotamia.</p>
            <p className="Geomorfologia_paragraph">Morfológicamente, en esta unidad se diferencian vertientes empinadas, alargadas y comúnmente dominadas por los procesos de disección de los drenajes naturales, cuyos cursos son controlados por las estructuras mayores de la roca metamórfica. Predominan los rango de pendiente que van del 12 - 35 % en las franjas bajas de las cuencas de los ríos Buey y Piedras, del 35 - 50 % en las franjas de vertiente y &gt;50 % en las zonas de cabeceras de drenajes y cuchillas divisorias de aguas.</p>
            <h3 className='Geomorfologia_subtitle'>Procesos Superficiales</h3>
            <figure className="Geomorfologia_img">
                <img src={morfologia2} alt="Mapa geomorfologico del municipio La Unión" />
                <figcaption>Presencia de actividad minera en La Unión - Antioquia</figcaption>
            </figure>
            <p className="Geomorfologia_paragraph">La mayoría de colinas bajas que conforman la superficie de erosión Santa Helena - La Unión son geológicamente estables, pero también son altamente susceptibles a procesos morfodinámicos asociados a la modelación del paisaje, especialmente la intervención antrópica de las laderas a través de la explotación a cielo abierto de minerales caolinitizados y la implementación de cultivos limpios que dejan el suelo vulnerable a la erosión superficial y la formación de surcos y cárcavas. Los procesos erosivos dominantes corresponden a la erosión superficial, causada principalmente por la exposición de los suelos dedicados al cultivo de papa. El escurrimiento difuso intenso se presenta localmente en las áreas que han sido desmontadas y quemadas para la implementación de cultivos o potreros dedicados a la actividad de ganadería intensiva.</p>
            <p className="Geomorfologia_paragraph">Sobre el paisaje en general de la unidad frente erosivo Cauca - Arma, es común encontrar cicatrices de antiguos movimientos en masa, que en muchos casos se reactivan por la intervención antrópica a través de quemas, la implementación de cultivos y pastos, cortes de taludes en las vías y la desaparición de la cobertura vegetal protectora para fines agrícolas y pecuarios.</p>
            <h3 className='Geomorfologia_subtitle'>Relación con el área de trabajo</h3>
            <figure className="Geomorfologia_img">
                <img src={morfologia3} alt="Mapa geomorfologico del municipio La Unión" />
                <figcaption>Apreciación de las colinas bajas de la zona y el cambio a escarpes por la mineria</figcaption>
            </figure>
            <p className="Geomorfologia_paragraph">La Mina Monteblanco se encuentra ubicada sobre la superficie de erosión Santa Helena - La Unión, más exactamente en las coordenadas 1150985.0809632 N y 857390.0120104 E (MAGNA Colombia Bogota). Lo que indica que en esta área predominan las colinas bajas en forma de domos, pero que en su mayoria son erosionadas por los procesos de explotación minera dando un relieve más escarpado a estas colinas. También se resalta la formación de depósitos residuales propios de la actividad minera que forman colinas escarpadas de materiales sueltos susceptibles generar pequeños movimientos en masa.</p>
        </div>
    )
}

export default Geomorfologia;