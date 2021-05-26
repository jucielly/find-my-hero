import React from 'react';
import styled from 'styled-components';
import Input from '../../atoms/Input';

const TextField = React.forwardRef(
  ({ color, border, icon: Icon, error, ...props }, ref) => (
    <Wrapper color={color} borde={border} r>
      {Icon && <Icon className="icon" />}
      <Input className="input" {...props} ref={ref} />
      {error && <small className="error">{error}</small>}
    </Wrapper>
  )
);

export default TextField;

const Wrapper = styled.div`
  position: relative;
  width: 70%;
  padding-bottom: 15px;

  .input {
    color: ${(props) => props.theme.colors.defaultWhite};
    width: 100%;
    padding-left: 70px;
    border-bottom: 1px solid ${(props) => props.theme.colors[props.border]};
  }
  .icon {
    color: ${(props) => props.theme.colors[props.color]};
    position: absolute;
    top: 5px;
    left: 0px;
    width: 70px;
    margin: 5px;
    height: 30px;
  }

  .error {
    margin-left: 20px;
    color: red;
  }
`;
