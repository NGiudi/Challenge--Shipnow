import styled, { css } from "styled-components";

export const SidebarWrapper = styled.div`
  background-color: red;
  top: 0;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  z-index: 10;

  ${props => css`
    width: ${props.open ? "400px" : "0px"};
  `}
`;