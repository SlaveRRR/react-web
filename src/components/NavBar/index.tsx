import React, { FC } from 'react'
import { Button as antdButton, Menu as antdMenu, Switch as antdSwitch} from 'antd'
import { Link } from 'react-router-dom'
import { FILMS, HOME, PROFILE, NEWS } from '../../app/routing/config'
import { useAuth } from '../../hooks/useAuth'
import { useTheme } from '../../hooks/useTheme'
import { UserOutlined } from '@ant-design/icons'
import styled from 'styled-components'





const Switch = styled(antdSwitch)`
   
    &.ant-switch{
        outline: var(--main-border);
        background:var(--theme-bg);
        outline-offset: 1px;
    }
    &.ant-switch.ant-switch-checked{
        background:black;
        &:hover{
            background:#aaa7a7;
        }
    }
    &.ant-switch .ant-switch-inner .ant-switch-inner-unchecked {
        margin-top:-26px;
    }
`

const Menu = styled(antdMenu)`
    display:flex;
    justify-content:space-between;
    margin-bottom:2em;
    &::before,&::after{
        display:none;
    }
    transition:background-color .8s;
`

const Button = styled(antdButton)`
     color:var(--theme-text-color);
     background:var(--theme-bg);
     border: var(--main-border);
`

const NavBar: FC = () => {
    const { isAuth, setIsAuth } = useAuth();

    const [theme,toggleTheme] = useTheme();

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
            label: <Switch
                onChange={() => toggleTheme()}
                checkedChildren={<svg fill='white' xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" /></svg>}
                unCheckedChildren={<svg  xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" /></svg>}
            />,
            key: 'theme',
        },
        {
            label: <Button onClick={() => setIsAuth(prev => !prev)}>{isAuth ? 'Выйти' : 'Войти'}</Button>,
            key: 'auth',
        },
    ]
    return (
       <Menu mode="horizontal" defaultSelectedKeys={["home"]} items={items} />
      


    )

}

export default NavBar