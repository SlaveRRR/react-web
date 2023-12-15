import React, { FC } from 'react'
import { Avatar, Space, Statistic as antdStatistic, Typography } from 'antd'
import { Divider } from 'antd';
import styled from 'styled-components';

const { Title } = Typography

const Statistic = styled(antdStatistic)`
    text-align: center;
`



const Profile: FC = () => {
    return (
        <div className="container">
            <Space size="middle">
                <Avatar size={64}>User</Avatar>
                <Title>Username profile</Title>
            </Space>
            <Divider />
            <Statistic title="Comments" value={10} />
        </div>





    )
}

export default Profile