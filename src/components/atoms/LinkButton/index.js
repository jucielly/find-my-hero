import styled from 'styled-components';

const LinkButton = styled.button`
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  border: none;
  color: ${(props) => props.theme.colors.primary};
  background-color: transparent;
  width: 150px;
  padding: 15px;
  margin: 20px;
  font-size: 1em;
  &:hover {
    text-decoration: underline;
    color: ${(props) => props.theme.colors.terciary};
  }
  &:focus {
    outline: none;
  }
`;

export default LinkButton;
