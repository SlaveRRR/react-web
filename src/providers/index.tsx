
import React, { FC, useState } from 'react'
import { ctx } from '../context'

type Props = {
    children: React.ReactNode
}

const ContextProvider: FC<Props> = ({ children }) => {
    const [isAuth, setIsAuth] = useState<boolean>(false)
    return <ctx.Provider value={{ isAuth, setIsAuth }}>
        {children}
    </ctx.Provider>
}

export default ContextProvider