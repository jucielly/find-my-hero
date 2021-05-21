import React from 'react'
import Input from "../../atoms/Input"
import Wrapper from '../../atoms/Wrapper'
import { MdPersonOutline } from "react-icons/md";



const UsernameInput = () => {
    return (
        <Wrapper>
            <MdPersonOutline className="icon"/>
            <Input placeholder="User name" className="input" />
        </Wrapper>
    )
}


export default UsernameInput;