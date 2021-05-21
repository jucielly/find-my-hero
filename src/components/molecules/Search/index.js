import React from 'react'
import Input from "../../atoms/Input"
import Button from '../../atoms/Button'
import Wrapper from '../../atoms/Wrapper'
import { MdSearch } from "react-icons/md";
import styled from 'styled-components'



const Search = () => {
    return (
        <StyledWrapper>
            <Input placeholder="Senha" className="search-input" />
            <Button className="search-btn"><MdSearch className="icon" /></Button>
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
    background-color: transparent;
    box-shadow: none;
    height: 100%;
    position:absolute;
    top:0px;
    right: 0px;
    width: 70px;

    
}

.icon {
    color: ${props => props.theme.colors.primary}
}

`