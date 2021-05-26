import styled from 'styled-components';

const BaseCard = styled.div`
  border-radius: 0 0 10px 10px;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 20px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    transform: translateY(-10px);
  }
`;

export default BaseCard;
