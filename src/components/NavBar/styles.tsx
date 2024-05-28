import { Button as antdButton, Menu as antdMenu, Switch as antdSwitch } from "antd";
import styled from "styled-components";

export const Switch = styled(antdSwitch)`
   &.ant-switch {
      outline: var(--main-border);
      background: var(--theme-bg);
      outline-offset: 1px;
   }
   &.ant-switch.ant-switch-checked {
      background: black;
      &:hover {
         background: #aaa7a7;
      }
   }
   &.ant-switch .ant-switch-inner .ant-switch-inner-unchecked {
      margin-top: -26px;
   }
`;

export const Menu = styled(antdMenu)`
   display: flex;
   justify-content: space-between;
   margin-bottom: 2em;
   &::before,
   &::after {
      display: none;
   }
   transition: background-color 0.8s;
`;

export const Button = styled(antdButton)`
   color: var(--theme-text-color);
   background: var(--theme-bg);
   border: var(--main-border);
`;
