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
                            <Link to="#" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Diseño Web</h3>
                                <p>Si tienes una idea, la podemos concretar</p>
                            </header>
                            <Link to="#" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Landing Page</h3>
                                <p>Algo sencillo para tu empresa</p>
                            </header>
                            <Link to="#" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Portafolios</h3>
                                <p>Muestra tus productos o servicios al mundo</p>
                            </header>
                            <Link to="#" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Tienda ECommerce</h3>
                                <p>Quieres vender tus productos!</p>
                            </header>
                            <Link to="#" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>SEO</h3>
                                <p>Posicionate en las Web</p>
                            </header>
                            <Link to="#" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Sobre Mi</h2>
                            </header>
                            <p>Soy Ingeniero de profesión, pero desde hace un tiempo que me dedico al desarrollo web, y ya es tiempo de poner mis talentos a tu servicio. Soy apasionado por lo que hago, me encanta aprender y estudiar nuevas tecnologías, y hoy pongo lo que he aprendido al servicio de los que necesiten</p>
                            <ul className="actions">
                                <li><Link to="#" className="button next">Get Started</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex