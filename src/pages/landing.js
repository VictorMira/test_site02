import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Servicios - Victor Mira</title>
            <meta name="description" content="Servicios" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Siempre mejorando</h2>
                    </header>
                    <p>No importa si lo que necesitas es una Landing Page muy básica para tu emprendimiento, o si necesitas una tienda ECommerce con todos los servicios, yo puedo apoyarte, y trabajar para que tu imagen en la Web sea la que traiga más clientes y te asegure un retorno de tu inversión en el corto plazo.</p>
                    <p>En el mundo de hoy, todos navegan desde sus celulares, por lo que mi concepto de diseño y desarrollo está basado en la metodología "Movil First" de manera de entregar la mejor experiencia desde dispositivos móviles, y así no depender que el usuario acceda desde un PC de escritorio para obtener la máxima funcionalidad</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/personal" className="image" id="webdev">
                        <img src={pic01} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Desarrollo Web</h3>
                            </header>
                            <p>Si ya tienes una idea, o el diseño de la gráfica de tu sitio Web, yo lo puedo transformar en código y agregarle la funcionalidad que necesitas, utilizando tecnologías de última generación, tales como ReactJS, GraphQL, SASS, GatsbyJS, etc.</p>
                            <ul className="actions">
                                <li><Link to="/personal#experiencia" className="button">Proyectos &rarr;</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/personal" className="image" id="webdis">
                        <img src={pic02} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Diseño Web</h3>
                            </header>
                            <p>Si sólo tienes una idea, yo puedo encargarme de plasmarla en un diseño atractivo y llamativo, que refleje el espíritu de tu empresa, con colores llamativos, logos y gráfica profesional. Luego, la transformo en un sitio web o Web App para que llegues a tus potenciales clientes y aumentes el retorno de tu inversión. Trabajo con Diseñadores Profesionales que aman su trabajo y que en conjunto podemos entregar el mejor producto, adecuado a tus necesidades.</p>
                            <ul className="actions">
                                <li><Link to="/personal#experiencia" className="button">Proyectos &rarr;</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/personal" className="image" id="landing">
                        <img src={pic03} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Landing Page</h3>
                            </header>
                            <p>Este es el producto más básico, consiste de una sola página con una imagen tipo "Heroe", con tu logo o imagen principal, además de un par de secciones que presentan las características de tu empresa, un resumen tu experiencia, una galería de fotos tipo carrusel, si es que lo necesitas y tu información de contacto. A diferencia de los demás, no uso plantillas, sino que la hago de acuerdo a tus necesidades y requerimientos. Y si no tienes logos, los podemos diseñar. </p>
                            <ul className="actions">
                                <li><Link to="/personal#experiencia" className="button">Proyectos &rarr;</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/personal" className="image" id="portfolio">
                        <img src={pic04} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Portafolio</h3>
                            </header>
                            <p>Eres Fotógrafo, Diseñador, haces artesanías o sólo quires tener un catálogo de tus productos, pues también lo podemos hacer. Este ya es un sitio web con varias páginas o secciones, donde se puede presentar un resumen de imágenes de tus productos y luego ir a una sección detallada para cada uno de ellos. Como siempre, el diseño es personalizado y de acuerdo a la imagen que quieres mostrar al mundo.</p>
                            <ul className="actions">
                                <li><Link to="/personal#experiencia" className="button">Proyectos &rarr;</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/personal" className="image" id="ecommerce">
                        <img src={pic05} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Tienda ECommerce</h3>
                            </header>
                            <p>Este es el producto más avanzado y desarrollado, podemos hacer tu propia tienda virtual, utilizando las tecnlogías más modernas de gestión de productos, usuarios, pago en línea e inventario. Podemos transformar tu negocio en una tienda en línea y ampliar tus clientes a todo el mundo.</p>
                            <ul className="actions">
                                <li><Link to="/personal#experiencia" className="button">Proyectos &rarr;</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/personal" className="image" id="seo">
                        <img src={pic06} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>SEO</h3>
                            </header>
                            <p>SEO (Search Engine Optimization) son las técnicas de optimización de la arquitectura del sitio Web de manera de aumentar las oportunidades de tu sitio y tu marca, de posicionarse en los niveles más altos de los resultados de búsqueda de Google. Utilizo la metodología mas moderna para así configurar tu sitio de manera de buscar un posicionamiento rápido y expedito. Permitiendl que más usuarios te encuentren y mejorando la accesibilidad del sitio para que todos puedan acceder a tu contenido.</p>
                            <ul className="actions">
                                <li><Link to="/personal#experiencia" className="button">Proyectos &rarr;</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing