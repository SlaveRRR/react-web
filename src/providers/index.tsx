
import React, { FC, useState } from 'react'
import { ctx } from '../context'
import { ITheme } from '../types/theme'

type Props = {
    children: React.ReactNode
}

const ContextProvider: FC<Props> = ({ children }) => {
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [theme,setTheme] = useState<ITheme>({
        mode:'light',
        Menu:{
            colorBgContainer:'whitesmoke',
            colorText:'black'
        },
        Typography:{
            colorText:'black',
            colorError:'red'
        },
        Divider:{
            colorSplit:'rgba(5, 5, 5, 0.06)'
        },
        Statistic:{
            colorText:'black',
            colorTextDescription:'rgba(0, 0, 0, 0.45)'
        }
    })

    return <ctx.Provider value={{ isAuth, setIsAuth,theme,setTheme }}>
        {children}
    </ctx.Provider>
}

export default ContextProvider