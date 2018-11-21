import React from 'react';
import { graphql } from 'gatsby';
import Layout from './../components/layout';

export default function Template({ data, }) {
  const { markdownRemark } = data;
  const { frontmatter , html } = markdownRemark;
  return(
    <Layout>
      <section>
        <div className="inner"> 
          <h1>{frontmatter.title}</h1>
          <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
      </section>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`