import React from 'react';
import { graphql, Link } from 'gatsby';
import { PostWrapper, PostContent, childBg, border } from '../shared/styles';
import Layout from '../components/Layout';

const SiteLink = ({ url = '/', children }) => <Link to={url}>{children}</Link>;

const Template = ({ data, pageContext }) => {
  const { next, prev } = pageContext;

  const { markdownRemark } = data;
  const title = markdownRemark.frontmatter.title;
  const html = markdownRemark.html;
  return (
    <Layout>
      <PostWrapper>
        <PostContent>
          <div dangerouslySetInnerHTML={{ __html: html }} />

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              width: 80
            }}
          >
            {next && (
              <Link to={next.frontmatter.path}>
                <button>Next: {`${next.frontmatter.title}`}</button>
              </Link>
            )}
            {prev && (
              <SiteLink to={prev.frontmatter.path}>
                <button>{`${prev.frontmatter.title}`}</button>
              </SiteLink>
            )}
          </div>
        </PostContent>
      </PostWrapper>
    </Layout>
  );
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default Template;
