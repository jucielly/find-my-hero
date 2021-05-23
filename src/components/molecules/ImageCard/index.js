import React from 'react';
import styled from 'styled-components';
import BaseCard from '../../atoms/BaseCard';
import { MdFavoriteBorder } from "react-icons/md";
import IconButton from '../../atoms/IconButton'
import { Link } from 'react-router-dom'



const ImageCard = ({ img, title, subtitle, linkTo }) => {
    return (

        <StyledBaseCard>
            <Link to={linkTo} className="link">
                <img className="img" src={img} alt="character" />
                <div className="container">
                    <h3>{title}</h3>
                    <p>{subtitle}</p>
                </div>
                <IconButton className="favourite-btn">
                    < MdFavoriteBorder />
                </IconButton>
            </Link>
        </StyledBaseCard >

    )
}


export default ImageCard

const StyledBaseCard = styled(BaseCard)`
display: flex;
color: #fff;
flex-direction: column;
position: relative;
height: 390px;
 width: 240px;
 margin: 40px;

   .img{
    width: 240px;
    height: 325px;
    object-fit: cover;
    border-bottom: 7px solid ${props => props.theme.colors.secondary};
   }

   .container {
       align-items: flex-start;
       display: flex;
       flex-direction: column;
       padding: 5px;

       h3 {
           font-size: 14px;
       }

       p {
        font-size: 13px;
           margin: 5px;
           color: ${props => props.theme.colors.fontColor}
       }
   }

   .favourite-btn{
       color: #fff;
       margin: 40px 10px 5px 0px;
       position: absolute;
       bottom: 0px;
       right: 0px;
       height: 30px;
        width: 25px;

        &:active {
            color: #F30;
        }

       }

       .link {
        text-decoration: none;
           &:visited {
               color: #fff;
               
           }
       }
`