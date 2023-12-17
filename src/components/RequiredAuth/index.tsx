
import React, { FC } from 'react'
import { Typography } from 'antd'
import { useAuth } from '../../hooks/useAuth';
import styled from 'styled-components';

const { Title:antdTitle } = Typography;

const Title = styled(antdTitle)`
        text-align: center;
`

type Props = {
    children: React.ReactNode,
}

const RequiredAuth: FC<Props> = ({ children }) => {
    const { isAuth } = useAuth()
    return isAuth ? children : <Title   type="danger">Authorized only!</Title>
}

export default RequiredAuth