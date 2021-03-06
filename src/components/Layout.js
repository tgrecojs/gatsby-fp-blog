import React from 'react';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes, { func } from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SiteWrapper, ContentWrapper, color, parentBg } from '../shared/styles';

const Layout = ({ children }) => (
  <SiteWrapper>
    <Global
      styles={css`
        body {
          margin: 0;
          padding: 0;
        }
        a {
          color: #fff;
          text-decoration: none;
          transition: all 0.3s ease-in-out;
        }
        .twitter {
          color: #000;
        }
        a:hover {
          transform: scale(1.1);
        }
      `}
    />
    <Header />
    <ContentWrapper>{children}</ContentWrapper>
    <Footer />
  </SiteWrapper>
);

export { parentBg, color, childBg, border };
export default Layout;
