import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'


import pic21 from '../assets/images/pic21.png'
import proy01_01 from '../assets/images/proy01_01.jpg'
import proy01_02 from '../assets/images/proy01_02.jpg'
import proy01_03 from '../assets/images/proy01_03.jpg'
import proy01_04 from '../assets/images/proy01_04.jpg'
import proy02_01 from '../assets/images/proy02_01.jpg'
import proy02_02 from '../assets/images/proy02_02.jpg'
import proy02_03 from '../assets/images/proy02_03.jpg'
import proy03_01 from '../assets/images/proy03_01.jpg'
import proy03_02 from '../assets/images/proy03_02.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Portafolio - Victor Mira</title>
            <meta name="description" content="Portafolio Proyectos" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major" id="experiencia">
                        <h1>Experiencia</h1>
                    </header>
                    <span className="image main"><img src={pic21} alt="" /></span>
                    <p>Comencé a estudiar desarrollo Web el año 2016, al principio con temas básicos, pero de a poco he ido avanzando y aprendiendo temas más avanzados. Hoy manejo CSS y SASS avanzado, además de HTML5, y Javascript.</p>
                    <p>Mis proyectos se han basado en estas tecnologías, y luego he experimentado con otras, tales como ReactJS y GatsbyJS, sobre lo que está hecho este mismo sitio.</p>
                    <p>Si bien he participado en otros proyectos, basados principalmente en Wordpress, no los usaré en este sitio, pues son de propiedad y ejecución de otras personas, y mi participación fue limitada.</p>
                    <p>De todos modos, les dejo un par de ejemplos de sitios construidos en base a una arquitectura modular, basados en en HTML5, y CSS avanzado, la mayor parte de la funcionalidad está generada con esta tecnología y no en Javascript</p>
                    <p>En caso de ser necesario, también puedo hacer sitios basados en Templates, tales como <a href="https://es.squarespace.com/" target="_blank" rel="noopener norefferer">Squarespace</a>, <a href="https://es.wix.com/" target="_blank" rel="noopener norefferer">Wix</a> o <a href="https://es.wordpress.com/" target="_blank" rel="noopener norefferer">Wordpress</a>, esto a requerimiento del cliente</p>
                </div>
            </section>
        </div>
            <div className="box alt">
                <header className="major" id="proyectos">
                    <h1>Proyectos</h1>
                </header>
                <p>A continuación les presento algunas maquetas utilizando distintas tecnologías</p>
                <div className="grid-wrapper">
                    <div className="col-4"><span className="image fit"><a href="https://victormira.github.io/css_advance/" target="_blank" rel="noopener norefferer"><img src={proy01_01} alt="" /></a></span></div>
                    <div className="col-4"><span className="image fit"><a href="https://victormira.github.io/css_advance/" target="_blank" rel="noopener norefferer"><img src={proy01_02} alt="" /></a></span></div>
                    <div className="col-4"><span className="image fit"><a href="https://victormira.github.io/css_advance/" target="_blank" rel="noopener norefferer"><img src={proy01_03} alt="" /></a></span></div>
                    <div className="col-4"><span className="image fit"><a href="https://victormira.github.io/css_advance/" target="_blank" rel="noopener norefferer"><img src={proy01_04} alt="" /></a></span></div>
                    <div className="col-4"><span className="image fit"><a href="https://victormira.github.io/css_grid_advance/" target="_blank" rel="noopener norefferer"><img src={proy02_01} alt="" /></a></span></div>
                    <div className="col-4"><span className="image fit"><a href="https://victormira.github.io/css_grid_advance/" target="_blank" rel="noopener norefferer"><img src={proy02_02} alt="" /></a></span></div>
                    <div className="col-4"><span className="image fit"><a href="https://victormira.github.io/css_grid_advance/" target="_blank" rel="noopener norefferer"><img src={proy02_03} alt="" /></a></span></div>
                    <div className="col-4"><span className="image fit"><a href="https://victormira.github.io/css_flex_advance/" target="_blank" rel="noopener norefferer"><img src={proy03_01} alt="" /></a></span></div>
                    <div className="col-4"><span className="image fit"><a href="https://victormira.github.io/css_flex_advance/" target="_blank" rel="noopener norefferer"><img src={proy03_02} alt="" /></a></span></div>
                </div>
            </div>

    </Layout>
)

export default Generic