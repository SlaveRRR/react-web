import React, { FC, useEffect, useState } from 'react'

import './App.css'
import { Table, Space, Tag, Flex } from 'antd'
import type { ColumnsType } from 'antd/es/table';
import axios from 'axios';

const LIMIT = 10

interface IUser {
  id: number;
  key: React.Key;
  username: string;
  age: number;
  address: string;
  gender: 'male' | 'female';
  eyeColor:string ;
}

interface ResponseUsers {
  users:IUser[];
  total:number;
  skip:number;
  limit:number;
}


const columns: ColumnsType<IUser> = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    render: (value) => value.address
  },
  {
    title: 'EyeColor',
    key: 'eyeColor',
    dataIndex: 'eyeColor',
    render: (_, { eyeColor }) => (
      <>
       <Tag color={eyeColor == 'Amber' ? 'blue' : eyeColor} >
              {eyeColor.toUpperCase()}
        </Tag>
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.username}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];




const App: FC = () => {

  const [page, setPage] = useState<number>(0)
  const [dataSource, setDataSource] = useState<IUser[]>();
  const [isLoading,setLoading] = useState<boolean>(false)
  const getData = async (page : number,limit:number)  =>{
    
    const offset = page * 10

    setLoading(true)
    const response = await axios.get<ResponseUsers>(`https://dummyjson.com/users?limit=${limit}&skip=${offset}&select=username,age,id,gender,eyeColor,address`)
    
    const {data:{users}} = response;
    console.log(users)
    setDataSource(users)

    setLoading(false)
   
  }
  useEffect(() =>{
    getData(page,LIMIT)
  },[page])

  return (
    <>
      <Table dataSource={dataSource} columns={columns} loading={isLoading} pagination={false} />
      <Flex gap="middle" justify='center'>
        <button onClick={() => setPage(page - 1)} disabled={page == 0}>Назад</button>
        <p>{page + 1}</p>
        <button disabled={page == 9} onClick={() => setPage(page + 1)}>Вперёд</button>
      </Flex>

    </>
  )

}
export default App


