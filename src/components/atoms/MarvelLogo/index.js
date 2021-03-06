import React from 'react';
import styled from 'styled-components';

const LogoImg = styled.img`
  width: 440px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    width: 200px;
    margin-top: 20px;
  }
`;

const MarvelLogo = () => <LogoImg src="assets/marvel-logo.png" />;

export default MarvelLogo;
