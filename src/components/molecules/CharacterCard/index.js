import React from 'react';
import styled from 'styled-components';
import BaseCard from '../../atoms/BaseCard';
import { MdFavoriteBorder } from "react-icons/md";


const CharacterCard = ({ img, name, realName }) => {
    return (
        <StyledBaseCard>
            <img className="character-img" src={img} alt="character" />
            <div className="red-line"></div>
            <div className="container">
                <h3>{name}</h3>
                <p>{realName}</p>
            </div>
            < MdFavoriteBorder className="icon" />
        </StyledBaseCard>
    )
}


export default CharacterCard

const StyledBaseCard = styled(BaseCard)`
display: flex;
color: #fff;
flex-direction: column;

.red-line {
    width: 200px;
    height: 10px;
    background-color: ${props => props.theme.colors.secondary}

}   
   .character-img{
    width: 200px;
    height: 150px;
   }

   .container {
       align-items: center;
       display: flex;
       flex-direction: column;
       padding: 5px;

       p {
           margin: 5px;
           color: ${props => props.theme.colors.fontColor}
       }
   }

   .icon {
       margin: 40px 10px 5px 0px;
       align-self: flex-end;
       height: 40px;
        width: 40px;;

       }
`