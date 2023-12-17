import React,{createContext} from 'react'
import { ITheme } from '../types/theme';



interface IContext{
    isAuth:boolean;
    setIsAuth:React.Dispatch<React.SetStateAction<boolean>>
    theme:ITheme;
    setTheme:React.Dispatch<React.SetStateAction<ITheme>>
}

export const ctx = createContext<IContext>({} as IContext)