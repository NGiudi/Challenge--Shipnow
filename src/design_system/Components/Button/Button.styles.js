import styled, { css } from "styled-components";

export const BtnStyles = styled.button`
  border: none;
  font-size: 14px;
  font-weight: 600;
  margin-right: 8px;
  padding: 10px 20px;
  
  ${props => css`
    background-color: ${props.theme.button[props.kind].backgroundColor};
    border-radius: ${props.round ? "17px" : "4px"};
    color: ${props.theme.button[props.kind].color};
    width: ${props.fullWidth ? "100%" : "auto"};

    &:hover {
      background-color: ${props.theme.button[props.kind].backgroundHover};
    }
  `}
`;