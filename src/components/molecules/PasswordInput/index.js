import React from 'react'
import Input from "../../atoms/Input"
import Wrapper from '../../atoms/Wrapper'
import { MdLockOutline} from "react-icons/md";



const EmailInput = () => {
    return (
        <Wrapper>
            <MdLockOutline className="icon"/>
            <Input placeholder="Senha" className="input" />
        </Wrapper>
    )
}


export default EmailInput;