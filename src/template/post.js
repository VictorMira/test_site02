import React from 'react';
import { graphql } from 'gatsby';

export default function Template({ data, }) {
  const { markdownRemark } = data;
  const { frontmatter , html } = markdownRemark;
  return(
    <section>
      <div class="inner"> 
        <h1>{frontmatter.title}</h1>
        <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
      </div>
    </section>
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