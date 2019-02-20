import React from 'react';
import styled from '@emotion/styled';

const StyledFooter = styled.div`
  background: #fff;
  color: #363732;
  text-align: center;
  display: flex;
  flex-direction: column;
`;
const Footer = ({ text = 'Created by Thomas Greco 2019' }) => (
  <StyledFooter>
    <p>{text}</p>
    <div>
      Follow on Twitter{' '}
      <a className="twitter" href="https://twitter.com/tgrecojs">
        tgrecojs
      </a>
    </div>
  </StyledFooter>
);

export default Footer;
