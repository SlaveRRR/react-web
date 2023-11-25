import React,{FC} from 'react'

import './App.css'
import { Table,Space,Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  id:number;
  key: React.Key;
  name: string;
  age: number;
  address: string;
  gender:'male' | 'female';
  tags: string[];
}

const dataSource : DataType[] = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    id:1,
    gender:'male',
    address: '10 Downing Street',
    tags: ['nice'],
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    id:2,
    gender:'male',
    address: '10 Downing Street',
    tags: ['developer'],
  },
  {
    key: '3',
    name: 'Sam',
    age: 42,
    id:3,
    gender:'male',
    address: '10 Downing Street',
    tags: ['teacher', 'developer'],
  },
  {
    key: '4',
    name: 'Olga',
    age: 18,
    id:4,
    gender:'female',
    address: '10 Downing Street',
    tags: ['nice', 'loser'],
  },
  {
    key: '5',
    name: 'Alex',
    age: 50,
    id:5,
    gender:'male',
    address: '10 Avenue Stree',
    tags: ['nice', 'developer'],
  },
];
const columns: ColumnsType<DataType> = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
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
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];




const App: FC = () => {
  return <>
  <Table  dataSource={dataSource} columns={columns} />
  </>
}
export default App


