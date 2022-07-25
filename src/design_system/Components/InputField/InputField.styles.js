import styled, { css } from "styled-components";

import { Field } from "formik";

export const ErrorWrapper = styled.div`
  color: red;
  height: 16px;
  font-size: 11px;
  margin-left: 8px;
`;

export const Input = styled(Field)` 
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  margin-bottom: 4px;
  outline: none;
  padding: 8px 12px;
  width: 100%;

  ${props => css`
    background-color: ${props.theme.input.backgroundColor};
    border-color: ${props.iserror ? "red" : "#9DA8BA"};
    color: ${props.theme.input.color};
  `}
`;

export const Label = styled.p`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 4px;
  margin-top: 8px;
`;
