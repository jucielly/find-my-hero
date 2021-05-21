import styled from 'styled-components'



export const Wrapper = styled.div`
position: relative;
width: 40%;

.input {
    color: ${props => props.theme.colors.defaultWhite};
    width: 100%;
    padding-left: 70px;
    background-color: ${props => props.theme.colors.primary};
    border-bottom: 1px solid ${props => props.theme.colors.defaultWhite};
    margin: 15px;
}
.icon {
    color: ${props => props.theme.colors.defaultWhite};
    position:absolute;
    bottom:20px;
    left: 0px;
    width: 70px;
    margin: 5px;
    height: 30px;;
    
}
`

export default Wrapper;