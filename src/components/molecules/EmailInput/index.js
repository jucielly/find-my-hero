import React from 'react'
import Input from "../../atoms/Input"
import Wrapper from '../../atoms/Wrapper'
import { MdMailOutline} from "react-icons/md";



const EmailInput = () => {
    return (
        <Wrapper>
            <MdMailOutline className="icon"/>
            <Input placeholder="Email" className="input" />
        </Wrapper>
    )
}


export default EmailInput;