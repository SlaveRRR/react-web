import React, { FC, useEffect, useState } from "react";
import { IFilm, ResponseFilms } from "../../types/films";

import { Table as antdTable, Space, Flex, Button as antdButton, Image, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import axios from "axios";
import { HeartTwoTone } from "@ant-design/icons";
import styled from "styled-components";

const LIMIT = 10;
const apiUrl = " https://api.kinopoisk.dev/v1.4/";

const maxPage = 100;

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

const columns: ColumnsType<IFilm> = [
   {
      title: "Id",
      dataIndex: "id",
      key: "id",
   },
   {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, { name }) => <Title level={4}>{name}</Title>,
   },
   {
      title: "Poster",
      key: "poster",
      dataIndex: "poster",
      render: (_, { poster }) => (
         <Image
            src={poster.previewUrl}
            height={150}
            style={{
               width: "100%",
               objectFit: "cover",
            }}
            alt="poster"
         />
      ),
   },
   {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      render: (_, { rating }) => rating.kp,
   },
   {
      title: "Year",
      dataIndex: "year",
      key: "year",
   },
   {
      title: "Like",
      key: "action",
      render: (_, record) => (
         <Space size="middle">
            <Button icon={<HeartTwoTone twoToneColor={"red"} />} />
         </Space>
      ),
   },
];

const Films: FC = () => {
   const [page, setPage] = useState<number>(1);
   const [dataSource, setDataSource] = useState<IFilm[]>();
   const [isLoading, setLoading] = useState<boolean>(false);

   const getData = async (page: number, limit: number) => {
      setLoading(true);

      const response = await axios.get<ResponseFilms>(
         `${apiUrl}movie?page=${page}&limit=${limit}&selectFields=id&selectFields=name&selectFields=year&selectFields=shortDescription&selectFields=movieLength&selectFields=poster&selectFields=rating&selectFields=genres&selectFields=releaseYears&type=movie&sortField=votes.kp&sortType=-1`,
         {
            headers: {
               "X-API-KEY": "Q1KQG8F-X2K4TP2-N3Y4TEM-G0TY6S7",
               "Content-Type": "application/json",
            },
         },
      );
      console.log(response);
      const {
         data: { docs: films },
      } = response;

      setDataSource(films);

      setLoading(false);
   };

   useEffect(() => {
      getData(page, LIMIT);
   }, [page]);

   return (
      <div className="container">
         <Table dataSource={dataSource} columns={columns} loading={isLoading} pagination={false} />
         <Flex gap="middle" justify="center">
            <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
               Назад
            </Button>
            <Text>{page}</Text>
            <Button disabled={page === maxPage} onClick={() => setPage(page + 1)}>
               Вперёд
            </Button>
         </Flex>
      </div>
   );
};
export default Films;
