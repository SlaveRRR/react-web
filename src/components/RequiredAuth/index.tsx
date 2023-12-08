
import React, { FC } from 'react'
import { Typography } from 'antd'
import { useAuth } from '../../hooks/useAuth';

const { Text } = Typography;

type Props = {
    children: React.ReactNode,
}

const RequiredAuth: FC<Props> = ({ children }) => {
    const { isAuth } = useAuth()
    return isAuth ? children : <Text type="danger">Authorized only!</Text>
}

export default RequiredAuth