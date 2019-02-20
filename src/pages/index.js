import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout, { childBg, border, color } from '../components/Layout';
import styled from '@emotion/styled';
import 'prismjs/themes/prism-tomorrow.css';

const HomeLayout = styled('div')`
  display: flex;
  width: 100%;
`;

const FlexCol = styled('div')`
  display: flex;
  flex-direction: column;
  width: 50%;
  color: ${color};
`;

const Index = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <HomeLayout>
        <FlexCol>
          {edges.map(edge => {
            const { frontmatter } = edge.node;
            console.log('frontMatter', frontmatter);
            return (
              <div key={frontmatter.path} style={{ marginBottom: '1rem' }}>
                <h3>
                  <Link to={frontmatter.path}>{frontmatter.title}</Link>
                </h3>
                <p>{frontmatter.excerpt}</p>
              </div>
            );
          })}
        </FlexCol>
        <FlexCol>
          {edges.map(edge => {
            const { frontmatter } = edge.node;
            return (
              <div key={frontmatter.path} style={{ marginBottom: '1rem' }}>
                <Link to={frontmatter.path}>{frontmatter.title}</Link>
              </div>
            );
          })}
        </FlexCol>
      </HomeLayout>
      <div>
        <Link to="/tags">Browse by Tag</Link>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
            excerpt
          }
        }
      }
    }
  }
`;

export default Index;
