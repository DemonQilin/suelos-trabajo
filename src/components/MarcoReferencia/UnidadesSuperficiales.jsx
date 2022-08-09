import React from 'react'
import materiales_sup from '../../assets/materiales_sup.png'

const UnidadesSuperficiales = () => {
    const sectionsUnidades = [
        {
            title: 'Depósitos aluviales',
            description: ['Esta unidad corresponde a las superficies planas del territorio asociadas a procesos de denudación, está conformada por bloques subredondeados y subangulosos de roca ígnea intrusiva (dioritas, cuarzodioritas y tonalitas) en intercalaciones de matriz arenosa y limo arenosa; espacialmente se identifican como porciones de espacios alargados, relativamente planos y estrechos, intercalados entre dos o más áreas de relieve más alto y que tienen asociados corrientes naturales de agua.', 'Para el Municipio de la Unión, estos depósitos se localizan en el costado norte, sobre la denominada superficie de erosión que se relaciona con la roca ígnea del Batolito Antioqueño, abarca un 7.6 % del área municipal y se encuentran principalmente a lo largo de la Quebrada Espinosa y otros afluentes del Río Piedras en su cruce por las veredas quebrada Negra, Vallejuelito, La Concha, Chuscalito, La Almería, Las Acacias y el casco urbano.']
        },
        {
            title: 'Depósitos Coluviales',
            description: ['Se localizan como cuerpos aislados en el costado occidental del municipio, específicamente en las veredas Las Colmenas, Guarango y Las Cabañas. Ocupan aproximadamente el 3 % del área municipal, se encuentran configurando pendientes del 5 al 12% y del 12 al 35 % en las zonas mas cercanas a las franjas de vertiente. Los depósitos coluviales detectados en el Municipio de la Unión se derivan casi exclusivamente como depósitos de vertiente resultantes de la acumulación de fragmentos de rocas metamórficas que conforman el frente erosivo del Magdalena.']
        },
        {
            title: 'Saprolito de roca ígnea',
            description: ['Esta unidad superficial está conformada por suelos residuales derivados de roca ígnea intrusiva (dioritas, tonalitas y cuarzodioritas) que hacen parte de la llamada “Cúpula de La Unión”, en su gran mayoría están recubiertas por cenizas volcánicas, dando lugar al desarrollo de perfiles de suelos bien desarrollados con texturas predominantemente arcillosas, se localizan en el costado norte y oriental del municipio de la Unión, abarcando las veredas Las Acacias, Chalarca, San Juan, Quebrada Negra, Vallejuelito, La Concha, La Almería, La Madera, Buenavista y la totalidad de la cabecera municipal. El saprolito de roca ígnea y su perfil de suelo desarrollado abarca el 31,1 % de la extensión municipal en donde se desarrollan actividades tan importantes como los cultivos intensivos de papa, hortalizas, flores y ganadería intensiva de leche, además de la explotación comercial de caolines y arcillas.', 'Los saprolitos y suelos residuales derivados de la “Cúpula de la Unión” presentan una textura limosa a areno limosa, debido a la presencia de granos de cuarzo, resistentes a la meteorización y a la alteración hidrotermal; presentan igualmente consistencia firme a muy firme y plasticidad variable entre media y alta. Como unidad superficial, configura un relieve típico de superficie de erosión, dando lugar a colinas bajas de crestas subredondeadas y pendientes suaves que van del 0 al 5%, con un patrón de drenaje dendrítico caracterizado por cauces sinuosos y poco profundos.']
        },
        {
            title: 'Saprolito de roca metamórfica',
            description: ['Esta unidad se conforma por suelos residuales derivados de rocas metamórficas foliadas y no foliadas del tipo esquistos, neises y anfibolitas, presentándose en algunos sitios intercaladas entre sí. En las áreas adyacentes a las zonas de contacto con la roca ígnea intrusiva, se presentan múltiples diques y fracturas rellenas con cuarzo y plagioclasa, dándole a la roca metamórfica un alto grado de foliación y conformado un relieve escarpado con perfiles de suelo poco desarrollado.', 'Se localiza como una franja extensa que rodea el saprolito de roca ígnea hacia el costado sur y occidental del municipio, cubre el 58.3 % del área municipal, abarcando las veredas Pantalio, Guarango, La Cabaña, Las Colmenas, San Francisco, Las Piedras, Las Teresas, La Divisa, San Miguel Abajo, Fátima, Minitas, San Miguel Santacruz, El Cardal y corregimiento de Mesopotamia. Sobre esta unidad predominan los rangos de pendiente del 12 al 35 % y del 35 al 70 % sobre las franjas escarpadas que conforman las vertientes paralelas al cauce principal del Río Piedras.']
        }
    ];

    return (
        <section className="Marco_referencia_section">
            <h2 className="MarcoReferencia_title">Unidades Superficiales</h2>
            <p className="MarcoReferencia_paragraph">En el Municipio de La Unión, se identifican cuatro (4) Unidades correspondientes a material superficial:</p>
            <figure className="MarcoReferencia_img">
                <img src={materiales_sup} alt="Mapa de material superficial de La Unión" />
                <figcaption>Mapa de material superficial de La Unión (Cornare, 2011)</figcaption>
            </figure>
            {sectionsUnidades.map((section, index) => (
                <>
                    <h3 className='MarcoReferencia_h4' key={section.index}>{section.title}</h3>
                    {section.description.map(description => <p className="MarcoReferencia_paragraph" key={description}>{description}</p>)}
                </>
            ))}
        </section>
    )
}

export default UnidadesSuperficiales