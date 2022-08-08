import React from 'react'
import '../styles/Localizacion.css'
import locImg1 from '../assets/localizacion_1.jpg'

const Localizacion = () => {
    return (
        <div className="Localizacion">
            <h2 className="Localizacion_title">¿Dónde se tomó la muestra?</h2>
            <div className="Localizacion_container">
                <div className="Localizacion_img">
                    <img src={locImg1} alt="Mina Monteblanco" />
                </div>
                <div className="Localizacion_main">
                    <p className="Localizacion_paragraph"> La muestra para el presente análisis fue tomada en la Mina Monteblanco, ubicada en el municipio de La Unión que se localiza, en el oriente del departamento de Antioquia, a los 75˚ 24' 54'' de latitud norte y a los 5˚ 58' 38'' de longitud al oeste del meridiano de Greenwich. Su extensión total es de 198 kilómetros cuadrados, de los cuales, 62 Km2 corresponden al área urbana y 136 Km2 al área rural, teniendo así un gran alcance para la producción agrícola al igual que la obtención de minerales como el caolín ya que, este se encuentra en las principales minas compuestas por barro blanco, arcilla y cenizas volcánicas.</p>
                    <p className="Localizacion_paragraph">
                        La Unión limita por el norte con los municipios de La Ceja y El Carmen de Viboral, por el este con El Carmen de Viboral, por el sur con los municipios de Sonsón y Abejorral y por el oeste con el municipio de La Ceja. El municipio de La Unión dista 57 km de la ciudad de Medellín, tiene su cabecera municipal a 2.500 msnm, posee una temperatura promedio de 13 ºC. Posee un corregimiento, Mesopotamia, y 26 veredas, entre ellas El Cardal, Minitas, Fátima, San Miguel Abajo, Piedras Teherán, Chalarca, Buena Vista, San Miguel Santa Cruz, Mazorcal, San Juan, La Almería, Las Acacias, La Madera, La Palmera, Chuscalito, Pantalio, El Guarango, Vallejuelito Peñas, Las Colmenas, La Cabaña, San Francisco, Las Teresas, La Divisa, Las Brisas, La Frontera, La Concha. Tiene comunicación por carretera con los municipios de La Ceja, Carmen de Viboral, Sonsón y Abejorral. 
                    </p>
                </div>
            </div>
            <div className="Localizacion_ruta">
                <h2 className="Localizacion_title">¿Cómo llegar?</h2>
                <p className="Localizacion_paragraph">Como se puede apreciar en el mapa para llegar a la Unión desde Medellín se pueden tomar tres rutas, de acuerdo a los siguientes puntos de partida:</p>
                <ul className="Localizacion_lis">
                    <li className="Localizacion_item">Santa Helena - Túnel de Oriente</li>
                    <li className="Localizacion_item">Avenida las Palmas</li>
                    <li className="Localizacion_item">Autopista Medellín Bogota</li>
                </ul>
                <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d205868.8287835983!2d-75.49279704602034!3d6.165265299379618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8e4428dfb80fad05%3A0x42137cfcc7b53b56!2sMedell%C3%ADn%2C%20Antioquia!3m2!1d6.2476376!2d-75.5658153!4m5!1s0x8e4697bd412310af%3A0xaba3c33a4aeef32b!2sMinas%20de%20Caol%C3%ADn%20-%20La%20Uni%C3%B3n%2C%20Unnamed%20Road%2C%20La%20Uni%C3%B3n%2C%20Antioquia!3m2!1d5.9596453!2d-75.3654499!5e1!3m2!1ses!2sco!4v1659970029991!5m2!1ses!2sco" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <p className="Localizacion_paragraph">En este caso, nosotros tomamos Las Palmas en dirección hacia el retiro, pasando por el peaje Las Palmas el cual tiene un costo de $9.700 pesos colombianos, y llegando a la glorieta La Fe. Allí tomamos dirección a Rionegro hasta llegar a la glorieta Don Diego y nos encaminamos hacia La Ceja. A la salida de este municipio llegamos a la rotonda Ceja-Unión que nos lleva hasta La Unión donde utilizamos como referencia el parque principal de la Unión para encontrar la mina. Cerca al restaurante el Edén se puede utilizar el medio de transporte mototaxi, el cual tiene un costo de $10.000 pesos colombianos, para llegar a la Mina Monteblanco.</p>
                <p className="Localizacion_paragraph">Tomando esta opción se recorren aproximadamente 63.3 Km con un tiempo estimado de viaje de 1h 35min.</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d15447.680963165578!2d-75.37024181256083!3d5.966226705138496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8e469615a1d8a7bf%3A0x8f8157c78119e618!2sParque%20Principal%20De%20La%20Uni%C3%B3n%2C%20La%20Uni%C3%B3n%2C%20Antioquia!3m2!1d5.9737393!2d-75.3613246!4m5!1s0x8e4697bd412310af%3A0xaba3c33a4aeef32b!2sMinas%20de%20Caol%C3%ADn%20-%20La%20Uni%C3%B3n%2C%20Unnamed%20Road%2C%20La%20Uni%C3%B3n%2C%20Antioquia!3m2!1d5.9596453!2d-75.3654499!5e1!3m2!1ses!2sco!4v1659969582017!5m2!1ses!2sco" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Localizacion