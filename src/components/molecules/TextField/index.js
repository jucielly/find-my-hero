import React from 'react'
import styled from 'styled-components'
import Input from '../../atoms/Input'


const TextField = React.forwardRef(({ color, icon: Icon, ...props }, ref) => {
    return (
        <Wrapper color={color}>
            {Icon && <Icon className="icon" />}
            <Input className="input" {...props} ref={ref} />
        </Wrapper>
    )

})

export default TextField


const Wrapper = styled.div`
position: relative;
width: 40%;

.input {
    color: ${props => props.theme.colors.defaultWhite};
    width: 100%;
    padding-left: 70px;
    border-bottom: 1px solid ${props => props.theme.colors.defaultWhite};
    margin: 15px;
    background-color: transparent;
}
.icon {
    color: ${props => props.theme.colors[props.color]};
    position:absolute;
    bottom:20px;
    left: 0px;
    width: 70px;
    margin: 5px;
    height: 30px;;
    
}
`

