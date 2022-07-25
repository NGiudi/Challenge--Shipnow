import styled, { css } from "styled-components";

export const SidebarWrapper = styled.div`
  border-right-style: solid;
  border-right-width: 1px;
  height: 100%;
  left: 0;
  overflow: hidden;
  padding: 10px;
  position: absolute;
  top: 0;
  z-index: 10;

  ${props => css`
    background-color: ${props.theme.sideBar.backgroundColor};
    border-right-color: ${props.theme.sideBar.borderColor};
    display: ${props.open ? "block" : "none"}; 
    width: ${props.open ? "300px" : "0px"};
  `}
`;