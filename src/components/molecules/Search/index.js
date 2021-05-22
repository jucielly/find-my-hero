import React from 'react'
import Input from "../../atoms/Input"
import IconButton from '../../atoms/IconButton'
import Wrapper from '../../atoms/Wrapper'
import { MdSearch } from "react-icons/md";
import styled from 'styled-components'



const Search = () => {
    return (
        <StyledWrapper>
            <Input placeholder="Senha" className="search-input" />
            <IconButton className="search-btn"><MdSearch /></IconButton>
        </StyledWrapper>
    )
}


export default Search;

const StyledWrapper = styled(Wrapper)`
.search-input {
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


`