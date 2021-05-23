import React from 'react'
import Input from "../../atoms/Input"
import Wrapper from '../../atoms/Wrapper'
import { MdLockOutline} from "react-icons/md";



const EmailInput = ({placeholder, color}) => {
    return (
        <Wrapper color={color}>
            <MdLockOutline className="icon"/>
            <Input placeholder={placeholder} className="input" />
        </Wrapper>
    )
}


export default EmailInput;