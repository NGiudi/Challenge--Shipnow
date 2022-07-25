import styled, { css } from "styled-components";

export const BtnStyles = styled.button`
  border: none;
  border-radius: 17px;
  font-size: 14px;
  font-weight: 600;
  margin-right: 8px;
  padding: 10px 20px;
  
  ${props => css`
    background-color: ${props.theme.buttons[props.kind].backgroundColor};
    border-radius: ${props.round ? "17px" : "0px"};
    color: ${props.theme.buttons[props.kind].color};
    width: ${props.fullWidth ? "100%" : "auto"};

    &:hover {
      background-color: ${props.theme.buttons[props.kind].backgroundHover};
    }
  `}
`;