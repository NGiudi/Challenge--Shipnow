import styled, { css } from "styled-components";

export const SidebarWrapper = styled.div`
  background-color: white;
  border-right-color: #C1C1C1;
  border-right-style: solid;
  border-right-width: 1px;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: 10;

  ${props => css`
    width: ${props.open ? "400px" : "0px"};
  `}
`;