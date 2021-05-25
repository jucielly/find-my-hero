import { useEffect } from 'react'
import styled from 'styled-components'
import IconButton from '../../atoms/IconButton'



const Alert = ({ message, open, onClose, color, timeout }) => {
    if (!open) {
        return null
    }

    useEffect(() => {
        if (open && timeout) {
            setTimeout(onClose, timeout)
        }
    }, [open, timeout])

    return (
        <AlertContainer color={color}>
            <span>{message}</span>
            <IconButton className="close-btn" onClick={onClose}>&times;</IconButton>
        </AlertContainer>
    )
}

const AlertContainer = styled.div`
position: fixed;
  color: #fff;
  background-color: ${props => props.theme.colors[props.color]};
  border-radius: 10px;
  position: fixed;
  bottom: 30px;
  left: 30px;
  padding: 20px 45px;
  min-width:  300px;

.close-btn{
   color: #fff;
    position: absolute;
    top: 5px;
    right: 10px;
}

`


export default Alert;