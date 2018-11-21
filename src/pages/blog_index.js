import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'


const Generic = ({data}) => (
    <Layout>
        <Helmet>
            <title>Generic - Forty by HTML5 UP</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Indice Blog</h1>
                    </header>
                    <ul>
                    {data.allMarkdownRemark.edges.map(post => (
                        <li key={post.node.id}>
                            <Link
                            to={post.node.frontmatter.path}>
                            {post.node.frontmatter.title}
                            </Link>
                            <div className="box">
                                <p>{post.node.html}</p>
                            </div>
                        </li>
                    ))}
                    </ul>
                </div>
            </section>
        </div>


    </Layout>
)

export const pageQuery = graphql`
    query IndexQuery {
        allMarkdownRemark(
            limit: 10
            sort: { fields: [ frontmatter___date ], order: DESC }
            filter: { frontmatter: {published: {eq: true }}}
            ) {
            edges {
              node {
                id
                frontmatter {
                  path
                  title
                }
                html
              }
            }
          }
    }
`

export default Generic