import React,{createContext} from 'react'

interface IContext{
    isAuth:boolean;
    setIsAuth:React.Dispatch<React.SetStateAction<boolean>>
}

export const ctx = createContext<IContext>({} as IContext)