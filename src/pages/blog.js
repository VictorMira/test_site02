import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Generic - Forty by HTML5 UP</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Generic</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
                    <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.</p>
                </div>
            </section>
        </div>
        <header className="major">
            <h1>Proyectos</h1>
        </header>
            <div className="box alt">
                <div className="grid-wrapper">
                    <div className="col-4"><span className="image fit"><img src={pic08} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={pic09} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={pic10} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={pic10} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={pic08} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={pic09} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={pic09} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={pic10} alt="" /></span></div>
                    <div className="col-4"><span className="image fit"><img src={pic08} alt="" /></span></div>
                </div>
            </div>

    </Layout>
)

export default Generic