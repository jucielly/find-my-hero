import styled from 'styled-components'
import { darken } from 'polished'


const Input = styled.input`
 border: 1px;
 padding: 20px;
 width: 400px;
 background-color: transparent;
 

& + input {
      margin: 30px;
      padding: 15px;
  };
  
  &::placeholder{
  color: ${props => darken(0.2, props.theme.colors.fontColor)};
}

`

export default Input;