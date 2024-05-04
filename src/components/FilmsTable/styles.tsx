import { Table as antdTable, Space, Flex, Button as antdButton, Image, Typography } from "antd";
import styled from "styled-components";

const { Title: antdTitle, Text } = Typography;

const Table = styled(antdTable)`
   margin-bottom: 1em;

   & .ant-table {
      outline-offset: 1px;
      outline: var(--table-outline);
   }

   & .ant-table-tbody {
      background-color: var(--table-content-bg);
      color: var(--theme-text-color);
   }

   &.ant-table-wrapper .ant-table-thead > tr > th {
      text-align: center;
      background-color: var(--table-header-bg);
      color: var(--theme-text-color);
   }
   &.ant-table-wrapper table {
      text-align: center;
   }
   &.ant-table-wrapper .ant-table-tbody .ant-table-row > .ant-table-cell-row-hover {
      background-color: var(--table-cell-hover-color);
   }
`;

const Button = styled(antdButton)`
   &.ant-btn-default:disabled {
      background-color: #b2b2b2;
   }
`;
const Title = styled(antdTitle)`
   &.ant-typography {
      color: var(--theme-text-color);
   }
`;

export { Table, Button, Title, Flex, Image, Text, Space };
