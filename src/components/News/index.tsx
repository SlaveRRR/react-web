import React, { FC, useState, useEffect } from 'react'
import { Card, Skeleton, Avatar, Flex,Image } from 'antd'
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons'
import CreateNew from '../CreateNew';
import {Button,Container} from './style'
import { INew } from './types';

const { Meta } = Card


const arr: INew[] = [
    {
        username: 'alex',
        comment: 'news text',
        picture:"https://www.spcdn.org/blog/wp-content/uploads/2021/01/cover-12-1110x420.png"
    },
    {
        username: 'oleg',
        comment: 'news text',
        picture:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    },
    {
        username: 'alina',
        comment: 'news text',
        picture:"https://www.rgo.ru/sites/default/files/styles/head_image_article/public/node/61549/photo-2023-11-08-150058.jpeg?itok=2Z42QgJa"
    },
]

const News: FC = () => {

    const [isLoading, setLoading] = useState<boolean>(true);

    const [items, setItems] = useState<INew[]>(arr)
    const [isVisible, setVisible] = useState<boolean>(false)
    const delay = (ms: number) => new Promise((res) => setTimeout(() => setLoading(false), ms))
    useEffect(() => {
        delay(2000)
    }, [])

    return (
        <Container className='container'>

            <Flex vertical align='center'>
                <Button onClick={() => setVisible(prev => !prev)}>{isVisible ? 'Hide form' : 'Show form'}</Button>
                {isVisible && <CreateNew items={items} setItems={setItems} />}
                {items.map(({ username, comment, picture }) => {
                    return <Card
                    key={username}
                        style={{ width: 300, marginTop: 16 }}
                        cover={
                            isLoading ? 
                            <Skeleton.Image active={isLoading} style={{
                                width:'300px',
                                height:'180px'
                            }} />
                            :
                            <Image
                            alt="post image"
                            src={picture}
                            height={180} style={{
                                width: '100%',
                                objectFit: 'cover',
                                objectPosition:'center'
                              }}
                          />
                          }
                        actions={[
                            <LikeOutlined key="like" />,
                            <DislikeOutlined key="dislike" />,
                        ]}
                    >
                        <Skeleton loading={isLoading} avatar active>
                            <Meta
                                avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />}
                                title={username}
                                description={comment}
                            />
                        </Skeleton>
                    </Card>
                })}
            </Flex>


        </Container>



    )
}

export default News