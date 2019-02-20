import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout, { childBg, border, color } from '../components/Layout';
import styled from '@emotion/styled';
import Tags from '../templates/allTagsIndex';

import 'prismjs/themes/prism-tomorrow.css';

const HomeLayout = styled('div')`
  display: flex;
  width: 100%;
`;

const FlexCol = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${color};
`;

const Index = ({ data, pageContext }) => {
  console.log('Data', data, pageContext);
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <HomeLayout>
        <FlexCol>
          {edges.map(edge => {
            const { frontmatter } = edge.node;
            console.log('frontMatter', frontmatter);
            return (
              <div
                key={frontmatter.path}
                style={{
                  background: '#445492',
                  padding: '1.5rem',
                  width: '65%',
                  marginBottom: '1rem',
                  border: '3px solid #fff',
                  borderRadius: '10px'
                }}
              >
                <h3
                  style={{ textAlign: 'center', textDecoration: 'underline' }}
                >
                  <Link to={frontmatter.path}>{frontmatter.title}</Link>
                </h3>
                <p>{frontmatter.excerpt}</p>
              </div>
            );
          })}
        </FlexCol>
      </HomeLayout>
    </Layout>
  );
};

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
            excerpt
            tags
          }
        }
      }
    }
  }
`;

export default Index;
