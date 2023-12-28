import React, { FC, useState, useEffect } from 'react'
import { Card, Skeleton, Avatar, Flex, Button as antdButton } from 'antd'
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons'
import CreateNew from '../CreateNew';
import styled from 'styled-components';
import { INew } from '../../types/news';

const Button = styled(antdButton)`
    margin-bottom:1em;
`

const { Meta } = Card

const Container = styled('div')`
    padding-top:.5em;
    background-color:white;
`

const arr: INew[] = [
    {
        username: 'alex',
        comment: 'news text'
    },
    {
        username: 'oleg',
        comment: 'news text'
    },
    {
        username: 'alina',
        comment: 'news text'
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
                {isVisible && <CreateNew setItems={setItems} />}
                {items.map(({ username, comment }) => {
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