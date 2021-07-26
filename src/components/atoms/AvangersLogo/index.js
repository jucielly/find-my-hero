import React from 'react';
import styled from 'styled-components';

const LogoImg = styled.img`
  width: 85%;

  @media (max-width: 768px) {
    visibility: hidden;
  }
`;

const AvangersLogo = () => <LogoImg src="assets/marvel-heroes.png" />;

export default AvangersLogo;
