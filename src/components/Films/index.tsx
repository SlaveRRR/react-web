import React, { FC, useEffect, useState } from 'react'


import { Table, Space, Flex, Button,Image,Typography } from 'antd'
import type { ColumnsType } from 'antd/es/table';
import axios from 'axios';



import { HeartTwoTone } from '@ant-design/icons'

const LIMIT = 10
const apiUrl = ' https://api.kinopoisk.dev/v1.4/'

const {Title} = Typography

interface IFilm {
  id:number;
  name:string;
  shortDescription:string;
  poster: {
    url:string,
    previewUrl : string,

  };
  genres:Array<{name:string}>
  rating:{kp: number, imdb: number, filmCritics: number, russianFilmCritics: number, await: boolean | null}
  year:number;
}

interface ResponseFimls{
  docs: IFilm[];
  limit:number;
  page:number;
  pages:number;
  total:number;

}




const columns: ColumnsType<IFilm> = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (_, { name }) => <Title level={4}>{name}</Title>
  },
  {
    title: 'Poster',
    key: 'poster',
    dataIndex: 'poster',
    render: (_, { poster }) => <Image src={poster.previewUrl} height={150} style={{
      width:'100%',
      objectFit:'cover',
    }} alt='poster' />
  },
  {
    title: 'Rating',
    dataIndex: 'rating',
    key: 'rating',
    render: (_, { rating }) => rating.kp
  },
  {
    title: 'Year',
    dataIndex: 'year',
    key: 'year',
  },
  {
    title: 'Like',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Button icon={<HeartTwoTone twoToneColor={'red'} />} />
      </Space>
    ),
  },
];




const Films: FC = () => {

  const [page, setPage] = useState<number>(1)
  const [dataSource, setDataSource] = useState<IFilm[]>();
  const [isLoading, setLoading] = useState<boolean>(false)
  const getData = async (page: number, limit: number) => {

  

    setLoading(true)

   
    const response = await axios.get<ResponseFimls>(`${apiUrl}movie?page=${page}&limit=${limit}&selectFields=id&selectFields=name&selectFields=year&selectFields=shortDescription&selectFields=movieLength&selectFields=poster&selectFields=rating&selectFields=genres&selectFields=releaseYears&type=movie&sortField=votes.kp&sortType=-1`, {
      headers: {
        "X-API-KEY": "Q1KQG8F-X2K4TP2-N3Y4TEM-G0TY6S7",
        'Content-Type': "application/json"
      }
    })
  
    const { data: { docs:films } } = response;
 
    setDataSource(films)

    setLoading(false)

  }
  useEffect(() => {
    getData(page, LIMIT)
  }, [page])

  return (
    <>
      <Table  dataSource={dataSource} columns={columns} loading={isLoading} pagination={false} />
      <Flex gap="middle" justify='center'>
        <button onClick={() => setPage(page - 1)} disabled={page == 1}>Назад</button>
        <p>{page}</p>
        <button disabled={page == 9} onClick={() => setPage(page + 1)}>Вперёд</button>
      </Flex>


    </>
  )

}
export default Films


