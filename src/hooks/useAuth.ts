import {useContext} from 'react'
import { ctx } from '../context'

export const useAuth = () =>{
    const {isAuth,setIsAuth} = useContext(ctx);
    return {isAuth,setIsAuth}
}