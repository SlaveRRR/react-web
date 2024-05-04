import React, { FC, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { filmsApi } from "../../api/films";
import { HeartTwoTone } from "@ant-design/icons";
import { IFilm } from "./types";
import type { ColumnsType } from "antd/es/table";
import { Title, Button, Flex, Image, Space, Table, Text } from "./styles";

const LIMIT = 12;

const maxPage = 100;

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

const FilmsTable: FC = () => {
   const [page, setPage] = useState<number>(1);

   const { data, isLoading } = useQuery({
      queryKey: ["films", page],
      queryFn: async () => await filmsApi.getFilms(page, LIMIT),
      select: (response) => response.docs,
   });

   return (
      <div className="container">
         <Table dataSource={data} columns={columns} loading={isLoading} pagination={false} />
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
export default FilmsTable;
