import React from 'react'
import geologia1 from '../../assets/geologia.png'

const Geologia = () => {
    return (
        <section className="Marco_referencia_section">
            <h2 className="MarcoReferencia_title">Geología</h2>
            <h3 className='MarcoReferencia_subtitle'>Geología Regional</h3>
            <p className="MarcoReferencia_paragraph">El municipio de la Unión se encuentra en Plancha 167 del Servicio Geológico Colombiano (SGC), y en esta se aprecia que a escala regional se encuentran 6 unidades principales litológicas:</p>
            <figure className="MarcoReferencia_img">
                <img src={geologia1} alt="Mapa geomorfologico del municipio La Unión" />
                <figcaption>Recorte de la plancha geológica 167 del SGC (Plancha Sonsón)</figcaption>
            </figure>
            <h4 className='MarcoReferencia_h4'>Migmatitas <span>Precámbrico - Paleozoico Temprano</span></h4>
            <p className="MarcoReferencia_paragraph">Esta unidad se dividó en dos grupos: neises cuarzo-feldespáticos de características ígneas (ortoneises) y neises aluminicos (paraneises). También se incluyen zonas esquistosas y anfibolitas cuyo espesor no es mayor a 5 m.</p>
            <p className="MarcoReferencia_paragraph">Cubren un área de 170 Km<sup>2</sup> en la Plancha 167, cuadrículas A-1 a 6, B-1 a 6, C-1 a 6 y D-1 a 6. La myor parte de las rocas de esta unidad se encuentran intensamente meteorizadas y afloramientos de roca fresca solo se encuentran en el cauce de quebradas y ríos donde la erosión ha eliminado la cubierta de roca meteroizada. Debido a las variaciones en la estructura del cuerpo de las migmaticas, las características texturales de palesoma y del neosoma varían considerablemente, aunque por lo general la composición es bastante homogénea, especialmente en el paleosoma.</p>
            <p className="MarcoReferencia_paragraph">El leucosoma, parte clara del neosoma, tiene textura hipioblástica y está compuesto por cuarzo y plagioclasa. El cuarzo es ahnedral y se presenta de disitntas maneras: gregado redondeado que bordea, agregado irregular intersicial y/o cuarzo de reemplazo. La plagioclasa, de composición variable entre An<sub>8</sub> y An<sub>30</sub>, tiene por lo general formas más isómetricas hasta tabulares especialmente en las zonas pegmatiticas. La compisicón varía de ortosa a microclina. En el leucosoma de composición granítica, son abundantes zonas de pertita y mirmequita.</p>
            <p className="MarcoReferencia_paragraph">La compisición y la textura del melanosoma son mucho más variables que las del leucosoma y está constituido esencialmente por biotita, granate, sillimanita, andalucita sericitizada, cordierita y accesorios como zircón, apatito y minerales opacos.</p>

            <h4 className='MarcoReferencia_h4'>Esquistos Cuarzo-Sericíticos <span>Paleozoico Medio - Paleozoico Tardío</span></h4>
            <p className="MarcoReferencia_paragraph">Conocidos como en el campo como esquistos negros debido a su color, se encuentran distribuidos en cuatro grandes áreas así: sur de Montebello en las quebradas Juntas y Balsos como una franja, sur de la Unión en el Río Aures como afloramiento continuo de 350 Km, sureste de la Plancha 187 en el Río Pensilvania como franja y en la parte alta del Río Perrillo como un gran techo de forma elongada.</p>
            <p className="MarcoReferencia_paragraph">Los esquistos cuarzo-sericíticos son rocas finamente laminadas en capas de 3 a 5 mm de espesor, por lo general replegados y con venas de cuarzo lechoso de 0,1 a 10 cm de espesor paralelas a la foliación y que se acomodan, por lo general, a la forma de los plegamientos. La roca está compuesta por cuarzo-sericíta, con cantidades menores de clorita, biotita, grafito, plagioclasa y como accesorios comunes turmalina, zircón, apatito y minerles opacos.Presenta por lo general una buena segregación metámorfica, definida por capas de 1 a 3 mmde espesor de micas y grafito, separadas por bandas de cuarzo granoblástico.</p>
            <p className="MarcoReferencia_paragraph">La estructura de esquistos, es localmente néisica, hasta pizarrosa pasando por filitas, mientras que en la composición muestra cambios transicionales a cuarcitas, por aumento en el contenido de cuarzo, a esquistos verdes por aumento en el contenido de clorita, y a esquistos micáceos por el aumento en el contenido de muscovita.</p>

            <h4 className='MarcoReferencia_h4'>Esquistos Intercalados <span>Paleozoico Medio - Paleozoico Tardío</span></h4>
            <p className="MarcoReferencia_paragraph">En la parte noroeste del área de la Plancha 167 son comunes zonas de esquistos cuarzo-sericíticos y de esquistos verdes intercalados en capas concordantes, cuyo espesor varia entre unos pocos centímetros y varios metros, siendo díficil determinar cuál de ellos predomina en el área.</p>
            <p className="MarcoReferencia_paragraph">Estas zonas están caracterizadas en el campo por la alternancia de capas negras finamente laminadas y de capas verdes por lo general macizas, ocasionalmente estas áreas están marcadas por zonas de transición donde va disminuyendo el contenido de grafito en el esquisto cuarzo-sericítico y aumentando el de clorita para dar origen a esquistos de cuarzo-cloria-sericíta que no representan ni verdaderos esquistos verdes ni típicos esquistos cuarzo-sericíticos.</p>
            {/* <ul className="MarcoReferencia_list">
                <li className='MarcoReferencia_list_item'>Al sur de Montebello en una franjade dirección N30ºW con 30 Km de largo por 4 a 6 Km de ancho.</li>
            </ul> */}
        </section>
    )
}

export default Geologia