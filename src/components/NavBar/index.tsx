import React, { FC } from 'react'
import { Button, Menu, Flex } from 'antd'
import { Link } from 'react-router-dom'
import { FILMS, HOME, PROFILE, NEWS } from '../../app/routing/config'
import { useAuth } from '../../hooks/useAuth'
import { UserOutlined } from '@ant-design/icons'


const NavBar: FC = () => {
    const { isAuth, setIsAuth } = useAuth()
    const items = [
        {
            label: <Link to={HOME}>Home</Link>,
            key: 'home',
        },
        {
            label: <Link to={FILMS}>Films</Link>,
            key: 'films',
        },
        {
            label: <Link to={PROFILE}>Profile</Link>,
            key: 'profile',
            icon: <UserOutlined />,
        },
        {
            label: <Link to={NEWS}>News</Link>,
            key: 'news',
        },
        {
            label: <Button onClick={() => setIsAuth(!isAuth)}>{isAuth ? 'Выйти' : 'Войти'}</Button>,
            key: 'auth',
        },
    ]
    return (
        <Menu style={{
            marginBottom: '2em',
            display: 'flex',
            justifyContent: 'space-between',
        }} mode="horizontal"  defaultSelectedKeys={["home"]} items={items} />
    )

}

export default NavBar