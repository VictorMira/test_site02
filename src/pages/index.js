import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Victor Mira - Desarrollo Web"
                    meta={[
                        { name: 'description', content: 'Muestra' },
                        { name: 'keywords', content: 'muestra, prueba' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Desarrollo Web</h3>
                                <p>Sitios Web a la Medida</p>
                            </header>
                            <Link to="/landing#webdev" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Diseño Web</h3>
                                <p>Si tienes una idea, la puedo concretar</p>
                            </header>
                            <Link to="/landing#webdis" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Landing Page</h3>
                                <p>Algo sencillo para tu empresa</p>
                            </header>
                            <Link to="/landing#landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Portafolios</h3>
                                <p>Muestra tus productos o servicios al mundo</p>
                            </header>
                            <Link to="/landing#portfolio" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Tienda ECommerce</h3>
                                <p>Quieres vender tus productos!</p>
                            </header>
                            <Link to="/landing#ecommerce" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>SEO</h3>
                                <p>Posicionate en la Web</p>
                            </header>
                            <Link to="/landing#seo" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Sobre Mi</h2>
                            </header>
                            <p>Soy Ingeniero de profesión, pero estoy convencido que la Programación es mi pasión, y hoy la estoy encaminando hacia el Desarrollo Web. Con el tiempo me he hecho proficiente en distintos lenguajes, tales como HTML5, CSS3, Javascript, y en frameworks como React. Por lo que si quieres desarrollar tus ideas y ponerlas en la Web, puedes contar con mi ayuda, juntos podemos llevar tu negocio a un nuevo nivel. </p>
                            <ul className="actions">
                                <li><Link to="/personal" className="button next">Sobre Mi &rarr;</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex