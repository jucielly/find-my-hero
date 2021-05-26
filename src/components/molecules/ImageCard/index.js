import React from 'react';
import styled from 'styled-components';
import BaseCard from '../../atoms/BaseCard';
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import IconButton from '../../atoms/IconButton'
import { Link } from 'react-router-dom'



const ImageCard = ({ img, title, subtitle, linkTo, favorited, onFavorited }) => {

    const handleFavorited = () =>  {
        onFavorited(!favorited)
    }
    return (

        <StyledBaseCard>
            <Link to={linkTo} className="link">
                <img className="img" src={img} alt="character" />
                <div className="container">
                    <h3>{title}</h3>
                    <p>{subtitle}</p>
                </div>
            </Link>
            <IconButton className="favorite-btn" onClick={handleFavorited}>
                {!favorited && < MdFavoriteBorder className="unfavorited" />}
                {favorited && <MdFavorite className="favorited" />}
            </IconButton>

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

   .favorite-btn{
       color: #fff;
       margin: 40px 10px 5px 0px;
       position: absolute;
       bottom: 0px;
       right: 0px;
       height: 30px;
        width: 30px;


       }

       .unfavorited {
        color: #fff;
        &:hover {
         color: #F30;
           border-radius: 50%;
           height: 30px;
           width: 30px;
       }
       }

       .favorited {
           background-color: #F30
       }

     

       .link {
        text-decoration: none;
           &:visited {
               color: #fff;
               
           }
       }

      


`