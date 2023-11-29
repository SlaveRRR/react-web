import React, { FC, useEffect, useState } from 'react'

import './App.css'
import { Table, Space, Tag, Flex } from 'antd'
import type { ColumnsType } from 'antd/es/table';
import axios from 'axios';

const LIMIT = 10

interface DataType {
  id: number;
  key: React.Key;
  username: string;
  age: number;
  address: string;
  gender: 'male' | 'female';
  eyeColor:string ;
}



const columns: ColumnsType<DataType> = [
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

  const [offset, setOffset] = useState<number>(0)
  const [dataSource, setDataSource] = useState<DataType[]>();
  const [isLoading,setLoading] = useState<boolean>(false)
  const getData = async (offset : number,limit:number)  =>{ 
    setLoading(true)
    const response = await axios.get(`https://dummyjson.com/users?limit=10&skip=${offset}&select=username,age,id,gender,eyeColor,address`)
    const {data:{users}} = response;
    console.log(response)
    setDataSource(users)
    setLoading(false)
   
  }
  useEffect(() =>{
    getData(offset,LIMIT)
  },[offset])

  return (
    <>
      <Table dataSource={dataSource} columns={columns} loading={isLoading} pagination={false} />
      <Flex gap="middle" justify='center'>
        <button onClick={() => setOffset(offset - 10)} disabled={offset == 0}>Назад</button>
        <p>{offset === 0 ? 1 : (offset/10) + 1}</p>
        <button disabled={offset == 90} onClick={() => setOffset(offset + 10)}>Вперёд</button>
      </Flex>

    </>
  )

}
export default App


