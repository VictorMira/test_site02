/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve('src/template/post.js');


  return graphql(`{
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            path
            title
            date
          }
        }
      }
    }
  }`)
  .then(res => {
    if(res.errors) {
      return Promise.reject(res.erros);
    } 
  
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const path = node.frontmatter.path
      createPage({
        path,
        component: postTemplate,
        conext: {
          path,
        },
      });
    });
  });
};