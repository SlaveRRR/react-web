import styled from "styled-components";
import {IStyledProps,IValidateStatus } from './types'

const Form = styled("form")`
  background: #b9b8b8;
  padding: 0.5em;
  border-radius: 15px;
`;


const validateStatuses: IValidateStatus = {
    success: "green",
    error: "red",
    default: "#d9d9d9",
  };

const Input = styled("input")<IStyledProps>`
  border-radius: 6px;
  padding: 0.5em 0.5em;
  &:focus {
    outline: none;
  }
  &:focus-visible {
    border-color: #4096ff;
  }

  border: ${({ status }) => `1px solid ${validateStatuses[status]}`};
`;

export {Form,Input}