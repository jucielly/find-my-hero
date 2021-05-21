import styled from 'styled-components' 
import {darken} from 'polished'

const Button = styled.button`
font-family: 'Roboto', sans-serif;
border: none;
background-color: ${props => props.theme.colors.secondary};
color: #fff;
width: 250px;
padding: 15px;
transition: .3s;
margin: 20px;
font-size: 1em;
box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
&:hover {
    background-color: ${props => darken(0.2,props.theme.colors.secondary)};
}
&:focus {
    outline: none
}
`


export default Button;
