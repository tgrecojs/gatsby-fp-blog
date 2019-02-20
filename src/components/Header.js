import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { childBg } from '../shared/styles';

const NavbarBrand = styled('div')`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 60%;
`;

const SiteNav = styled('div')`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  background: #fff;
  color: #445492;
  padding-bottom: 10px;
  border-bottom: 2px solid #181e34;
`;

const Navlinks = styled('ul')`
  display: flex;
  width: 60%;
  justify-content: space-around;
  list-style-type: none;
`;

const TitleAndDescription = ({ data }) => {
  const title = data.site.siteMetadata.title;
  const description = data.site.siteMetadata.description;

  return (
    <SiteNav>
      <NavbarBrand>
        <h2 style={{ marginBottom: 0 }}>{title}</h2>
        <p>{description}</p>
      </NavbarBrand>
    </SiteNav>
  );
};

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => <TitleAndDescription data={data} />}
    />
  );
};

export default Header;
