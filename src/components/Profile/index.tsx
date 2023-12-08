import React, { FC } from 'react'
import { UserOutlined } from '@ant-design/icons'
import { Avatar, Space, Statistic, Typography } from 'antd'
import { Divider } from 'antd';

const {Title} = Typography

const Profile: FC = () => {
    return (
        <>
            <Space size="middle">
                <Avatar size={64}>User</Avatar>
                <Title>Username profile</Title>
            </Space>
            <Divider />
            <Statistic title="Comments" value={10} />

        </>
    )
}

export default Profile