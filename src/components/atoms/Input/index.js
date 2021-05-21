import styled from 'styled-components'
import { darken } from 'polished'


const Input = styled.input`
 border: none;
 border-bottom: 1px solid ${props => props.theme.colors.primary};;
 padding: 20px;
 width: 400px;

& + input {
      margin: 30px;
  };
  
  &::placeholder{
  color: ${props => darken(0.2, props.theme.colors.fontColor)};
}

  &:focus{
    border: 2px solid ${props => darken(0.5, props.theme.colors.secondary)};
  }
`

export default Input;