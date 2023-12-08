
import React,{FC} from 'react'
import {Typography} from 'antd'
const { Title, Paragraph } = Typography;


const Home : FC = () => {
    return (
        <Typography>
            <Title>Welcome to Filmix</Title>
            <Paragraph>
                Online cinema without ads
            </Paragraph>
        </Typography>
    )
}

export default Home