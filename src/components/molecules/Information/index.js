import React from 'react';
import styled from 'styled-components';

const Information = ({ title, subtitle, information }) => (
  <Container>
    <h2>{title}</h2>
    <p className="subtitle">{subtitle}</p>
    <p>{information}</p>
  </Container>
);

export default Information;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;

  h2 {
    text-transform: uppercase;
    border-bottom: 1px solid ${(props) => props.theme.colors.primry};
    margin: 60px 0 30px 0;
  }

  .subtitle {
    margin: 30px;
    text-transform: uppercase;
  }
`;
