import React from 'react';
import styled from 'styled-components';

const Information = ({ title, subtitle, src }) => (
  <Container>
    <h2>{title}</h2>
    <p className="subtitle">{subtitle}</p>
    {src && <img src={src} alt="comic" />}
  </Container>
);

export default Information;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;

  img {
    box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 20px;
  }

  h2 {
    text-transform: uppercase;
    border-bottom: 1px solid ${(props) => props.theme.colors.primry};
    margin: 60px 0 30px 0;
  }

  .subtitle {
    text-transform: uppercase;
  }
`;
