import styled from "styled-components";

export const CellStyles = styled.div`
  background: ${(props) => props.life === 1
		? "radial-gradient(circle at 2px 2px, rgb(27, 161, 181), #000)"
		: "none"};
  border-radius: 50%;
  border: 1px solid #999999;
  height: 10px;
  margin: 5px;
  width: 10px;

  &:hover {
    background: ${(props) => props.life === 0 && !props.isRunning &&
      "radial-gradient(circle at 2px 2px, rgba(103, 73, 199, 0.7), #000)"};
  }
`;
