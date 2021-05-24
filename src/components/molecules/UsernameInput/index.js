import React from 'react'
import Input from "../../atoms/Input"
import Wrapper from '../../atoms/Wrapper'
import { MdPersonOutline } from "react-icons/md";



const UsernameInput = ({color, register,required,label}) => {
    return (
        <Wrapper color={color}>
            <MdPersonOutline className="icon"/>
            <Input placeholder="User name" className="input" name={label} {...register(label,{required})}/>
        </Wrapper>
    )
}


export default UsernameInput;