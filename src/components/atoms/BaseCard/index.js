
import styled from 'styled-components';

const BaseCard = styled.div`
 height: 300px;
 width: 200px;
 margin: 40px;
  display: flex;
  border-radius: 0 0 10px 10px;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 20px;
  transition: .3s;

  &:hover {
    cursor: pointer;
    transform: translateY(-10px);
  }
  
`;

export default BaseCard;

