import React, { useEffect, useState } from 'react'
import img1 from '../assets/img6.jpeg';
import img2 from '../assets/img_2.jpg';
import img3 from '../assets/img_3.jpg';
import img4 from '../assets/img_1.jpg';
import img5 from '../assets/imgf5.jpeg'
import '../styles/Home.css'

const Home = () => {
    const imgs = [img1, img2, img3, img4, img5];
    const [visibleImg, setVisibleImg] = useState(0);

    useEffect(() => {
        const loopImg = setInterval(() => {
            setVisibleImg(stateVisible => {
                if (stateVisible + 1 > imgs.length - 1) return 0;
                return stateVisible + 1;
            });
        }, 5000);

        return () => {
            clearInterval(loopImg);
        }
    }, []);

    return (
        <div className="Home">
            <div className="Home_carrusel">
                <img src={imgs[visibleImg]} />
                <div className="Home_carrusel_cntrls">
                    <button className="Home_carrusel_btn" onClick={e => setVisibleImg(visibleImg - 1)}><i className="fa-solid fa-angle-left"></i></button>
                    <button className="Home_carrusel_btn" onClick={e => setVisibleImg(visibleImg + 1)}><i className="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
            <h2 className='Home_title'>Introducción</h2>
            <p className="Home_paragraph">La <b>mecanica de suelos</b> es una importante asignatura del currículo de estudios de la Ingeniería Civil que se encarga de estudiar las fuerzas o cargas que son establecidas en la superficie terrestre y el comportamiento de las mismas para determinar el material aplicado y el suelo utilizado en el relleno, siendo obligatoriamente uno de los pasos preliminares, antes de levantar cualquier edificación, conocer las propiedades del suelo y como se pueden utilizar del modo más satisfactorio y económico, en función de la obra proyectada.</p>
            <p className='Home_paragraph'>El estudio de mecánica de suelos en si es un análisis que nos ayuda a conocer el tipo de material del que está compuesto el terreno donde pensamos ejecutar la obra, dentro de estos materiales podemos encontrar distintos tipos de arenas, arcillas y rocas.</p>
            <p className='Home_paragraph'>En base a este estudio puede calcularse y diseñar la cimentación y estructura adecuada para el proyecto, el proceso consiste en tomar muestras del suelo del terreno que posteriormente son analizadas en un laboratorio para descubrir los componentes exactos de los que está compuesto el suelo, con los datos arrojados por el estudio entonces podremos saber a ciencia cierta cual es la capacidad de carga que tiene el suelo en cuestión así como las precauciones que deben tomarse en el cálculo y diseño estructural de la obra.</p>
            <div className="Home_objective">
                <h2 className='Home_title'>Objetivo</h2>
                <p className="Home_paragraph">Realizar un análisis detallado de las propiedades físicas y mecánicas de una muestra del suelo de la Mina Monteblanco</p>
            </div>
        </div>
    )
}

export default Home