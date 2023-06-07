import styled from "styled-components";

export const FlexWrapper = styled.div`
  align-items: ${(props) => props.alignItems};
  display: flex;
  justify-content: ${(props) => props.justify};
`;