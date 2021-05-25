import React from 'react'
import Input from "../../atoms/Input"
import IconButton from '../../atoms/IconButton'
import { MdSearch } from "react-icons/md";
import styled from 'styled-components'



const Search = () => {
    return (
        <StyledWrapper>
            <Input placeholder="pesquisar" className="search-input" />
            <IconButton className="search-btn"><MdSearch /></IconButton>
        </StyledWrapper>
    )
}


export default Search;

const StyledWrapper = styled.div`
position: relative;
width: 40%;
padding-bottom: 0px;
border-bottom: 1px solid ${props => props.theme.primary};
.search-input {
    color: ${props => props.theme.primary};
    width: 100%;
    padding-right: 70px;
}

.search-btn {
   
    color: ${props => props.theme.colors.primary};
    height: 100%;
    position:absolute;
    top:0px;
    right: 0px;
    width: 70px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    
}

.icon {
    color: ${props => props.theme.colors.primary};
    position: absolute;
    top: 5px;
    left: 0px;
    width: 70px;
    margin: 5px;
    height: 30px;
}

.error{
    margin-left: 20px;
    color: red;
}


`





