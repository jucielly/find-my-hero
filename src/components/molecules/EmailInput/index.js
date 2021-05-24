import React from 'react'
import Input from "../../atoms/Input"
import Wrapper from '../../atoms/Wrapper'
import { MdMailOutline} from "react-icons/md";



const EmailInput = ({color, register,required,label}) => {
    console.log('xpto',register)
    return (
        <Wrapper color={color}>
            <MdMailOutline className="icon"/>
            <Input placeholder="Email" className="input"  name={label} {...register(label,{required})}/>
        </Wrapper>
    )
}


export default EmailInput;