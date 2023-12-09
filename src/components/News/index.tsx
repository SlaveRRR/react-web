import React, { FC, useState, useEffect } from 'react'
import { Card, Skeleton, Avatar } from 'antd'
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons'


const { Meta } = Card

interface INew {
    title: string;
    description: string
}

const News: FC = () => {

    const [isLoading, setLoading] = useState<boolean>(true)
    const delay = (ms: number) => new Promise((res) => setTimeout(() => setLoading(false), ms))
    useEffect(() => {
        delay(2000)
    }, [])
    const items: INew[] = [
        {
            title: 'news 1',
            description: 'news text'
        },
        {
            title: 'news 2',
            description: 'news text'
        },
        {
            title: 'news 3',
            description: 'news text'
        },
    ]
    return (
        <>
            {items.map(({title,description }) => {
                return <Card
                    style={{ width: 300, marginTop: 16 }}
                    actions={[
                        <LikeOutlined key="like" />,
                        <DislikeOutlined key="dislike" />,
                    ]}
                >
                    <Skeleton loading={isLoading} avatar active>
                        <Meta
                            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />}
                            title={title}
                            description={description}
                        />
                    </Skeleton>
                </Card>
            })}
        </>


    )
}

export default News