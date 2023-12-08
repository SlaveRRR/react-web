import {useContext} from 'react'
import { ctx } from '../context'

export const useAuth = () =>{
    return useContext(ctx)
}